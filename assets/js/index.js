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

// Iterate over each select element
$("select").each(function () {
  // Cache the number of options
  var $this = $(this),
    numberOfOptions = $(this).children("option").length;

  // Hides the select element
  $this.addClass("s-hidden");

  // Wrap the select element in a div
  $this.wrap('<div class="select"></div>');

  // Insert a styled div to sit over the top of the hidden select element
  $this.after('<div class="styledSelect"></div>');

  // Cache the styled div
  var $styledSelect = $this.next("div.styledSelect");

  // Show the first select option in the styled div
  $styledSelect.text($this.children("option").eq(0).text());

  // Insert an unordered list after the styled div and also cache the list
  var $list = $("<ul />", {
    class: "options",
  }).insertAfter($styledSelect);

  // Insert a list item into the unordered list for each select option
  for (var i = 0; i < numberOfOptions; i++) {
    $("<li />", {
      text: $this.children("option").eq(i).text(),
      rel: $this.children("option").eq(i).val(),
    }).appendTo($list);
  }

  // Cache the list items
  var $listItems = $list.children("li");

  // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
  $styledSelect.click(function (e) {
    e.stopPropagation();
    $("div.styledSelect.active").each(function () {
      $(this).removeClass("active").next("ul.options").hide();
    });
    $(this).toggleClass("active").next("ul.options").toggle();
  });

  // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
  // Updates the select element to have the value of the equivalent option
  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass("active");
    $this.val($(this).attr("rel"));
    $list.hide();
    let val = $this.val();
    // alert($this.val());

    $(".products > article").each(function (index, el) {
      // geting li data-attribute value

      var dropdown = $(this).attr("data-value");
      if (dropdown == val) {
        //match value with selected value
        $(this).css("display", "block");
      } else if (val == "all" || val == "") {
        // when u select all display
        $(this).css("display", "block");
      } else {
        $(this).css("display", "none");
      }
    });
  });

  let search = $("#search");
  search.keyup(function (e) {
    e.stopPropagation()
    let searchValue = $("#search").val();
    // alert($this.val());

    $(".products > article").each(function (index, el) {
      // geting li data-attribute value

      var dropdown = $(this).attr("data-value");
      if (dropdown.includes(searchValue)) {
        //match value with selected value
        $(this).css("display", "block");
      }
      else if (searchValue== "") {
        // when u select all display
        $(this).css("display", "block");
      }else {
        $(this).css("display", "none");
      }
    });
  });

  // Hides the unordered list when clicking outside of it
  $(document).click(function () {
    $styledSelect.removeClass("active");
    $list.hide();
  });
});
