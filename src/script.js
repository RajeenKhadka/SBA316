var mainEl = document.getElementsByTagName("main");

mainEl[0].style.backgroundColor = "var(--main-bg)";

var mainContainer = mainEl[0].querySelectorAll("#main-container");

//======================TopMenus===================================//

var topMenuEl = document.getElementById("top-menu");

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

topMenuEl.innerHTML = "<h1>NYC Thrills</h1>";

topMenuEl.classList.add("flex-around");

//======================TopMenus Elements===================================//

var menuLinks = [
  { text: "Home", href: "/about" },
  {
    text: "Destination",
    href: "#",
    subLinks: [
      { text: "All", href: "all" },
      { text: "Hiking", href: "/catalog/top" },
      { text: "Getaways", href: "/catalog/search" },
    ],
  },
  {
    text: "Contact",
    href: "#",
  },
];

menuLinks.forEach((element) => {
  let topLinks = document.createElement("a");

  topLinks.setAttribute("href", element.href);

  topLinks.textContent = element.text;

  topMenuEl.appendChild(topLinks);
});

//======================SubMenus===================================//

var subMenuEl = document.getElementById("sub-menu");

subMenuEl.style.height = "100%";

subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

subMenuEl.classList.add("flex-around");

subMenuEl.style.position = "absolute";

subMenuEl.style.top = "0";

var topMenuLinks = topMenuEl.querySelectorAll("a");

topMenuEl.addEventListener("click", (evt) => {
  evt.preventDefault();

  if (evt.target.localName !== "a") {
    return;
  }

  topMenuLinks.forEach((element) => {
    element.classList.remove("active");
  });

  evt.target.classList.add("active");

  const linkArr = menuLinks.find(
    (link) => link.text === evt.target.textContent
  );

  if (linkArr.subLinks) {
    subMenuEl.style.top = "100%";
    subMenuEl.innerHTML = "";

    //the clicked LinkArr
    //forEach loop is used to iterate over the sublinks array object inside the selected LinkArr
    buildSubmenu(linkArr.subLinks);
  } else {
    subMenuEl.style.top = "0";
    subMenuEl.innerHTML = "";
  }
});

function buildSubmenu(subLinks) {
  subLinks.forEach((element) => {
    let links = document.createElement("a");
    links.setAttribute("href", element.href);
    links.textContent = element.text;
    subMenuEl.appendChild(links);
  });
}

subMenuEl.addEventListener("click", (evt) => {
  evt.preventDefault();

  if (evt.target.localName !== "a") {
    return;
  }

  subMenuEl.style.top = "0";

  topMenuLinks.forEach((element) => {
    element.classList.remove("active");
  });
});

//============================Main Container Items=================================//

var mainContainer = mainEl[0].querySelector("#main-container");

//mainContainer.classList.add("home-grid");

var imgContainer = mainContainer.children[0]; //parent-child-sibling relationship

//console.log(imgContainer);
var imgElement = imgContainer.children[0];
//console.log(imgElement);

imgElement.classList.add("img-styling");

var discriptionContainer = mainContainer.children[2];
discriptionContainer.classList.add("discription-container");
//console.log(discriptionContainer);

var profileImgElement = discriptionContainer.children[0].children[0];
//console.log(profileImgElement);
profileImgElement.classList.add("profile-img");

//============================Form=================================//
var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("contact-name").value;

  if (name.length === 0) {
    nameError.innerHTML = "Name is required!";
    return false;
  }

  nameError.innerHTML = "";
  return true;
}

function validateNum() {
  var num = document.getElementById("contact-num").value;

  if (num.length === 0) {
    phoneError.innerHTML = "Number is required!";
    return false;
  }

  if (num.length !== 10) {
    phoneError.innerHTML = "Phone number should be 10 digits!";
    return false;
  }

  if (!/^\d{10}$/.test(num)) {
    phoneError.innerHTML = "Digits only!";
    return false;
  }

  phoneError.innerHTML = "";
  return true;
}

function validateEmail() {
  var email = document.getElementById("contact-email").value;

  if (email.length === 0) {
    emailError.innerHTML = "Email is required!";
    return false;
  }

  if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) {
    emailError.innerHTML = "Enter a valid email address!";
    return false;
  }

  emailError.innerHTML = "";
  return true;
}

function validateMessage() {
  var message = document.getElementById("contact-message").value;
  var required = 15;
  var left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + " more characters required";
    return false;
  }

  messageError.innerHTML = "";
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validateEmail() ||
    !validateNum() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix errors to submit";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 2000);
    return false;
  }
  return true; // Form can be submitted if all validations pass
}
