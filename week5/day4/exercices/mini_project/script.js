// Créer 
const colorGrid = document.getElementById('color-grid');
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray', 'black'];

for (let i = 0; i < 100; i++) {
  const colorCell = document.createElement('div');
  colorCell.className = 'color-cell';

  colorCell.addEventListener('click', function() {
    const selectedColor = document.querySelector('.selected');
    if (selectedColor) {
      selectedColor.classList.remove('selected');
    }
    colorCell.classList.add('selected');
  });

  colorCell.style.backgroundColor = colors[i % colors.length];
  colorGrid.appendChild(colorCell);
}

// Dessiner sur la grille de cases vides
let isDrawing = false;

colorGrid.addEventListener('mousedown', function() {
  isDrawing = true;
});

colorGrid.addEventListener('mouseup', function() {
  isDrawing = false;
});

colorGrid.addEventListener('mouseover', function(event) {
  if (isDrawing && event.target.classList.contains('color-cell')) {
    const selectedColor = document.querySelector('.selected');
    if (selectedColor) {
      event.target.style.backgroundColor = selectedColor.style.backgroundColor;
    }
  }
});
