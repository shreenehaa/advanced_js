// const printName = setInterval(() => {
//   console.log("nehaa");
// }, 1000);

// clearInterval(printName);
// setTimeout(() => {
//   console.log("shree");
// }, 1000);

// setTimeout(() => {
//   clearInterval(printName);
// }, 2000);

// const times = (noOfTimes) => {
//   setInterval(() => {
//     clearInterval(printName);
//   }, noOfTimes * 1000);
// };
// times(5);

var arr = ["green", "blue", "yellow", "black"];
var ans;
var i = 0;
var slideShow = (arr) => {
  document.body.style.background = arr[i];
  ans = setInterval(() => {
    document.body.style.background = arr[i];
    console.log(arr[i]);
    i++;
    if (i >= arr.length) {
      i = 0;
    }
  }, 1000);
};
// slideShow(arr);

var start = () => {
  slideShow(arr);
};
var stop = () => {
  clearInterval(ans);
};
var pause = () => {
  clearInterval(ans);
};
var counter = 10;

var newYear = (counter) =>
  setTimeout(() => {
    console.log(counter);
    setTimeout(() => {
      console.log(--counter);
      setTimeout(() => {
        console.log(--counter);
        setTimeout(() => {
          console.log(--counter);
          setTimeout(() => {
            console.log(--counter);
            setTimeout(() => {
              console.log(--counter);
              setTimeout(() => {
                console.log(--counter);
                setTimeout(() => {
                  console.log(--counter);
                  setTimeout(() => {
                    console.log(--counter);
                    setTimeout(() => {
                      console.log(--counter);
                      setTimeout(() => {
                        console.log("happy new year");
                      });
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
newYear(counter);

const newYear = new Promise((resolve, reject) => {
  resolve(
    setTimeout(() => {
      console.log("3");
    }, 2000)
  );
});
