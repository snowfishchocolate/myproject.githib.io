///////////wow js////////////////////////
$(".text").addClass("wow slideOutRight");
$(".menu-button").addClass("wow slideOutRight");
$(".slide .content").addClass("wow slideOutRight");
$(".text button").hover(function () {
  $(".text button").addClass("wow bounceIn");
});
new WOW().init();

// nav 往上捲//
var body = document.querySelector("body");
var nav = document.querySelector("nav");
lastScrollY = 0;
window.addEventListener("scroll", function () {
  var a = this.scrollY;
  // 判斷是向上捲動，而且捲軸超過 200px
  if (a < lastScrollY) {
    body.classList.remove("hideup");
    nav.style.backgroundColor = "rgba(59, 57, 56, 0.589)";
  } else {
    body.classList.add("hideup");
    nav.style.backgroundColor = "rgba(59, 57, 56, 0.589)";
  }
  lastScrollY = a;
});
//////////////////////hamburger/////////////
var hamburgerBtn = document.querySelector(".hamburger");
var crossBtn = document.querySelector(".cross");
var hamburgerDrop = document.querySelector(".hamburger-ul");
hamburgerBtn.addEventListener("click", function () {
  hamhide();
});
function hamhide() {
  if (hamburgerDrop.style.display == "block") {
    hamburgerDrop.style.display = "none";
  } else {
    hamburgerDrop.style.display = "block";
    hamburgerBtn.style.display = "none";
    crossBtn.style.display = "block";
  }
}
crossBtn.addEventListener("click", function () {
  closehide();
});
function closehide() {
  if (hamburgerDrop.style.display == "none") {
    hamburgerDrop.style.display = "block";
  } else {
    hamburgerDrop.style.display = "none";
    crossBtn.style.display = "none";
    hamburgerBtn.style.display = "block";
  }
}
////////////side-menu////////////
var sideBtn = document.querySelector("#side-button");
var sideMenu = document.querySelector("#side-menu");
sideBtn.addEventListener("click", function () {
  hide();
});
function hide() {
  if (sideMenu.style.display == "block") {
    sideMenu.style.display = "none";
  } else {
    sideMenu.style.display = "block";
  }
}

//////////首頁news///////////////
var contents = [
  {
    title: "防疫大作戰",
    date: "2021.12.12",
    content: "外帶自取每滿599現折100元",
  },
  {
    title: "防疫大作戰",
    date: "2021.12.12",
    content: "外帶自取每滿599現折100元",
  },
  {
    title: "防疫大作戰",
    date: "2021.12.12",
    content: "外帶自取每滿599現折100元",
  },
];
var showBox = document.querySelector(".news-area");
contents.forEach(function (content) {
  showBox.innerHTML += `
  <div class="content">
        <h2>${content.title}</h2>
        <p>${content.content}</p>
        <img src="./image/tag.png" alt="">
        <span>${content.date}</span>
  </div>
  `;
});

////slider////// -->

var mealBtn = document.querySelector(".slide .container .content .meal");
var appetiteBtn = document.querySelector(
  ".slide .container .content .appetite"
);
var mealModal = document.querySelector(".meal-modal");
var appetiteModal = document.querySelector(".appetite-modal");
mealBtn.addEventListener("click", function () {
  mealModal.style.display = "block";
});
appetiteBtn.addEventListener("click", function () {
  appetiteModal.style.display = "block";
});
var closeBtn = document.querySelector(".close");
var appetiteClose = document.querySelector(".appetite-close");
closeBtn.addEventListener("click", function () {
  mealModal.style.display = "none";
});
appetiteClose.addEventListener("click", function () {
  appetiteModal.style.display = "none";
});

////////////////////////menu///////////////// -->

var beefBtn = document.querySelector(".beef");
var chickenBtn = document.querySelector(".chicken");
var porkBtn = document.querySelector(".pork");
var seafoodBtn = document.querySelector(".seafood");
var lambBtn = document.querySelector(".lamb");
var beefShow = document.querySelector(".mbeef");
var porkShow = document.querySelector(".mpork");
var chickenShow = document.querySelector(".mchicken");
var lambShow = document.querySelector(".mlamb");
var seafoodShow = document.querySelector(".mseafood");
var optionModal = document.querySelector(".option-modal");
var optioncloseBtns = document.querySelectorAll(".option-close");

beefBtn.addEventListener("click", function () {
  beefShow.style.display = "block";
  optionModal.style.display = "block";
});
chickenBtn.addEventListener("click", function () {
  chickenShow.style.display = "block";
  optionModal.style.display = "block";
});
porkBtn.addEventListener("click", function () {
  porkShow.style.display = "block";
  optionModal.style.display = "block";
});
lambBtn.addEventListener("click", function () {
  lambShow.style.display = "block";
  optionModal.style.display = "block";
});
seafoodBtn.addEventListener("click", function () {
  seafoodShow.style.display = "block";
  optionModal.style.display = "block";
});
optioncloseBtns.forEach(function (optioncloseBtn) {
  optioncloseBtn.addEventListener("click", function () {
    beefShow.style.display = "none";
    chickenShow.style.display = "none";
    porkShow.style.display = "none";
    lambShow.style.display = "none";
    seafoodShow.style.display = "none";
    optionModal.style.display = "none";
    console.log(optioncloseBtn);
  });
});

////////////splide/////////////////////////// -->

new Splide(".a1", {
  type: "loop",
  padding: {
    right: "5rem",
    left: "5rem",
  },
}).mount();
new Splide(".b1", {
  type: "loop",
  padding: {
    right: "5rem",
    left: "5rem",
  },
}).mount();
////////////////////////手風琴/////////////////////
  var acc = document.querySelectorAll('.about .p');
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      console.log(acc);
    this.classList.toggle("active");
    var panel = document.querySelector('.about p');
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}
