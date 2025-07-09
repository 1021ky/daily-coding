const assert = require("assert");
/* 継承 */

class Parent {}

class Child extends Parent {}

// ParentもChildもParentクラスのインスタンス
{
    const parent = new Parent();
    const child = new Child();
    assert(parent instanceof Parent);
    assert(child instanceof Parent);
    assert(child instanceof Child);
}

// 親クラスのメソッドを使うときはsuperを使う
{

    class Parent {
        constructor(hoge) {
            this.hoge = hoge;
            console.log("Parent constructor called");
        }
        get hoge() {
            return this._hoge;
        }
        set hoge(value) {
            this._hoge = value;
        }
    }

    class Child extends Parent {
        constructor(hoge, fuga) {
            // this._fuga = fuga; // superの前にthisに触るとReferenceErrorになる

            super(hoge); // コンストラクタの処理順は親→子
            this._fuga = fuga;
            console.log("Child constructor called");
        }
        get fuga() {
            return this._fuga;
        }
        set fuga(value) {
            this._fuga = value;
        }
    }

    const parent = new Parent("parent hoge");
    const child = new Child("child hoge", "fuga");
    assert(parent.hoge === "parent hoge");
    assert(child.hoge === "child hoge");
    assert(child.fuga === "fuga");

}

