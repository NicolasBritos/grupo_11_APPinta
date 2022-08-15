let urlImage = null;

function changeFile(e) {
  const divImage = document.getElementById("image-avatar");
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    urlImage = reader.result;
    divImage.style.backgroundImage = `url(${urlImage})`;
    divImage.innerHTML = "";
  });
  reader.readAsDataURL(this.files[0]);
}

window.addEventListener("DOMContentLoaded", function () {
  const fakeButton = document.getElementById("fakeButton");
  const inputAvatar = document.getElementById("avatar");

  fakeButton.addEventListener("click", function (e) {
    inputAvatar.click();
    e.preventDefault();
  });

  inputAvatar.addEventListener("change", changeFile);
});
