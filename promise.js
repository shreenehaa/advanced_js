// case 1 fulfilled
var drivingTest = new Promise((resolve, reject) => {
  let age = 20;
  if (age >= 18) {
    resolve("you are eligible");
  } else {
    reject("not eligible");
  }
});
console.log(drivingTest);

// case 2 rejected

var drivingTest = new Promise((resolve, reject) => {
  var age = 10;
  if (age >= 18) {
    resolve("you are eligible");
  } else {
    reject("you are not eligible");
  }
});
console.log(drivingTest);
//  in above if console.log is not given means it will give only error since clg is given i print reject msg and error

// case 3 pending
var drivingTest = new Promise((resolve, reject) => {
  var age = 19;
  setTimeout(() => {
    if (age >= 18) {
      resolve("you are eligible");
    } else {
      reject("you are not eligible");
    }
  }, 5000);
});
console.log(drivingTest);

//case 4 methods
// .then

drivingTest.then((msg) => console.log("your result is", msg));
// actuallyit will work as (msg) => console.log("your result is",msg)("you are eligible")
//   case  use of chaining .then
drivingTest
  .then((msg) => "your result is" + msg)
  .then((x) => x + "super")
  .then((x) => console.log("finally" + x))
  .catch((msg) => console.log("oh no " + msg))
  .finally((msg) => console.log("clean up"));
// case 5 error sinario .then will be skipped
drivingTest
  .then((msg) => "your result is" + msg) //skip
  .then((x) => x + "super") //skip
  .then((x) => console.log("finally" + x)) //skip
  .catch((msg) => console.log("oh no " + msg))
  .finally((msg) => console.log("clean up"));

// case 6 if there is reject in then

drivingTest
  .then((msg) => "your result is" + msg)
  .then((x) => Promise.reject("fail fail"))
  .then((x) => console.log("finally" + x)) //skip
  .catch((msg) => console.log("oh no " + msg))
  .finally((msg) => console.log("clean up"));
// case 1
var f1 = Promise.resolve("bhavai");
var f2 = Promise.resolve("neha");
var f3 = Promise.resolve("mano");

Promise.all([f1, f2, f3]).then((ans) => console.log(ans));

// case 2
var f1 = Promise.resolve("bhavai");
var f2 = Promise.reject("neha");
var f3 = Promise.resolve("mano");

Promise.all([f1, f2, f3]).then((ans) => console.log(ans));

// if any one rejected then entire thing is rejected

// case 3

var f1 = Promise.resolve("bhavai");
var f2 = Promise.reject("neha");
var f3 = Promise.resolve("mano");

Promise.all([f1, f2, f3])
  .then((ans) => console.log(ans))
  .catch((d1) => console.log(d1));

// case 4

var f1 = Promise.resolve("bhavai");
var f2 = Promise.reject("neha");
var f3 = Promise.reject("mano");

Promise.all([f1, f2, f3])
  .then((ans) => console.log(ans))
  .catch((d1) => console.log(d1));

// case 5  race

var f1 = Promise.resolve("bhavai");
var f2 = Promise.resolve("neha");
var f3 = Promise.resolve("mano");

Promise.race([f1, f2, f3]).then((ans) => console.log(ans));
// ans is bhavani

var f1 = Promise.reject("bhavai");
var f2 = Promise.resolve("neha");
var f3 = Promise.resolve("mano");

Promise.race([f1, f2, f3])
  .then((ans) => console.log(ans))
  .catch((ans) => console.log("reject" + ans));

// if one is rejected everything is rejected

var f1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("bhavani");
  }, 3000);
});
var f2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("neha");
  }, 2000);
});
var f3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("mano");
  }, 4000);
});

Promise.race([f1, f2, f3])
  .then((ans) => console.log(ans))
  .catch((ans) => console.log("ans" + ans));

// fastest one rejected the whole thing is rejected

// allSettled -it will wait untill everything finishes whether it is rejected or resolved

var f1 = Promise.resolve("bhavai");
var f2 = Promise.reject("neha");
var f3 = Promise.resolve("mano");

Promise.allSettled([f1, f2, f3]).then((ans) => console.log(ans));
