
let p = console.log;

// Array
let scores = [100, 60, 30, 80, 90, 10, 70];
{
  let [s1, s2] = scores;
  p(s1); // 100
  p(s2); // 60
}
{
  let [s1, s2, ...sRest] = scores;
  p(s1); // 100
  p(s2); // 60
  p(sRest); // [ 30, 80, 90, 10, 70 ]
  // let [s1, ...sn, s7] = scores; // error
}

// Object
let person = {
  id: 1,
  classname: 'A',
  name: 'foo',
  age: 25
}
let {name, age} = person
p(name);
p(age);

