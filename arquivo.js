
function validateForm() {
  var fieldA = document.getElementById("fieldA").value;
  var fieldB = document.getElementById("fieldB").value;

  if (fieldB > fieldA) {
    alert("Formulário válido! Campo B é maior que Campo A.");
  } else {
    alert("Formulário inválido. Campo B não é maior que Campo A.");
  }
}

