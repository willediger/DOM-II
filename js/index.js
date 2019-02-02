let header = document.querySelector('.main-navigation');
header.addEventListener('click', (event) => {
  event.target.style.fontFamily = 'Verdana';
  event.preventDefault();
});

let logo = document.querySelector('.logo-heading');
logo.addEventListener('click', (event) => {
  event.target.style.color = 'purple';
  event.stopPropagation();
});


let intro = document.querySelector('.intro');
intro.addEventListener('dblclick', (event) => {
  event.target.style.background = 'orange';
});

let introImg = intro.querySelector('img');
introImg.addEventListener('dblclick', (event) => {
  event.target.style.width = '80%';
  event.stopPropagation();
});

let originalFirstSectionH2FontSize;
let firstSectionH2 = document.querySelector('.content-section h2');
firstSectionH2.addEventListener('mouseover', (event) => {
  originalFirstSectionH2FontSize = event.target.style.fontSize; //store the current font size to be used to restore it to its original glory on mouseout after we've change it on mouseover
  event.target.style.fontSize = '4rem';
});
firstSectionH2.addEventListener('mouseout', (event) => {
  event.target.style.fontSize = originalFirstSectionH2FontSize; //restore the fontsize to its original size before we mousedover
});


let firstSectionPs = document.querySelectorAll('.content-section p');
firstSectionPs[0].addEventListener('wheel', (event) => {
  event.target.style.color = 'blue';
}, {passive: true}); //passive so we don't get an error that we're trying to override default scrolling behavior.

firstSectionPs[1].addEventListener('mousedown', (event) => {
  event.target.style.color = 'green';
});


let secondSection = document.querySelector('.content-section.inverse-content');

let secondSectionImg = secondSection.querySelector('img');
secondSectionImg.addEventListener('load', (event) => {
  event.target.style.border = '4px solid black';
});

let secondSectionPs = secondSection.querySelectorAll('p');

secondSectionPs.forEach(e => e.addEventListener('contextmenu', (event) => {
  event.target.style.border = '4px solid red';
  event.preventDefault(); //prevents right click from bringing in context menu
}));


secondSectionPs.forEach(e => e.addEventListener('click', (event) => {
  event.target.style.border = '4px solid blue';
}));


let contentDestinationH2 = document.querySelector('.content-destination h2');

contentDestinationH2.addEventListener('auxclick', (event) => {
  event.target.style.border = '4px solid orange';
});

let contentDestinationP = document.querySelector('.content-destination p');

//setting tab index so it can receive focus for receiving keydown events.
contentDestinationP.setAttribute('tabindex', '1');

//removing default styling for when it's focused:
contentDestinationP.addEventListener('focus', (event) => {
  event.target.style.outline = 'none';
});

//color cycan border when keydown after focused.
contentDestinationP.addEventListener('keydown', (event) => {
  event.target.style.border = '4px solid cyan';
});