
let p = console.log;

const OBJ = {};
OBJ.name = 'John';
p(OBJ.name); // John
// OBJ = {}; // error

const ARY = ['a'];
p(ARY[0]); // a
ARY[0] = 'b';
p(ARY[0]); // b
// ARY = ['c']; // error

