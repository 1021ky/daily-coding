const assert = require('assert');
/* クラス */
// クラス宣言文でクラス定義
class MyClass {
    constructor() {
        this.value = 42;
    }
    getValue() {
        return this.value;
    }
}

// クラス式でクラス定義
const MyClassExpression = class { // クラス名は省略可能
    constructor() {　// コンストラクタは省略可能
        this.value = 42;
    }

    getValue() {
        return this.value;
    }
}

// プロトタイプメソッドはインスタンス間で共有される
obj1 = new MyClass();
obj2 = new MyClass();
assert(obj1.getValue === obj2.getValue);

class ClassHasAccessor {
    constructor() {
        this._value = 0; // 参照を想定していない変数はアンダースコアで始めるのが慣習だが、ECMAScript2022ではprivateフィールドが導入されているため、アンダースコアは必須ではなくなるかもと
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        this._value = newValue;
    }
}

// アロー関数を使うことで、クラスのインスタンスメソッドをコールバック関数としてわたせる
class Counter {
    _count = 1; // クラスフィールドなので、厳密にはObject.definePropertyで定義される。
    field = 'field';
    constructor() {
        this._count = 5; // コンストラクタで初期値を設定すると、クラスフィールドで定義した値は上書きされる。
        // クラスフィールドと同じセッターがあって、コンストラクタ内での代入したときはセッターは呼ばれない。
        this.field = 'constructor field'; // これも同様に、セッターは呼ばれない。
        console.log(`Count set to ${this._count} in constructor`);
    }

    set count(value) {
        this._count = value;
        console.log(`Count set to ${this._count} in setter`);
    }
    get count() {
        return this._count;
    }
    set field(value) {
        this._field = value;
        console.log(`Field set to ${this._field} in setter`); // コンストラクタではセッターは呼ばれないため、このメッセージは表示されない
    }
    up = () => {
        this._count++; // アロー関数を使うことで、thisはクラスのインスタンスを参照する
    }
}
const counter = new Counter();
[1, 2, 3].forEach(counter.up);
assert(counter.count === 8);
// const c  = MyClassExpression();
// [1, 2, 3].forEach(c.getValue); これはエラーになる。thisがグローバルオブジェクトを参照してしまうため。


// パブリック・プライベート・スタティック・インスタンスフィールド
class MyClassWithFields {
    publicField = 'public'; // パブリックフィールド
    #privateField = 'private'; // プライベートフィールド（ECMAScript2022以降）
    static staticField = 'static'; // スタティックフィールド

    getPrivateField() {
        return this.#privateField; // プライベートフィールドはメソッド内からアクセス可能
    }
}
const myClassWithFields = new MyClassWithFields();
assert(myClassWithFields.publicField === 'public');
assert(myClassWithFields.getPrivateField() === 'private');
assert(MyClassWithFields.staticField === 'static');

// TODO: プロトタイプに定義したメソッドとインスタンスに定義したメソッドの違い