const divImage = document.getElementById("image-avatar");
const image = document.getElementById("image");
const inputAvatar = document.getElementById("avatar");
const revertButton = document.getElementById("revertButton");

function avatarChanged() {
  revertButton.classList.toggle("d-none");
}

function loadOriginalImage() {
  divImage.style.backgroundImage = `url(${image.src})`;
}

function loadMain() {
  loadOriginalImage();
  inputAvatar.addEventListener("change", avatarChanged);
  revertButton.addEventListener("click", function () {
    loadOriginalImage();
    avatarChanged();
  });
}

window.addEventListener("DOMContentLoaded", loadMain);
