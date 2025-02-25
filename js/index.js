const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Image DOMs
const ctaImg2 = document.querySelector('#cta-img');
ctaImg2.setAttribute('src',siteContent["cta"]["img-src"]);
const middleImg2 = document.querySelector('.middle-img');middleImg2.setAttribute('src',siteContent["main-content"]["middle-img-src"]);

//Nav
const navBar = document.querySelector("nav");
navBar.querySelectorAll("a")[0].textContent = siteContent["nav"]["nav-item-1"];
navBar.querySelectorAll("a")[1].textContent = siteContent["nav"]["nav-item-2"];
navBar.querySelectorAll("a")[2].textContent = siteContent["nav"]["nav-item-3"];
navBar.querySelectorAll("a")[3].textContent = siteContent["nav"]["nav-item-4"];
navBar.querySelectorAll("a")[4].textContent = siteContent["nav"]["nav-item-5"];
navBar.querySelectorAll("a")[5].textContent = siteContent["nav"]["nav-item-6"];


let navLinks = document.querySelectorAll("a");
navLinks.forEach(element => {
  element.style.color = 'green';
})

//Cta
const ctaH1 = document.querySelector("h1");
ctaH1.innerHTML = siteContent.cta.h1.split(" ").join("<br>")


//Button
const button = document.querySelector("button");
button.textContent = siteContent.cta.button

//Main-Content

const mainh4 = document.querySelectorAll(".main-content h4");
mainh4[0].textContent = (siteContent["main-content"]["features-h4"])
mainh4[1].textContent = (siteContent["main-content"]["about-h4"])
mainh4[2].textContent = (siteContent["main-content"]["services-h4"])
mainh4[3].textContent = (siteContent["main-content"]["product-h4"])
mainh4[4].textContent = (siteContent["main-content"]["vision-h4"])

const mainText = document.querySelectorAll(".main-content p");
mainText[0].textContent = (siteContent["main-content"]["features-content"])
mainText[1].textContent = (siteContent["main-content"]["about-content"])
mainText[2].textContent = (siteContent["main-content"]["services-content"])
mainText[3].textContent = (siteContent["main-content"]["product-content"])
mainText[4].textContent = (siteContent["main-content"]["vision-content"])


//footer
const contactH4 = document.querySelector(".contact h4")
contactH4.textContent = (siteContent["contact"]["contact-h4"])

const contact = document.querySelectorAll(".contact p");
contact[0].textContent = (siteContent["contact"]["address"])
contact[1].textContent = (siteContent["contact"]["phone"])
contact[2].textContent = (siteContent["contact"]["email"])

const copy = document.querySelector("footer p")
copy.textContent = (siteContent["footer"]["copyright"])


//Added to the Nav

const home = document.createElement('a');
home.textContent = "Home";


const shop = document.createElement('a');
shop.textContent = "Shop";


const newnav = document.querySelector('nav');
newnav.prepend(home);


const newnav2 = document.querySelector('nav');
newnav2.appendChild(shop);

const navText = document.querySelectorAll('a');
navText.forEach(element => {
  element.style.color = 'green'
});

// Stretch

const ctaHeading = document.querySelector('.cta-text h1');
ctaHeading.innerHTML = siteContent["cta"]["h1"].split(' ').join('<br>');
ctaHeading.style.color = 'green';

button.addEventListener("click", function(event) {
  button.textContent = "You are Awesome!";
});