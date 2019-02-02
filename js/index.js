//on click of menu item, change the font family of that element to verdana.
let header = document.querySelector('.main-navigation');
header.addEventListener('click', (event) => {
  event.target.style.fontFamily = 'Verdana';
  event.preventDefault();
});



//on click of logo inside header, change color of text to purple.
//does not change the font to verdana due to stopPropagation.
let logo = document.querySelector('.logo-heading');
logo.addEventListener('click', (event) => {
  event.target.style.color = 'purple';
  event.stopPropagation();
});



//on doubleclick of element in intro, "welcome to fun bus", image above, and paragraph below, change background color to orange
let intro = document.querySelector('.intro');
intro.addEventListener('dblclick', (event) => {
  event.target.style.background = 'orange';
});



//on doubleclick of image in intro (above welcome to fun bus), change width to 80% and scale vertically.
//does not change background color to orange due to stopPropagation.
let introImg = intro.querySelector('img');
introImg.addEventListener('dblclick', (event) => {
  event.target.style.width = '80%';
  event.stopPropagation();
});



//on mousover of the h2 in the first section "let's go", change font size to 4rem. on mouseout, change it back
let originalFirstSectionH2FontSize;
let firstSectionH2 = document.querySelector('.content-section h2');
firstSectionH2.addEventListener('mouseover', (event) => {
  originalFirstSectionH2FontSize = event.target.style.fontSize; //store the current font size to be used to restore it to its original glory on mouseout after we've change it on mouseover
  event.target.style.fontSize = '4rem';
});
firstSectionH2.addEventListener('mouseout', (event) => {
  event.target.style.fontSize = originalFirstSectionH2FontSize; //restore the fontsize to its original size before we mousedover
});



//on using scroll wheel while hovered over the first paragraph under "let's go", change the color to blue
//first section paragraphs ("let's" go section)
let firstSectionPs = document.querySelectorAll('.content-section p');
firstSectionPs[0].addEventListener('wheel', (event) => {
  event.target.style.color = 'blue';
}, {passive: true}); //passive so we don't get an error that we're trying to override default scrolling behavior.



//on mousedown on the second paragraph under "let's go", change the color to green
firstSectionPs[1].addEventListener('mousedown', (event) => {
  event.target.style.color = 'green';
});



//once the image in the second section has loaded, add a black border around it.
//second section = "adventure awaits". image is to the left of that text.
let secondSection = document.querySelector('.content-section.inverse-content');
let secondSectionImg = secondSection.querySelector('img');
secondSectionImg.addEventListener('load', (event) => {
  event.target.style.border = '4px solid black';
});



//on both the paragraphs in the second section ("adventure awaits"), when right clicking add a red border.
//we also stop the context menu from coming up.
let secondSectionPs = secondSection.querySelectorAll('p');
secondSectionPs.forEach(e => e.addEventListener('contextmenu', (event) => {
  event.target.style.border = '4px solid red';
  event.preventDefault(); //prevents right click from bringing in context menu
}));



//on both the paragraphs in the second section ("adventure awaits"), when left clicking add a blue border.
secondSectionPs.forEach(e => e.addEventListener('click', (event) => {
  event.target.style.border = '4px solid blue';
}));



//when right clicking or auxilliary clicking, add an orange border around the h2 in "pick your destination" section
//the h2 in the "pick your destination" section
let contentDestinationH2 = document.querySelector('.content-destination h2');
contentDestinationH2.addEventListener('auxclick', (event) => {
  event.target.style.border = '4px solid orange';
});



//for the paragraph in the "pick your destination" section, we allow it to receive focus and accept keydown events.
//on focus, we stop the normal blue outline from happening
//on keydown after focus, we give it a cyan border
let contentDestinationP = document.querySelector('.content-destination p');

//setting tab index so it can receive focus for receiving keydown events.
contentDestinationP.setAttribute('tabindex', '1');

//removing default styling for when it's focused:
contentDestinationP.addEventListener('focus', (event) => {
  event.target.style.outline = 'none';
});

//color cyan border when keydown after focused.
contentDestinationP.addEventListener('keydown', (event) => {
  event.target.style.border = '4px solid cyan';
});