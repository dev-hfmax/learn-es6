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

### 分解代入というか分割代入というか
配列やオブジェクトの一部分を一気に変数に代入できるようになった。便利。  
```
let [a, b] = [1, 3, 5, 7, 9];
console.log(a); // 1
console.log(b); // 3
```
配列の場合、...演算子（どう読むの？）を使うことで、残りの要素を配列として代入できる。
```
let [a, b, ...rest] = [1, 3, 5, 7, 9];
console.log(rest); // [5, 7, 9]
```
...演算子は常に最後にないとダメらしく、真ん中に持ってきて最後の要素を取り出すことはできなかった。

あと、オブジェクトの一部分を取り出してオブジェクトを作るというか、
オブジェクトの一部分で構成されるオブジェクトを一気に作ることは、この機能ではできなさそう。
需要は多いと思うのだけど・・。  
そういう意味で、Destructuring であって、Substructuring ではないみたい。

[コード][06js]

## 関数

## 組み込みオブジェクト

## オブジェクト指向構文

[01js]: https://github.com/dev-hfmax/learn-es6/blob/master/01.js
[02js]: https://github.com/dev-hfmax/learn-es6/blob/master/02.js
[03js]: https://github.com/dev-hfmax/learn-es6/blob/master/03.js
[04js]: https://github.com/dev-hfmax/learn-es6/blob/master/04.js
[05js]: https://github.com/dev-hfmax/learn-es6/blob/master/05.js
[06js]: https://github.com/dev-hfmax/learn-es6/blob/master/06.js

