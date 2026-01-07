/**
 *　ライフサイクルのテスト（AIによる自動生成なので、信憑性はやや怪しい）
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { TodoListModel } from '../src/model/TodoListModel.js';
import { TodoItemModel } from '../src/model/TodoItemModel.js';

// ユーティリティ関数でテスト用のTodoItemを作成
let nextId = 1;
function makeItem(title, completed = false) {
    return new TodoItemModel({ id: nextId++, title, completed });
}

test('addTodo triggers change, unsubscribe stops further notifications', () => {
    const model = new TodoListModel();
    let calls = 0;
    const unsubscribe = model.onChange(() => { calls++; });
    model.addTodo(makeItem('A'));
    assert.equal(calls, 1, 'first add should fire change');
    unsubscribe();
    model.addTodo(makeItem('B'));
    assert.equal(calls, 1, 'after unsubscribe no more change events');
});

test('empty title todo is not added', () => {
    const model = new TodoListModel();
    const before = model.getTotalCount();
    model.addTodo(makeItem(''));
    assert.equal(model.getTotalCount(), before, 'empty title should be ignored');
});

test('updateTodo emits change when item exists; does not after unsubscribe', () => {
    const model = new TodoListModel();
    const item = makeItem('Task');
    model.addTodo(item);
    let calls = 0;
    const unsubscribe = model.onChange(() => { calls++; });
    model.updateTodo({ id: item.id, completed: true });
    assert.equal(calls, 1, 'update should trigger change once');
    unsubscribe();
    model.updateTodo({ id: item.id, completed: false });
    assert.equal(calls, 1, 'no further change after unsubscribe');
});

test('deleteTodo triggers change and removes item', () => {
    const model = new TodoListModel();
    const item1 = makeItem('One');
    const item2 = makeItem('Two');
    model.addTodo(item1);
    model.addTodo(item2);
    let seen = 0;
    const unsubscribe = model.onChange(() => { seen++; });
    model.deleteTodo({ id: item1.id });
    assert.equal(seen, 1, 'delete should fire one change');
    assert.equal(model.getTodoItems().some(t => t.id === item1.id), false, 'item1 removed');
    unsubscribe();
});

test('multiple listeners: removing one does not affect the other', () => {
    const model = new TodoListModel();
    let a = 0; let b = 0;
    const unsubA = model.onChange(() => { a++; });
    const unsubB = model.onChange(() => { b++; });
    model.addTodo(makeItem('X'));
    assert.equal(a, 1); assert.equal(b, 1);
    unsubA();
    model.addTodo(makeItem('Y'));
    assert.equal(a, 1, 'A should not increment after unsubscribe');
    assert.equal(b, 2, 'B should still receive events');
    unsubB();
});
