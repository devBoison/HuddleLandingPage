const subscribe_btn = document.getElementById("subscribe-cta-btn");
const subscribeFeild = document.getElementById("subscribe-input-field");
subscribe_btn.addEventListener("click", () => {
  console.log(subscribeFeild.value.toLowerCase());

  let subscribeErr = document.getElementById("subscribe-error-messege");
  if (
    subscribeFeild.value.includes("@") &&
    subscribeFeild.value.endsWith(".com")
  ) {
    subscribeErr.innerHTML = "";
  } else {
    subscribeErr.innerHTML = "Check your email please";
    subscribeFeild.style.border = "1px solid red";
    subscribeErr.style.color = "red";
  }
});
