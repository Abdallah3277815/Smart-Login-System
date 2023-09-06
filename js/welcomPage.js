let welcomeUserOutput = document.getElementById("welcomeUserOutput");
const urlSearchParams = new URLSearchParams(window.location.search);
const welcomeUserName = urlSearchParams.get('welcomeUserName');
console.log(welcomeUserName);
welcomeUserOutput.innerHTML=`<h1 class="text-capitalize text-success text-center">welcome ${welcomeUserName}</h1>`