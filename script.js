const buttonSubmit = document.querySelector(".buttonSubmit");
const route = document.querySelector(".route");
const routeImage = document.querySelector(".routeImage");

buttonSubmit.addEventListener("click", () => {
  checkRoute();
});

function checkRoute() {
  console.log(routeImage.src);
  if (route.value == 1) {
    routeImage.src = "img/funnyDog.jpg";
  } else if (route.value == 2) {
    routeImage.src = "img/papszun.jpg";
  }
}
