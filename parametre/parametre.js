const fname = document.getElementById('name');
const notifPush = document.getElementById('notifPush');
const email = document.getElementById('email');
const testament = document.getElementById('textArea');
const submit = document.getElementById('submitForm');
const oldPwd = document.getElementById('oldPwd');
const newPwd = document.getElementById('newPwd');
const confirm = document.getElementById('confirm');
const changePwdForm  = document.getElementById('changePwd');
const btnEditPwd = document.getElementById('btnEditPwd');
const deleteAccount = document.getElementById('deleteAccount');
const imgNav = document.getElementById('imgNav');
const storedImage = localStorage.getItem('profileImage');
document.addEventListener("DOMContentLoaded", function () {
    const imagePicker = document.getElementById("image-picker");
    const editPictureButton = document.getElementById("edit-picture-button");
    const imagePreview = document.getElementById("image-preview");
    
   
    
    window.addEventListener('load', function () {
        if (storedImage) {
            imagePreview.src = storedImage;
            imgNav.src = storedImage;
           
        }
    });
    imagePicker.addEventListener("change", function (event) {
        readURL(event.target);
    });

    editPictureButton.addEventListener("click", function () {
        imagePicker.click();
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                imagePreview.src = e.target.result;
                localStorage.setItem('profileImage', e.target.result);
                imgNav.src = e.target.result;
        
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
});

btnEditPwd.addEventListener('click', ()=>{
    notifPush.setAttribute('style', 'display: block')
})

  let oldPwdValue = oldPwd.value;
    let newPwdValue = newPwd.value;  
    let confirmValue = confirm.value;
    
    changePwdForm.addEventListener('click', (e) => {
        e.preventDefault();
    
        const storedNewPwd = localStorage.getItem('newPwd');
        let pwd = '12345678';
    
        if (!storedNewPwd && pwd === oldPwd.value) {
            console.log('pwd recognize');
            if (newPwd.value === confirm.value) {
                console.log('new Pwd confirmed');
                localStorage.setItem('newPwd', newPwd.value);
                notifPush.textContent = 'Mot de passe changé avec succès.';
                notifPush.style.color = 'green';
            } else {
                console.log('Le nouveau mot de passe et la confirmation ne correspondent pas.');
            }
        } else if (storedNewPwd && storedNewPwd === oldPwd.value) {
            if (newPwd.value === confirm.value) {
                localStorage.setItem('newPwd', newPwd.value);
                notifPush.textContent = 'Mot de passe changé avec succès.';
                notifPush.style.color = 'green';
            } else {
            console.log('Le nouveau mot de passe et la confirmation ne correspondent pas.');
            }
        } else {
        console.log('Ancien mot de passe incorrect.');
        }
    
        oldPwd.value = '';
        newPwd.value = '';
        confirm.value = '';
    });



submit.addEventListener('click', (e)=>{
    e.preventDefault();
     console.log('ddd');
    const nameValue = fname.value;
    const emailValue = email.value;
    const testamentValue = testament.value;

    localStorage.setItem('name', nameValue);
    localStorage.setItem('email', emailValue);
    localStorage.setItem('testament', testamentValue);
    alert('Vous avec mis a jour vos infos');
})

window.addEventListener('load', ()=>{
    const storedName = localStorage.getItem('name')
    const storedEmail = localStorage.getItem('email')
    const storedTestament = localStorage.getItem('testament');

    if(storedName){
        fname.value = storedName
    }
    if(storedEmail){
        email.value = storedEmail
    }
    if(storedTestament){
        testament.value = storedTestament
    }
});

deleteAccount.addEventListener('click', ()=>{
    localStorage.setItem('name', ' ');
    localStorage.setItem('email', ' ');
    localStorage.setItem('testament', ' ');
    localStorage.setItem('newPwd', ' ');
    localStorage.setItem('profileImage', ' ');
    fname.value = '';
    email.value = '';
    testament.value = '';
})