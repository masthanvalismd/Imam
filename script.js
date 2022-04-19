y = 20

var count = 1;
document.getElementById("btn");
var wish = document.getElementById("wish");
function Photo() {
  var img = document.createElement("img");
  img.src =
    "IMG-20220319-WA0010.jpg";
  wish.innerHTML = `Happy Birthday "🎉SHAKEERA🎉"`;
  document.getElementById("body").appendChild(img);
}
function guess() {
  let a = parseInt(document.getElementById("num").value);

  if (y === a) {
    // alert(
    //   `🤝 Congratulation You Guessed the correct number in ${count} attempt!!`
    // );
    Photo();
  } else if (y > a) {
    alert("Sorry 😮 !!!  try a larger number");
    count++;
  } else if (y < a) {
    alert("Sorry 😮 !!!  try a smaller number");
    count++;
  } else {
    alert("please  give a number");
  }
}
