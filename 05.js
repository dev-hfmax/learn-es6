
let p = console.log;

const MAXIMIZE = Symbol();
const MINIMIZE = Symbol();
const NORMAL = Symbol();

let setWindowState = function(state) {
  switch (state) {
    case MAXIMIZE:
      p("最大化します。");
      break;
    case MINIMIZE:
      p("最小化します。");
      break;
    case NORMAL:
      p("通常サイズにします。");
      break;
    default:
      throw "不正な指定です";
  }
}
setWindowState(MAXIMIZE); // 最大化します。
setWindowState(MINIMIZE); // 最小化します。
setWindowState(NORMAL); // 通常サイズにします。
setWindowState(0); // 例外発生

