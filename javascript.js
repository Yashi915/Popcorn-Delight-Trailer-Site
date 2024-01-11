let index = 0;
function WeatherInfo() {
  const searchbox = document.getElementById('searchbox');
  if (searchbox.value === '') {
    alert('You must write something here');
  }
  else {
    document.getElementById('weather').style.backgroundImage = "url('https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png')";
    document.getElementById('bar').style.position = 'relative';
    document.getElementById('bar').style.top = '24px';
    document.getElementById('weather').style.color = "black";
    let t2 = document.getElementById('t2');
    let t1 = document.getElementById('t1');
    let a = 26;
    let b = 30;
    t2.innerHTML = result1(a, b);
    t1.innerHTML = result2(a, b);
    function result1(a, b) {
      let num1 = (a + (b - a) * Math.random());
      let num2 = (a + (b - a) * Math.random());
      return `${num1.toFixed(2)}°C / ${num2.toFixed(2)}°C`;
    }
    function result2(a, b) {
      return `${Math.floor((a + (b - a) * Math.random()))}°C`;
    }
    let date = new Date();
    let info = document.getElementById('info');
    info.innerHTML = inform(date);
    function inform(date) {
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      let day = days[date.getDay()];
      let CurrentDate = date.getDate();
      let month = months[date.getMonth()];
      let year = date.getFullYear();
      return `${day} ${CurrentDate} ${month} ${year}`;
    };
    const array = ['Haze', 'Windy', 'Sunny', 'Thunder', 'Rainy', 'Snowy', 'Cloudy', 'Stormy', 'Foggy', 'Warm', 'Clear Sky', 'Hailing', 'Partly Cloudy', 'Lightning'];
    const txt = document.getElementById('txt');
    txt.innerHTML = array[index];
    index = index + 1;
    const place = document.getElementById('place');
    place.innerHTML = searchbox.value;
  }
}
function SignInPageOpen() {
  let form = document.getElementById('form');
  if (form.style.display != 'block') {
    form.style.display = 'block';
  }
  else {
    form.style.display = 'none';
  }
}
function SignUpPageOpen() {
  let form2 = document.getElementById('form2');
  let form = document.getElementById('form');
  form.style.display = 'none';
  if (form2.style.display != 'block') {
    form2.style.display = 'block';
  }
  else {
    form2.style.display = 'none';
  }
}

function change() {
  let Email = document.getElementById('Email');
  let Signin = document.getElementById('Signin');
  let Password = document.getElementById('Password');
  if (Email.value === "" || Password.value === "") {
    Signin.style.backgroundColor = 'rgb(236, 71, 71)';
  }
  else {
    Signin.style.backgroundColor = 'red';
  }
};

function MakeEnable() {
  let Email = document.getElementById('Email');
  let Signin = document.getElementById('Signin');
  let Password = document.getElementById('Password');
  Signin.disabled = true;
  if (Email.value === "" || Password.value === "") {
    Signin.disabled = true;
  }
  else {
    Signin.disabled = false;
  }
}
function Highlight() {
  const searchbox = document.getElementById('searchbox');
  const Search = document.getElementById('Search');
  if (searchbox.value !== '') {
    Search.style.backgroundColor = '#df8e00';
  }
  else {
    Search.style.backgroundColor = 'transparent'
  }
}


function changes() {
  const Username = document.getElementById('Username');
  const Phone = document.getElementById('Phone');
  const Password2 = document.getElementById('Password2');
  const ConfirmPassword = document.getElementById('ConfirmPassword');
  const SignUp = document.getElementById('SignUp');
  if (Username.value === '' || Phone.value === '' || Password2.value === '' || ConfirmPassword.value === '') {
    SignUp.style.backgroundColor = 'rgb(236, 71, 71)';
  }
  else {
    SignUp.style.backgroundColor = 'red';
  }
}
function MakeEnables() {
  const Username = document.getElementById('Username');
  const Phone = document.getElementById('Phone');
  const Password2 = document.getElementById('Password2');
  const ConfirmPassword = document.getElementById('ConfirmPassword');
  const SignUp = document.getElementById('SignUp');
  SignUp.disabled = true;
  if (Username.value === '' || Phone.value === '' || Password2.value === '' || ConfirmPassword.value === '') {
    console.log("false");
    SignUp.disabled = true;
  }
  else {
    if (Password2.value === ConfirmPassword.value) {
      console.log('true')
      SignUp.disabled = false;
    }
    else {
      console.log("false");
      SignUp.disabled = true;
    }
  }
}

function Start(){
  alert("Please Sign In or if you have already an account on Popcorn Delight then Sign Up.")
}

function toggle1() {
  const desc1 = document.getElementById('desc1');
  document.getElementById('ques2').style.border = 'none';
  document.getElementById('ques3').style.border = 'none';
  document.getElementById('ques4').style.border = 'none';
  document.getElementById('ques5').style.border = 'none';
  document.getElementById('ques6').style.border = 'none';
  document.getElementById('desc2').style.display = 'none';
  document.getElementById('desc3').style.display = 'none';
  document.getElementById('desc4').style.display = 'none';
  document.getElementById('desc5').style.display = 'none';
  document.getElementById('desc6').style.display = 'none';
  document.getElementById('pageSix').style.height = '1200px';
  if (desc1.style.display != 'block') {
    desc1.style.display = 'block';
    document.getElementById('ques1').style.border = '2px solid white';
  }
  else {
    desc1.style.display = 'none';
    document.getElementById('ques1').style.border = 'none';
  }
}
function toggle2() {
  const desc2 = document.getElementById('desc2');
  document.getElementById('ques1').style.border = 'none';
  document.getElementById('ques3').style.border = 'none';
  document.getElementById('ques4').style.border = 'none';
  document.getElementById('ques5').style.border = 'none';
  document.getElementById('ques6').style.border = 'none';
  document.getElementById('desc1').style.display = 'none';
  document.getElementById('desc3').style.display = 'none';
  document.getElementById('desc4').style.display = 'none';
  document.getElementById('desc5').style.display = 'none';
  document.getElementById('desc6').style.display = 'none';
  document.getElementById('pageSix').style.height = '1140px';
  if (desc2.style.display != 'block') {
    desc2.style.display = 'block';
    document.getElementById('ques2').style.border = '2px solid white';
  }
  else {
    desc2.style.display = 'none';
    document.getElementById('ques2').style.border = 'none';
  }
}
function toggle3() {
  const desc3 = document.getElementById('desc3');
  document.getElementById('ques1').style.border = 'none';
  document.getElementById('ques2').style.border = 'none';
  document.getElementById('ques4').style.border = 'none';
  document.getElementById('ques5').style.border = 'none';
  document.getElementById('ques6').style.border = 'none';
  document.getElementById('desc1').style.display = 'none';
  document.getElementById('desc2').style.display = 'none';
  document.getElementById('desc4').style.display = 'none';
  document.getElementById('desc5').style.display = 'none';
  document.getElementById('desc6').style.display = 'none';
  document.getElementById('pageSix').style.height = '1160px';
  if (desc3.style.display != 'block') {
    desc3.style.display = 'block';
    document.getElementById('ques3').style.border = '2px solid white';
  }
  else {
    desc3.style.display = 'none';
    document.getElementById('ques3').style.border = 'none';
  }
}
function toggle4() {
  const desc4 = document.getElementById('desc4');
  document.getElementById('ques1').style.border = 'none';
  document.getElementById('ques2').style.border = 'none';
  document.getElementById('ques3').style.border = 'none';
  document.getElementById('ques5').style.border = 'none';
  document.getElementById('ques6').style.border = 'none';
  document.getElementById('desc1').style.display = 'none';
  document.getElementById('desc2').style.display = 'none';
  document.getElementById('desc3').style.display = 'none';
  document.getElementById('desc5').style.display = 'none';
  document.getElementById('desc6').style.display = 'none';
  document.getElementById('pageSix').style.height = '1160px';
  if (desc4.style.display != 'block') {
    desc4.style.display = 'block';
    document.getElementById('ques4').style.border = '2px solid white';
  }
  else {
    desc4.style.display = 'none';
    document.getElementById('ques4').style.border = 'none';
  }
}
function toggle5() {
  const desc5 = document.getElementById('desc5');
  document.getElementById('ques1').style.border = 'none';
  document.getElementById('ques2').style.border = 'none';
  document.getElementById('ques3').style.border = 'none';
  document.getElementById('ques4').style.border = 'none';
  document.getElementById('ques6').style.border = 'none';
  document.getElementById('desc1').style.display = 'none';
  document.getElementById('desc2').style.display = 'none';
  document.getElementById('desc4').style.display = 'none';
  document.getElementById('desc3').style.display = 'none';
  document.getElementById('desc6').style.display = 'none';
  document.getElementById('pageSix').style.height = '1140px';
  if (desc5.style.display != 'block') {
    desc5.style.display = 'block';
    document.getElementById('ques5').style.border = '2px solid white';
  }
  else {
    desc5.style.display = 'none';
    document.getElementById('ques5').style.border = 'none';
  }
}
function toggle6() {
  const desc6 = document.getElementById('desc6');
  document.getElementById('ques5').style.border = 'none';
  document.getElementById('ques4').style.border = 'none';
  document.getElementById('ques3').style.border = 'none';
  document.getElementById('ques2').style.border = 'none';
  document.getElementById('ques1').style.border = 'none';
  document.getElementById('desc1').style.display = 'none';
  document.getElementById('desc2').style.display = 'none';
  document.getElementById('desc4').style.display = 'none';
  document.getElementById('desc5').style.display = 'none';
  document.getElementById('desc3').style.display = 'none';
  document.getElementById('pageSix').style.height = '1230px';
  if (desc6.style.display != 'block') {
    desc6.style.display = 'block';
    document.getElementById('ques6').style.border = '2px solid white';
  }
  else {
    desc6.style.display = 'none';
    document.getElementById('ques6').style.border = 'none';
  }
}
