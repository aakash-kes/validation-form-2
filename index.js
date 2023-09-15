let Email = document.getElementById('Email')
let password = document.getElementById('password')
let mobileNo = document.getElementById('mobileNo')
let flag = 1

function login() {
  if (Email.value == '') {
    document.getElementById('remember').innerHTML =
      'Please Enter Your Email Id '
    flag = 0
  } else if (Email.value.length < 10) {
    document.getElementById('remember').innerHTML =
      'Enter minimum 9- characters '
    flag = 0
  } else {
    document.getElementById('remember').innerHTML = ''
    flag = 1
  }

  if (password.value == '') {
    document.getElementById('remember2').innerHTML =
      'Please Enter Your Password '
    flag = 0
  } else if (password.value.length < 5) {
    document.getElementById('remember2').innerHTML =
      'please Enter more than 5 character '
  } else {
    document.getElementById('remember2').innerHTML = ''
    flag = 1
  }

  if (mobileNo.value == '') {
    document.getElementById('remember3').innerHTML = 'please Enter Mobile No'
    flag = 0
  } else if (mobileNo.value.length > 10 || mobileNo.value.length < 10) {
    document.getElementById('remember3').innerHTML = 'Enter min 10 character'
  } else {
    document.getElementById('remember3').innerHTML = ''
    flag = 1
  }

  if (flag) {
    return true
  } else {
    return false
  }
}
