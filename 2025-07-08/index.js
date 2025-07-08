const assert = require("assert");
/* プロトタイプに定義したメソッドとインスタンスに定義したメソッドの違い */
class Example {
    // クラスフィールドに定義するとインスタンスにメソッドを定義することになる
    instanceMethod = () => {
        return "This is an instance method.";
    }
    // メソッド構文で定義するとプロトタイプオブジェクトにメソッドを定義することになる
    prototypeMethod() {
        return "This is a prototype method.";
    }

    method = () => {
        return "インスタンスに定義されたmethod";
    }
    method() {
        return "プロトタイプに定義されたmethod";
    }
}

// インスタンスメソッドとプロトタイプメソッドの違いを確認し、プロトタイプチェーンを確認する
{
    const example = new Example();
    assert(example.instanceMethod() === "This is an instance method.");
    assert(example.prototypeMethod() === "This is a prototype method.");
    assert(example.method() === "インスタンスに定義されたmethod");
    delete example.method; // インスタンスに定義されたmethodを削除
    assert(example.method() === "プロトタイプに定義されたmethod"); // プロトタイプに定義されたmethodが呼び出されることから、プロトタイプメソッドもインスタンスメソッドも定義はされている
}

// プロトタイプオブジェクトは常に存在する
{
    function fn() {}
    assert(typeof fn.prototype === "object"); // プロトタイプオブジェクトは常に存在する
    assert(typeof Example.prototype === "object"); // クラスのプロトタイプオブジェクトも存在する
}

// new演算子でインスタンスが作成されるときに、インスタンスには、クラスのプロトタイプオブジェクトに参照が保存される
// これはインスタンスは自分がどのクラスから作られたかわかるということ
const example = new Example();
assert(Object.getPrototypeOf(example) === Example.prototype);

// プロトタイプを変更すると全インスタンスに影響する
{
    const example1 = new Example();
    const example2 = new Example();
    assert(example1.prototypeMethod() === "This is a prototype method.");
    assert(example2.prototypeMethod() === "This is a prototype method.");
    // example1のプロトタイプメソッドを変更すると、example2のプロトタイプメソッドも変更される
    Object.getPrototypeOf(example1).prototypeMethod = function () {
        return "changed!!!";
    }
    assert(example1.prototypeMethod() === "changed!!!");
    assert(example2.prototypeMethod() === "changed!!!");
}

// TODO 継承