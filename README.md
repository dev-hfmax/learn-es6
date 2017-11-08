# ES6 のメモ

## 基本構文

### let
ブロックスコープの変数定義 let が入った。これで即時関数は不要になった。

[コード][01js]

### const
定数を定義する const が入った。ブロックスコープ。  
定数がオブジェクトや配列の場合、中身の変更はできる（Ruby の定数と同じ）。

[コード][02js]

### 2進数リテラルと8進数リテラル
2進数リテラルと8進数リテラルが入った。8進数はどういう状況で使うのだろう。  
2進数は頭に 0b を付ける（0b01 など）。  
8進数は頭に 0o を付ける（0o10 など）。  

[コード][03js]

### テンプレート文字列
文字列リテラルへの変数の埋め込みができるようになった。let の次に嬉しいかも。  
変数は $ をつけて囲むのか。# と間違わないようにせねば。
```
let age = 25;
console.log(`I am ${age} years old.`); // I am 25 years old.
```

[コード][04js]

### シンボル
シンボルが入った。今までは Object で列挙型ぽくしてた（はず）。  
それで問題なかったかもしれないけど、列挙型同士の比較なんかにチェックが効かなかった。  
今後はコンパイル時にチェックできるようになりますね。

[コード][05js]

## 関数

## 組み込みオブジェクト

## オブジェクト指向構文

[01js]: https://github.com/dev-hfmax/learn-es6/blob/master/01.js
[02js]: https://github.com/dev-hfmax/learn-es6/blob/master/02.js
[03js]: https://github.com/dev-hfmax/learn-es6/blob/master/03.js
[04js]: https://github.com/dev-hfmax/learn-es6/blob/master/04.js
[05js]: https://github.com/dev-hfmax/learn-es6/blob/master/05.js

