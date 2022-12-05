
/*
  Layout
 */

const swiper = new Swiper('#brands .swiper', {
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 5,
    }
  }
});

/*
  Main Content
 */

/*
  Home Page
 */

/*
  Out Latest Projects
 */

const projectsFiltersBtns = document.querySelectorAll("#latest-projects [data-filter]");
const projects = document.querySelectorAll("#latest-projects [data-cat]");

function projectFilterClickHandler(e) {
  const clickedBtn = e.target;
  const projectSelector = clickedBtn.getAttribute("data-filter");

  if (projectSelector === "all") return projects.forEach(function (project) {
    project.classList.remove("hide");
  });

  const relatedProjects = document.querySelectorAll(`#latest-projects [data-cat="${projectSelector}"]`);

  projects.forEach(function (project) {
    project.classList.add("hide");
  })

  relatedProjects.forEach(function (project) {
    project.classList.remove("hide");
  })
}

projectsFiltersBtns.forEach(function (projectFilterBtn) {
  projectFilterBtn.addEventListener('click', projectFilterClickHandler);
})




function commentSwiper(x) {
  if (x.matches) { // If media query matches
    var swiper1 = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    var swiper1 = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 10,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}

var x = window.matchMedia("(max-width: 800px)")
commentSwiper(x) // Call listener function at run time
x.addListener(commentSwiper) // Attach listener function on state changes
