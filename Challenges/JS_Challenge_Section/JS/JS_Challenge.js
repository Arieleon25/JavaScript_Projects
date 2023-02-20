window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});

function validateForm() {
    let x = document.forms["myForm"]["phoneN"].value;
    if (x =="") {
        alert("Phone number must be filled out");
        return false;
    }
}

function openForm() {
    document.getElementById("myForm2").style.display = "block";
  }
  
function closeForm() {
document.getElementById("myForm2").style.display = "none";
}
