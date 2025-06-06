const binaryVal = 0b000101;
console.log('2進数表記で定義した値を10進数表記: ', binaryVal);
console.log('ビット否定して2進数表記(JSでは32ビットで演算されるため32桁になる): ', (~binaryVal >>> 0).toString(2)); // >>>はゼロ埋め右シフト演算子で、0を指定するとシフトはせずに符号なし整数として扱う
console.log('2進数表記(ゼロ埋め): ', (binaryVal >>> 0).toString(2).padStart(32, '0'));

const bin1 = 0b0001;
console.log(bin1);
console.log(bin1 ^ 0b0000);
console.log("1の32ビットでの2の補数" + (((~0b0001 | 0b0001) >>> 0).toString(2)));
console.log("9の32ビットでの2の補数" + (((~0b1001 + 0b0001) >>> 0).toString(2)));

const bin1_comp = 0b1111;
console.log(bin1_comp);

console.log("15と9のXOR: ", 15 ^ 9);

console.log('2進数表記のおためし')
console.log('2進数整数リテラルで定義した-5をtoStringで2進数表記で出力', (0b11111111111111111111111111111011).toString(2));
console.log('2進数整数リテラルで定義した5をtoStringで2進数表記で出力', (0b00000000000000000000000000000101).toString(2));
console.log('10進数整数リテラルで定義した5をtoStringで2進数表記で出力', (5 >>> 0).toString(2));
console.log('10進数整数リテラルで定義した-5をtoStringで2進数表記で出力', (-5 >>> 0).toString(2));

console.log('シフト演算子:', 0x00000001 << 1); // 左シフト演算子

