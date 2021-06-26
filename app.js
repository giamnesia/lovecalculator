firname = document.querySelector(".fname");
secname = document.querySelector(".sname");
btn = document.querySelector(".btn");
first = document.querySelector(".first");
sec = document.querySelector(".sec");
percentage = document.querySelector(".percentage");
result = document.querySelector(".result");
form = document.querySelector(".form");

function display(data) {
  first.innerHTML = `${data.fname}` + " and ";
  sec.innerHTML = `${data.sname}`;
  percentage.innerHTML = "Love Percentage: " + `${data.percentage}` + "%";
  result.innerHTML = "Result: " + `${data.result}`;
}
form.addEventListener("submit", displayres);
function displayres(e) {
  const fname = firname.value.toUpperCase();
  const sname = secname.value.toUpperCase();
  e.preventDefault();
  fetch(
    "https://love-calculator.p.rapidapi.com/getPercentage?fname=" +
      fname +
      "&sname=" +
      sname,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "ab12fc277emshff845f4cfb3c737p17440djsn9bac897570e9",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      display(data);
    })
    .catch((err) => {
      console.error(err);
    });
}
