let galleryImages = document.querySelectorAll(".gallery-album");
let getLatestOpenedAlbum;
let windowWidth = window.innerWidth;
let calcNewImg = 1;
let albumId;
let currentImgIndex;
let smallImg;
let digit;
let imageslength = 0;
let trans = 40;
const folderslengths = {
  album1: 8,
  album2: 8,
  album3: 8,
  album4: 8,
  album5: 8,
  album6: 8,
};
if (galleryImages) {
  galleryImages.forEach(function (album, index) {
    album.onclick = function () {
      album.classList.remove("hover-effect");
      albumId = this.id;
      getLatestOpenedAlbum = index + 1;
      let container = document.body;
      let newImgWindow = document.createElement("div");
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute("class", "img-window");

      // the new added container for the big image
      // ps : added to hold the absolute next/prev buttons only
      let bigImgDiv = document.createElement("div");
      bigImgDiv.setAttribute("id", "big-Img-Div");
      newImgWindow.appendChild(bigImgDiv);

      // Append the big image inside the new container
      let newImg = document.createElement("img");
      bigImgDiv.appendChild(newImg);

      newImg.setAttribute(
        "src",
        "Gallery/images/" + albumId + "/images/img1.jpg"
      );
      newImg.setAttribute("id", "current-img");

      // ALL IMAGES HTML ===========================
      let allImgsDiv = document.createElement("div");
      newImgWindow.appendChild(allImgsDiv);
      allImgsDiv.setAttribute("id", "all-Imgs-Div");
      let allImgsWrapper = document.createElement("div");
      allImgsDiv.appendChild(allImgsWrapper);
      allImgsWrapper.setAttribute("id", "all-Imgs-Wrapper");
      currentImgIndex = 1;
      imageslength = folderslengths[`${albumId}`];
      for (let i = 1; i <= imageslength; i++) {
        smallImg = document.createElement("img");

        smallImg.setAttribute(
          "src",
          "Gallery/images/" + albumId + "/thumbnails/img" + i + ".jpg"
        );
        smallImg.setAttribute("id", "smallImg" + i);
        if (i == currentImgIndex) {
          smallImg.style.opacity = 1;
          smallImg.style.border = "2px solid white";
        } else {
          smallImg.style.opacity = 0.3;
          smallImg.style.border = "0px solid white";
        }
        allImgsWrapper.appendChild(smallImg);
      }

      newImg.onload = function () {
        let imgs = document.querySelectorAll("#all-Imgs-Wrapper img");
        imgs.forEach((img) => {
          img.addEventListener("click", () => {
            let str = img.getAttribute("src");
            let regex = /img(\d+)\.jpg/;
            let match = str.match(regex);
            digit = match[1];
            if (digit) {
              changeImg(3);
            }
          });
        });
        // let imgWidth = this.width;
        // let calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;

        let newNextBtn = document.createElement("a");
        let btnNextText = document.createTextNode(">");
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "img-btn-next");
        newNextBtn.setAttribute("onclick", "changeImg(1)");

        // newNextBtn.style.cssText = "right:" + calcImgToEdge + "px";

        let newPrevBtn = document.createElement("a");
        let btnPrevText = document.createTextNode("<");
        newPrevBtn.appendChild(btnPrevText);
        // container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "img-btn-prev");
        newPrevBtn.setAttribute("onclick", "changeImg(0)");
        // newPrevBtn.style.cssText = "left:" + calcImgToEdge + "px";
        bigImgDiv.appendChild(newNextBtn);
        bigImgDiv.appendChild(newPrevBtn);

        // EXIT BUTTON =============================================
        let exitButton = document.createElement("a");
        let exitButtonText = document.createTextNode("X");
        exitButton.appendChild(exitButtonText);
        newImgWindow.appendChild(exitButton);
        exitButton.setAttribute("class", "exit-button");
        exitButton.setAttribute("onclick", "closeImg()");
      };
    };
  });
}
function changeImg(changeDir) {
  document.querySelector("#all-Imgs-Wrapper").style.display = "none";
  document.querySelector("#current-img").remove();
  let getImgWindow = document.querySelector(".img-window");

  // Create new big img tag + append to new container bigImgDiv
  let newImg = document.createElement("img");
  let bigImgDiv = document.querySelector("#big-Img-Div");
  bigImgDiv.prepend(newImg);
  console.log("bigImgDiv : ");
  console.log(bigImgDiv);
  if (changeDir === 1) {
    trans -= 7;
    document.querySelector(
      "#all-Imgs-Wrapper"
    ).style.transform = `translateX(${trans}%)`;
    calcNewImg = currentImgIndex + 1;
    if (calcNewImg > imageslength) {
      calcNewImg = 1;
    }
  } else if (changeDir === 0) {
    trans += 7;
    document.querySelector(
      "#all-Imgs-Wrapper"
    ).style.transform = `translateX(${trans}%)`;
    calcNewImg = currentImgIndex - 1;
    if (calcNewImg < 1) {
      calcNewImg = imageslength;
    }
  } else if (changeDir === 3) {
    if (calcNewImg > digit) {
      trans = (calcNewImg - digit) * 2;
      document.querySelector(
        "#all-Imgs-Wrapper"
      ).style.transform = `translateX(${trans}%)`;
    }
    if (calcNewImg < digit) {
      trans = (digit - calcNewImg) * -2;
      document.querySelector(
        "#all-Imgs-Wrapper"
      ).style.transform = `translateX(${trans}%)`;
    }
    calcNewImg = parseInt(digit);
  }
  currentImgIndex = calcNewImg;
  newImg.setAttribute(
    "src",
    "Gallery//images/" + albumId + "/images/img" + calcNewImg + ".jpg"
  );
  newImg.setAttribute("id", "current-img");
  newImg.onload = function () {
    for (let i = 1; i <= imageslength; i++) {
      smallImg = document.getElementById("smallImg" + i);
      smallImg.style.opacity = 0.3;
      smallImg.style.border = "0px solid white";

      if (i == calcNewImg) {
        smallImg.style.opacity = 1;
        smallImg.style.border = "2px solid white";
      }
    }
    // let imgWidth = this.width;
    // let calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;
    // let nextBtn = document.querySelector(".img-btn-next");
    // nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";
    // let prevBtn = document.querySelector(".img-btn-prev");
    // prevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
    document.querySelector("#all-Imgs-Wrapper").style.display = "flex";
  };
}
function closeImg() {
  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-prev").remove();
  document.querySelector(".img-btn-next").remove();
  console.log("EXIT BUTTON : ");
  console.log(document.querySelector(".exit-button"));
  document.querySelector(".exit-button").remove();
  console.log("EXIT BUTTON : ");
  console.log(document.querySelector(".exit-button"));
  getLatestOpenedAlbum = 1;
  imageslength = 0;
}
