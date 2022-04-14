const subscribe_btn = document.getElementById("subscribe-cta-btn");

subscribe_btn.addEventListener("click", () => {
  const subscribeFeild = document.getElementById("subscribe-input-field").value;
  // subscribeFeild.value.toLowwerCase();
  if (subscribeFeild.includes("@") && subscribeFeild.endsWith(".com")) {
    document.getElementById("subscribe-error-messege").value =
      "Check your email please";
  }
});
