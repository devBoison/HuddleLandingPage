const subscribe_btn = document.getElementById("subscribe-cta-btn");

subscribe_btn.addEventListener("click", () => {
  const subscribeFeild = document.getElementById("subscribe-input-field");
  console.log(subscribeFeild.value.toLowwerCase());
  if (
    subscribeFeild.value.includes("@") &&
    subscribeFeild.value.endsWith(".com")
  ) {
    document.getElementById("subscribe-error-messege").value =
      "Check your email please";
  }
});
