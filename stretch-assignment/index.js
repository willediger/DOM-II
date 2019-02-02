let blocks = document.querySelectorAll('.blocks .block');

//remove top margin to display better on my screen :)
blocks[0].parentElement.style.marginTop = 0;

//assign default order because i don't want to have to pull the order from computed styles.
blocks.forEach((e, i) => e.style.order = i + 1);

//function to return the rgb() background color of an element because we can't receive it as a style.
//just used in development/debugging.
const classList = element => {
  return element.classList;
}


//moves a block to the top by setting its order to 1, and sets the order of elements previously above it
//to increase by 1. elements below are unchanged.
const moveBlockToTop = block => {
  const origLocation = parseInt(block.style.order);
  //move block to top, move blocks that were above it down 1.
  blocks.forEach((e, i) => {
    currBlockLocation = parseInt(e.style.order);
    if (e === block) {
      e.style.order = 1;
    } else if (currBlockLocation < origLocation) {
      e.style.order = currBlockLocation + 1
    }
    // console.log(classList(e), e.style.order); // just for developing/debugging
  })
}

const pixelNumber = str => {
  return Number(str.substring(-2, str.length - 2))
}

const pixelStr = num => {
  return num + 'px';
}

const moveBlockToRight = (block, distance = 10) => {
  let originalMarginLeftNumber = pixelNumber(block.style.marginLeft);
  block.style.marginLeft = pixelStr(originalMarginLeftNumber + distance);
}

//adds event listeners on each block that runs move block to top when clicked.
blocks.forEach(e => {
  e.addEventListener('click', event => {
    moveBlockToTop(event.target);
  });
});

// blocks.forEach(e => {
//   e.addEventListener('click', event => {
//     moveBlockToTop(event.target);
//   });
// });