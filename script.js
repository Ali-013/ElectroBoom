// For looping pictures

const pics = ['images/car2.jpg', 'images/cyber truc.jfif','images/tesla.jfif'];
const ElementPhoto = document.getElementById('photo1');
const ElementButton = document.getElementById('ButtonForPic');
ElementButton.addEventListener('click', ShowNextPic);
let index = 1;


function ShowNextPic(){
    const newPic = pics[index];
    photo1.src = newPic;
    if (index < 2) {
        index = index +1;
    } else {
        index=0;
    }
}

// Function for form validation

const SubButton = document.getElementById('submit')
SubButton.addEventListener('click', validateForm)
function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
        alert('Please fill in all fields.');
        return false;
    }

    // Add more validation checks for email format if needed

    return true; // Form submission will proceed if all validations pass
}

