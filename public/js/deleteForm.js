const deleteForm = document.getElementById("form-delete");

function deleteAccount(e) {
  const confirmMessage = "¿Desea eliminar su cuenta en APPINTA?";
  const res = confirm(confirmMessage);
  if (res) {
    return true;
  }

  e.preventDefault();
  return false;
}

deleteForm.addEventListener("submit", deleteAccount);
