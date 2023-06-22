// Toggle Menu

const burgerBtn = document.getElementById("burgerBtn");
const menu = document.querySelector(".menu");
const closeBtn = document.getElementById("closeBtn");
const menuExtended = document.querySelector(".menu__extended");
// Function to handle screen size change
// function handleScreenSizeChange() {
//   let screenWidth =
//     window.innerWidth ||
//     document.documentElement.clientWidth ||
//     document.body.clientWidth;
//   if (screenWidth > 600) {
//     menu.style.opacity = "1";
//   }
// }

// // Attach an event listener to the window's resize event
// window.addEventListener("resize", handleScreenSizeChange);

function toggleMenu() {
  let isOpened = false;
  isOpened = !isOpened;
  if (isOpened === true) {
    menu.style.display = "block";
    burgerBtn.classList.add("active");
    menuExtended.style.display = "block";
  } else {
    menu.style.display = "none";
    burgerBtn.classList.remove("active");
  }
}

burgerBtn.addEventListener("click", toggleMenu);

closeBtn.addEventListener("click", function () {
  menu.style.display = "none";
  menuExtended.style.display = "none";
  burgerBtn.classList.remove("active");
});
// Toggle Menu

let dropdownBtns = document.querySelectorAll(".has-dropdown");

dropdownBtns.forEach((dropdownBtn) => {
  dropdownBtn.addEventListener("click", function (e) {
    // console.log(e.target.nextElementSibling.nextElementSibling);
    try {
      if (
        e.target.nextElementSibling.nextElementSibling.classList.contains(
          "dropdown__list"
        )
      ) {
        e.target.nextElementSibling.nextElementSibling.classList.toggle(
          "active"
        );
      }
    } catch (error) {
      console.log(error);
    }
  });
});

