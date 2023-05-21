function changeBackground() {
    document.querySelector('.middleSections').style.backgroundColor = 'black'
    document.querySelector('.middleSections').style.color = 'white';
    document.querySelector('.body').style.backgroundColor = 'black';
    document.querySelectorAll('.contentSection').forEach((item) => {
        item.style.border = 'solid 2px grey';
    });
    document.querySelectorAll('.lineBreak').forEach((item)=> {
        item.style.border = 'solid 2px grey';
    });
}
function createAccount() {
    alert("You have made an account");
}

function login(){
    alert("You are logged in");
}

function passwordReminder(){
    alert("Password reminder sent to email on file");
}


