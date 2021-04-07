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



// set img header 
const imgHeader = document.getElementById('cta-img');

imgHeader.setAttribute('src', siteContent['cta']['img-src'])

// h1

const h1 = document.querySelector('.cta-text h1') 
// grabs the h1 from cta

h1.textContent = 'DOM is Awesome'

// button 

const button = document.querySelector('.cta-text button');
// grabs button from the cta

button.textContent = 'Get Started'


// main content 

// getting all h4 elements and setting them to the right attribues 

const h4 = document.querySelectorAll('h4');
// grabs every h4 element 

// will refrence each h4 by its index in the siteConent object 

h4[0].textContent = siteContent ['main-content'] ['features-h4'];
h4[1].textContent = siteContent ['main-content'] ['about-h4'];
h4[2].textContent = siteContent ['main-content'] ['services-h4'];
h4[3].textContent = siteContent ['main-content'] ['product-h4'];
h4[4].textContent = siteContent['main-content'] ['vision-h4'];

// setting the p tags 

// p-tags in 'main-content'

const p = document.querySelectorAll('p'); 
// graving every p-tag elemnt 

// main contnet p-tags 
p[0].textContent = siteContent ['main-content'] ['features-content'];
p[1].textContent = siteContent ['main-content'] ['about-content'];
p[2].textContent = siteContent ['main-content'] ['services-content'];
p[3].textContent = siteContent ['main-content'] ['product-content'];
p[4].textContent = siteContent ['main-content'] ['vision-content'];

// contact p-tags 

p[5].textContent = siteContent ['contact'] ['address'];
p[6].textContent = siteContent ['contact'] ['phone'];
p[7].textContent = siteContent ['contact'] ['email'];

// footer p-tag 

p[8].textContent = siteContent ['footer'] ['copyright'];

// navBar

const navBar = document.querySelector('nav')

console.log(navBar);
// in console <nav>  <a href = '#'> </a>, <a href = '#'> </a>, <a href = '#'> </a>, <a href = '#'> </a>, <a href = '#'> </a>, <a href = '#'> </a> </nav>

const navBarText = document.body.querySelectorAll('nav a')
// grabs all the 'nav a' tags shown in the console 

navBarText[0].textContent = siteContent ['nav'] ['nav-item-1'];
navBarText[1].textContent = siteContent ['nav'] ['nav-item-2'];
navBarText[2].textContent = siteContent ['nav'] ['nav-item-3'];
navBarText[3].textContent = siteContent ['nav'] ['nav-item-4'];
navBarText.textContent = siteContent ['nav'] ['nav-item-5'];
navBarText.textContent = siteContent ['nav'] ['nav-item-6'];

// changing the navBar to Green

navBarText.forEach((item) => {
console.log(item);
item.style.color= 'green'
});




// middle image 

const middleImg = document.getElementById('middle-img');

middleImg.setAttribute('src', siteContent ['main-content'] ['middle-img-src']);