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


// 

// Changing the H1
//const h1 = document.querySelector('.cta-text');
const h1 = document.querySelector('.cta-text h1')
h1.textContent = 'DOM Is Awesome' 


// button 
const button = document.querySelector('.cta-text button');
button.textContent = 'Get Started'



// updating the NAV bar
// sleect main nav bar query select 'nav' 
// qeue quereselctor all for all the tags 
// 
const navBar = document.querySelector('nav')
console.log(navBar);

const navBarStuff = document.body.querySelectorAll('nav a')
console.log(navBarStuff);
navBarStuff[0].textContent = 'Services';
navBarStuff[1].textContent = 'Products';
navBarStuff[2].textContent = 'Vision' ;
navBarStuff[3].textContent = 'Features';
navBarStuff[4].textContent = 'About';
navBarStuff[5].textContent = 'Contact';

navBarStuff.forEach((item) => {
console.log(item);
item.style.color = 'green'
});







// Main Content 
// getting H4 'quereselctorALL' 

const h4 = document.body.querySelectorAll('h4');
h4[0].textContent = siteContent ['main-content'] ['features-h4'];
h4[1].textContent = siteContent ['main-content'] ['about-h4'];
h4[2].textContent = siteContent ['main-content'] ['product-h4'];
h4[3].textContent = siteContent ['main-content'] ['services-h4'];
h4[4].textContent = siteContent ['main-content'] ['vision-h4'];
h4[5].textContent = siteContent ['contact'] ['contact-h4']



// p tag

const p = document.querySelectorAll ('p') 
p[0].textContent = siteContent ['main-content'] ['features-content'];
p[1].textContent = siteContent ['main-content'] ['about-content'];
p[2].textContent = siteContent ['main-content'] ['product-content'];
p[3].textContent = siteContent ['main-content'] ['services-content'];
p[4].textContent = siteContent ['main-content'] ['vision-content'];

p[5].textContent = siteContent ['contact'] ['address']
p[6].textContent = siteContent ['contact'] ['phone']
p[7].textContent = siteContent ['contact'] ['email']

p[8].textContent = siteContent ['footer'] ['copyright']

// footer 







// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// get header to have header pic 
const ctaIMG = document.getElementById('cta-img');
ctaIMG.setAttribute('src', siteContent['cta']['img-src']);


// get middle image
const middleIMG = document.getElementById('middle-img');
middleIMG.setAttribute('src', siteContent['main-content']['middle-img-src']);



// Chaning Nav Color