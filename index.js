const buttons = document.querySelectorAll("button");
let screen = document.getElementById("screen");
let screenValue = "";
for (items of buttons) {
  items.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log(buttonText);
    if (buttonText === "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText === "AC") {
      screenValue = " ";
      screen.value = screenValue;
    } else if (buttonText === "DEL") {
      screen.value = screenValue.substring(0, screenValue.length - 1);
    } else if (buttonText === "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
