const fname = document.getElementById('name');
const email = document.getElementById('ename');
 
const nameToLocalS = localStorage.setItem('name', JSON.stringify(fname.value));
document.addEventListener("DOMContentLoaded", function () {
    const imagePicker = document.getElementById("image-picker");
    const editPictureButton = document.getElementById("edit-picture-button");
    const imagePreview = document.getElementById("image-preview");

    imagePicker.addEventListener("change", function (event) {
        readURL(event.target);
    });

    editPictureButton.addEventListener("click", function () {
        imagePicker.click(); // Ouvre la boîte de dialogue de sélection de fichier lorsque le bouton "Edit Picture" est cliqué
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                imagePreview.src = e.target.result;
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
});
