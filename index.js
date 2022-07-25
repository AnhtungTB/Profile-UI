var headerText = document.querySelector(".header__text");
var index = 0;
var text = "Phan Anh Tùng ";

for (let i = 0; i < text.length; i++) {
  let span = document.createElement("span");
  span.textContent = text[i];
  headerText.appendChild(span);
}

var listSpan = document.querySelectorAll(".header__text span");

setInterval(() => {
  listSpan[index].style.fontSize = "70px";
  index++;
  if (index == listSpan.length) {
    index = 0;
    resetFontSize();
  }
}, 500);

function resetFontSize() {
  listSpan.forEach(function (span) {
    span.style.fontSize = "0px";
  });
}

// View Img

const closeButton = document.querySelector(".popup_span");
const images = document.querySelectorAll(".list__photos img");
const popupImage = document.querySelector(".popup_image");

images.forEach((image) => {
  image.onclick = () => {
    popupImage.style.display = "block";
    document.querySelector(".popup_image img").src = image.getAttribute("src");
  };
});

closeButton.onclick = () => {
  popupImage.style.display = "none";
};

// Change Tabs

const tabs = document.querySelectorAll(".tab");
const panes = document.querySelectorAll(".pane");
const tabActive = document.querySelector(".tab.active");
const line = document.querySelector(".line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
  const pane = panes[index];
  tab.onclick = function () {
    document.querySelector(".pane.active").classList.remove("active");
    document.querySelector("li.tab.active").classList.remove("active");
    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";
    this.classList.add("active");
    pane.classList.add("active");
  };
});

