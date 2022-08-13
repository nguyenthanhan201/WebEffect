const input = document.getElementById("input");

const lowerCase = document.querySelector("#lower");
// console.log("👌 ~ lowerCase", lowerCase);
const upperCase = document.querySelector("#upper");
const digit = document.querySelector("#number");
const specialChar = document.querySelector("#special");
const length = document.querySelector("#length");

const toggleButton = () => {
  const openEye = document.querySelector("#open-eye");
  const closeEye = document.querySelector("#close-eye");

  if (closeEye.classList.contains("active")) {
    openEye.classList.add("active");
    closeEye.classList.remove("active");
    input.setAttribute("type", "text");
  } else {
    openEye.classList.remove("active");
    closeEye.classList.add("active");
    input.setAttribute("type", "password");
  }
};

const checkPassword = (data) => {
  // console.log("👌 ~ data", data);

  // regular expression pattern
  const lower = new RegExp("[a-z]");
  const upper = new RegExp("[A-Z]");
  const number = new RegExp("[0-9]");
  const special = new RegExp("(?=.*[!@#$%^&*])");
  const minLength = new RegExp("(?=.{8,})");

  // check lowercase
  if (lower.test(data)) {
    lowerCase.classList.add("vail");
  } else {
    lowerCase.classList.remove("vail");
  }

  // check uppercase
  if (upper.test(data)) {
    upperCase.classList.add("vail");
  } else {
    upperCase.classList.remove("vail");
  }

  // check digit
  if (number.test(data)) {
    digit.classList.add("vail");
  } else {
    digit.classList.remove("vail");
  }

  // check special character
  if (special.test(data)) {
    specialChar.classList.add("vail");
  } else {
    specialChar.classList.remove("vail");
  }

  // check minimum length
  if (minLength.test(data)) {
    length.classList.add("vail");
  } else {
    console.log("not oki");
    length.classList.remove("vail");
  }
};
