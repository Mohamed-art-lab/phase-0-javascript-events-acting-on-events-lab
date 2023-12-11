// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
      moveDodgerLeft();
    }
  });
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) { // Adjusted for the dodger's width of 40px
      dodger.style.left = `${left + 1}px`;
    }
  }
  
  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
      moveDodgerRight();
    }
  });