// add user
const userData = {
  name: "shree",
  avatar: "url",
};

fetch("https://65bb5cf552189914b5bbdabd.mockapi.io/users/", {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(userData),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

// update user avathar

var updateUrl = {
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWqrePjzMJCrLy968bjpfZaFXYKjrCRJtbFw&usqp=CAU",
};
fetch("https://65bb5cf552189914b5bbdabd.mockapi.io/users")
  .then((res) => res.json())
  .then((data) => {
    data.map((user) => {
      fetch(`https://65bb5cf552189914b5bbdabd.mockapi.io/users/${user.id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updateUrl),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
    });
  });

// fetch("https://65bb5cf552189914b5bbdabd.mockapi.io/users/", {
//   method: "PUT",
//   mode: "cors",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify(updateUrl),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));
