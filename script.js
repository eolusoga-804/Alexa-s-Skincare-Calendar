const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // console.log("Button was clicked");
    alert("Button was clicked");
  });
});
