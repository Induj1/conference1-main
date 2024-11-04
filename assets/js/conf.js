// Image Change Functions
function changeImage(e) {
  const image = document.getElementById("imgDisp");
  if (image) {
      image.src = e;
  }
}

function changeImageDownload() {
  img2.src = "./assets/img/profile.png";
  img1.src = "./assets/img/download.png";
  img3.src = "./assets/img/buy_sell.png";
}

function changeImageSignup() {
  img2.src = "./assets/img/buy_sell.png";
  img1.src = "./assets/img/profile.png";
  img3.src = "./assets/img/download.png";
}

function changeImageEnjoy() {
  img2.src = "./assets/img/download.png";
  img1.src = "./assets/img/buy_sell.png";
  img3.src = "./assets/img/profile.png";
}

// Navbar Scrolling Effect
$(window).scroll(function() {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
});

// Responsive Layout Adjustments
function toggleClassOnClick() {
  const element = document.getElementById("toggle");
  const screenWidth = window.innerWidth;
  if (element) {
      if (screenWidth > 992) {
          element.classList.remove('align-offcanvas');
          element.classList.add('align');
      } else {
          element.classList.add('align-offcanvas');
          element.classList.remove('align');
      }
  }
}

function setFontSize() {
  const screenWidth = window.innerWidth;
  const baseFontSize = screenWidth / 100;
  const textElements = document.querySelectorAll('.text');
  textElements.forEach(element => {
      element.style.fontSize = screenWidth > 789 
          ? `${baseFontSize * 1.3}px` 
          : `${baseFontSize * 4}px`;
  });
}

function updateSVGViewBox() {
  const svg = document.getElementById('visual');
  if (svg) {
      const svgWidth = svg.getAttribute('width');
      const svgHeight = svg.getAttribute('height');
      const viewBoxValue = `0 0 ${svgWidth} ${svgHeight * 5.5}`;
      svg.setAttribute('viewBox', viewBoxValue);
  }
}

function removeElement() {
  const screenWidth = window.innerWidth;
  const elementToRemove = document.getElementById('removable');
  if (screenWidth < 768 && elementToRemove) {
      elementToRemove.remove();
  }
}

function changeLogoOnScroll() {
  const nav = document.getElementById('navbar');
  const imgLogo = document.getElementById('changingImg');
  if (imgLogo && (document.title === "CODE-AI:Call" || document.title === "CODE-AI:Registration")) {
      imgLogo.src = nav.classList.contains('scrolled') 
          ? "assets/img/dark-logo-new.png" 
          : "assets/img/light-logo-new.png";
  }
}

function checkViewportWidth() {
  const viewportWidth = window.innerWidth;
  const elements = [
      'timeline__event__title1', 
      'timeline__event__title2', 
      'timeline__event__title3', 
      'timeline__event__title4'
  ];
  elements.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
          element.classList.toggle('align', viewportWidth < 576);
      }
  });
}

function changeSVGOnMobile() {
  const elements = document.querySelectorAll('.var-svg');
  const viewportWidth = window.innerWidth;
  elements.forEach(element => {
      if (viewportWidth < 576) {
          element.classList.add('spacer-mobile', 'layer3');
          element.classList.remove('spacer', 'layer1');
      } else {
          element.classList.add('spacer', 'layer1');
          element.classList.remove('spacer-mobile', 'layer3');
      }
  });
}

function changeIcon() {
  const buttons = document.querySelectorAll('.button-background-move');
  buttons.forEach(button => {
      const icon = document.getElementById(button.getAttribute('data-info'));
      const expanded = button.getAttribute('aria-expanded') === "true";
      if (icon) {
          icon.classList.toggle('fa-plus', !expanded);
          icon.classList.toggle('fa-minus', expanded);
      }
  });
}

// Initialize functions on load and handle resize/scroll events
function initialize() {
  toggleClassOnClick();
  setFontSize();
  changeSVGOnMobile();
  removeElement();
  updateSVGViewBox();
  checkViewportWidth();
  changeLogoOnScroll();
}

window.onload = initialize;

window.addEventListener('resize', () => {
  changeSVGOnMobile();
  toggleClassOnClick();
  removeElement();
  setFontSize();
  updateSVGViewBox();
  checkViewportWidth();
});

window.addEventListener('scroll', changeLogoOnScroll);

const buttonElements = document.querySelectorAll('.button-background-move');
buttonElements.forEach(element => {
  element.addEventListener("click", changeIcon);
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

console.log('JavaScript loaded and functions initialized');
