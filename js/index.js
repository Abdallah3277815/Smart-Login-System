
let signUpUserName = document.getElementById("SignUpname");
let SignUpemail = document.getElementById("SignUpemail");
let SignUppassword = document.getElementById("SignUppassword");
let signInEmail = document.getElementById("signInEmail")
let signInPassword = document.getElementById("signInPassword")
let output = document.getElementById("output");
let notExistSignIn = document.getElementById("notExistSignIn")
let welcomeUser = document.getElementById("welcomeUser");
let welcomeUserName;

let allUsers = []

if (localStorage.getItem("allUsers") != null) {
    allUsers = JSON.parse(localStorage.getItem("allUsers"))
}



function signUp() {
    let user = {
        name: signUpUserName.value,
        email: SignUpemail.value,
        password: SignUppassword.value
    }
    let userNameRegex = /^[a-zA-Z0-9_-]{1,12}$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let isvalidUserName = userNameRegex.test(user.name);
    let isvalidEmail = emailRegex.test(user.email);
    let isvalidPassword = passwordRegex.test(user.password);

    if (!isvalidUserName) {
        output.innerHTML = `<h5 class="text-danger my-3"> wrong pattern username <h5>`
    } else if (!isvalidEmail) {
        output.innerHTML = `<h5 class="text-danger my-3"> wrong pattern email <h5>`


    } else if (!isvalidPassword) {
        output.innerHTML = `<h5 class="text-danger my-3"> The password must contains at least <br> - one digit<br> - one lowercase letter<br> - and one uppercase letter
       <br> -  It is at least 8 characters long <h5>`
    } else {

        let existEmail = false;
        allUsers.forEach((existUser => {
            if (existUser.email == user.email) {
                existEmail = true;

            }
        }))
        if (existEmail) {
            output.innerHTML = `<h5 class="text-danger my-3">This Email Is Already Taken</h5>`
        } else {
            allUsers.push(user)
            localStorage.setItem("allUsers", JSON.stringify(allUsers))
            console.log(allUsers);
            output.innerHTML = `<h5 class="text-success">Success You Will Be Redirect To Sign In Page Within Seconds</h5>`
            setTimeout(function () {
                window.location.href = "../index.html"
            }, 6000);



        }
    }





}

function signIn() {
    let userFound = false;
    allUsers.forEach((user, index) => {
        if (user.email == signInEmail.value && user.password == signInPassword.value) {
            welcomeUserName = user.name
            userFound = true;
        }
    })
    if (userFound) {
        // window.location.href = `../pages/welcomePage.html?welcomeUserName=${welcomeUserName}`
        // window.location.href=`../pages/welcomePage.html?`
        window.location.replace(`pages/welcomePage.html?welcomeUserName=${welcomeUserName}`)
        // alert(("found"))

    } else {
        notExistSignIn.innerHTML = `<p class="text-danger my-2" id="notExistSignIn">This Email is Not Exist</p>`

    }


    console.log(userFound);




}






