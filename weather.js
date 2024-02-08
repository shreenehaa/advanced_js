var cities = ["chennai", "madurai", "erode"];
// var obj = {};
cities.map((ans) => {
  //   console.log(ans);
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=bcd558e2652c44dc96145038240102&q=${ans}&aqi=no`
  )
    .then((res) => res.json())
    .then((temp) => {
      obj[`${temp.location.name}`] = `${temp.current.temp_c}`;
    })
    .then((ans) => console.log(ans));
  //  obj`${temp.location.name} : ${temp.current.temp_c}`);
});

async function getTemp(cities) {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=bcd558e2652c44dc96145038240102&q=${cities}&aqi=no`
  );
  const data = await res.json();
  return [data.location.name, data.current.temp_c];
}

Promise.all(cities.map(getTemp))
  .then((data) => Object.fromEntries(data))
  .then((data1) => console.log(data1));

// first way
async function callFun() {
  const ans = await Promise.all(cities.map(getTemp));
  const data = Object.fromEntries(ans);
  console.log(data);
}
callFun();

//second way

const ans = await Promise.all(cities.map(getTemp));
console.log(Object.fromEntries(ans));

// third way
(async function callFun() {
  const ans = await Promise.all(cities.map(getTemp));
  const data = Object.fromEntries(ans);
  console.log(data);
})();

// to use try and catch

async function getTemp(cities) {
  try {
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=bcd558e2652c44dc96145038240102&q=${cities}&aqi=no`
    );
    const data = await res.json();
    return [data.location.name, data.current.temp_c];
  } catch (e) {
    console.log(e);
  }
}

// single promise to catch error
async function getTemp(cities) {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=bcd558e2652c44dc96145038240102&q=${cities}&aqi=no`
  ).catch((e) => console.log(e));
  const data = await res.json();
  return [data.location.name, data.current.temp_c];
}

fetch("https://65bb5cf552189914b5bbdabd.mockapi.io/users/1", {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((data) => console.log(data));
var arr = [];
// fetch("https://65bb5cf552189914b5bbdabd.mockapi.io/users")
//   .then((res) => res.json())
//   .then((data) =>
//     data.map((ids, ind) => {
//       if (ind < 3) {
//         fetch(`https://65bb5cf552189914b5bbdabd.mockapi.io/users/${ids.id}`, {
//           method: "DELETE",
//         });
//       }
//     })
//   );
// way 2
// fetch("https://65bb5cf552189914b5bbdabd.mockapi.io/users")
//   .then((res) => res.json())
//   .then((data) =>
//     data.slice(0, 3).forEach((ids) => {
//       fetch(`https://65bb5cf552189914b5bbdabd.mockapi.io/users/${ids.id}`, {
//         method: "DELETE",
//       });
//     })
//   );
async function delElement() {
  const res = await fetch("https://65bb5cf552189914b5bbdabd.mockapi.io/users");
  const data = await res.json().then((x) =>
    x.slice(0, 3).forEach(async (ids) => {
      await fetch(
        `https://65bb5cf552189914b5bbdabd.mockapi.io/users/${ids.id}`,
        {
          method: "Delete",
        }
      );
    })
  );
}
delElement();
