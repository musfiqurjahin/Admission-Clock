document.querySelector('.scroll-icon').addEventListener('click', () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  });

  function updateCountdown(targetDate, elementId) {
    const now = new Date();
    const remaining = targetDate - now;

    if (remaining > 0) {
      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

      document.getElementById(elementId).textContent = `Time left: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      document.getElementById(elementId).textContent = "Exam started or finished!";
    }
  }

  const medicalExamDate = new Date("2025-01-17T11:00:00");
  const DentalExamDate = new Date("2025-02-28T10:00:00");
  const bUnitExamDate = new Date("2025-01-25T11:00:00");
  const cUnitExamDate = new Date("2025-02-15T11:00:00");

  setInterval(() => updateCountdown(medicalExamDate, "countdown1"), 1000);
  setInterval(() => updateCountdown(bUnitExamDate, "countdown2"), 1000);
  setInterval(() => updateCountdown(cUnitExamDate, "countdown3"), 1000);
  setInterval(() => updateCountdown(DentalExamDate, "countdown4"), 1000);

  // Theme Toggle Functionality
  const toggleButton = document.getElementById('theme-toggle');
  toggleButton.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.querySelectorAll('.tile').forEach(tile => {
      tile.classList.toggle('dark');
    });
    document.querySelectorAll('.countdown').forEach(countdown => {
      countdown.classList.toggle('dark');
    });
     // Update clock container styling
  const clockContainer = document.querySelector('.clock-container');
  clockContainer.classList.toggle('dark');
});


function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
    const timeString = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
    
    document.getElementById('clock').textContent = timeString;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options);
    document.getElementById('date').textContent = dateString;

    // Add dynamic greeting functionality
    const greetingElement = document.getElementById('greeting');
    let greetingMessage;
    if (hours < 6) {
    greetingMessage = "Quiet nights grow great dreams. Keep building yours.";
    } else if (hours < 7) {
    greetingMessage = "The world sleeps, but your determination awakens success.";
    } else if (hours < 8) {
    greetingMessage = "Morning whispers, 'Today is your chance to shine.'";
    } else if (hours < 9) {
    greetingMessage = "Rise early, aim high, and let success follow.";
    } else if (hours < 10) {
    greetingMessage = "Every sunrise marks a step closer to your dreams.";
    } else if (hours < 11) {
    greetingMessage = "The clock ticks; make every moment count.";
    } else if (hours < 12) {
    greetingMessage = "Your efforts now are tomorrow's victories.";
    } else if (hours < 13) {
    greetingMessage = "Pause, reflect, and prepare to conquer the rest of the day.";
    } else if (hours < 14) {
    greetingMessage = "The journey is long, but you're stronger than you know.";
    } else if (hours < 15) {
    greetingMessage = "Focus sharpens the path to your goal.";
    } else if (hours < 16) {
    greetingMessage = "Small wins today lead to great triumphs tomorrow.";
    } else if (hours < 17) {
    greetingMessage = "The grind is tough, but the reward is worth it.";
    } else if (hours < 18) {
    greetingMessage = "Every step forward brings the finish line closer.";
    } else if (hours < 19) {
    greetingMessage = "As the sun sets, let your determination rise.";
    } else if (hours < 20) {
    greetingMessage = "Evenings are for reflecting, learning, and growing.";
    } else if (hours < 21) {
    greetingMessage = "You’ve come far today; finish strong.";
    } else if (hours < 22) {
    greetingMessage = "The night is still; focus and own the silence.";
    } else if (hours < 23) {
    greetingMessage = "Rest now—your dreams need a well-rested mind.";
    } else {
    greetingMessage = "Another day awaits. Sleep well and dream big.";
  }
  greetingElement.textContent = greetingMessage;
}

// Set interval for clock and greeting updates
setInterval(updateClock, 1000);
updateClock(); // Initial call to display the clock, date, and greeting immediately


  
// Elements
const colorPicker = document.getElementById('colorPicker');
const fontSizeRange = document.getElementById('fontSizeRange');
const clock = document.getElementById('clock');
const date = document.getElementById('date');
const scrollIcon = document.querySelector('.scroll-icon'); // Scroll icon
const addTileBtn = document.querySelector('.add-tile-btn');
const themeBtn = document.querySelector('.ui-switch input:checked + .slider .circle');
const controls = document.getElementById('controls');
const checkBtn = document.getElementById('checkBtn');
const bgUpload = document.getElementById('bgUpload');
const clockContainer = document.querySelector('.clock-container');
const greet = document.querySelector('#greeting');
const controlsPopup = document.getElementById('controlsPopup');
const controlsOverlay = document.getElementById('controlsOverlay');
const cogsButton = document.getElementById('cogsButton');
const popupContainer = document.getElementById('popupContainer');



// Function to show the popup
function showPopup() {
    controlsPopup.style.display = 'block';
    controlsOverlay.style.display = 'block';
    popupContainer.style.display = 'block';
}

// Function to hide the popup
function hidePopup() {
    controlsPopup.style.display = 'none';
    controlsOverlay.style.display = 'none';
}

// Toggle visibility of the controls popup
function togglePopup() {
    if (controlsPopup.style.display === 'block') {
        hidePopup();
    } else {
        showPopup();
    }
}


// Event listener for cogs button
cogsButton.addEventListener('click', showPopup);
// Hide popup when overlay is clicked
controlsOverlay.addEventListener('click', hidePopup);
// Add event listeners for clock and date clicks
//clock.addEventListener('click', togglePopup);
//date.addEventListener('click', togglePopup);


// Function to load the background image from local storage when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const savedBgImage = localStorage.getItem('backgroundImage');
    if (savedBgImage) {
        clockContainer.style.backgroundImage = `url(${savedBgImage})`;
    }
});

// Handle background image upload
bgUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        const bgImage = reader.result;
        clockContainer.style.backgroundImage = `url(${bgImage})`; // Set the background image
        localStorage.setItem('backgroundImage', bgImage); // Save the image in local storage
    };
    reader.readAsDataURL(file);
});

// Event listener to remove the background image
document.getElementById('removeBgBtn').addEventListener('click', () => {
    clockContainer.style.backgroundImage = ''; // Remove the background image
    localStorage.removeItem('backgroundImage'); // Remove the image from local storage
});



// Color Picker functionality
colorPicker.addEventListener('input', function() {
    const selectedColor = colorPicker.value;
    clock.style.color = selectedColor;
    date.style.color = selectedColor;
    scrollIcon.style.color = selectedColor; // Change scroll icon color
    addTileBtn.style.backgroundColor = selectedColor;
    themeBtn.style.backgroundColor = selectedColor;
    greet.style.color=selectedColor;
});

// Font Size Resizer functionality
fontSizeRange.addEventListener('input', function() {
    const fontSize = fontSizeRange.value + "vw"; // Convert the value to 'vw' units
    clock.style.fontSize = fontSize;
});

  // Hide the controls when the check button is clicked
  checkBtn.addEventListener('click', function() {
    controlsPopup.style.display = 'none';
    controlsOverlay.style.display = 'none';
    // Hide the background upload input when controls are hidden
 });



  function downloadTile(tileId) {
  const tile = document.getElementById(tileId);
  html2canvas(tile).then(canvas => {
    // Create a new canvas
    const newCanvas = document.createElement('canvas');
    const context = newCanvas.getContext('2d');

    // Set canvas dimensions
    newCanvas.width = canvas.width;
    newCanvas.height = canvas.height;

    // Draw the original canvas onto the new canvas
    context.drawImage(canvas, 0, 0);

    // Set watermark properties
    const watermarkText = "Generated from <musfiqurjahin.github.io>";
    context.font = "italic 15px 'Amita', serif";
    context.fillStyle = "rgba(255, 255, 255, 0.5)"; // White with 50% opacity
    context.textAlign = "center";
    context.textBaseline = "top";

    // Highlight watermark text
    context.shadowColor = "rgba(0, 0, 0, 0.8)"; // Black shadow
    context.shadowBlur = 5; // Shadow blur
    context.shadowOffsetX = 2; // Horizontal shadow offset
    context.shadowOffsetY = 2; // Vertical shadow offset

    // Optional: Add a semi-transparent background to the watermark text
    const textWidth = context.measureText(watermarkText).width;
    context.fillStyle = "green"; // Semi-transparent black background
    context.fillRect((newCanvas.width / 2) - (textWidth / 2) - 5, 10 - 5, textWidth + 10, 25);

    // Draw the watermark text at the top of the canvas
    context.fillStyle = "white"; // White text
    context.fillText(watermarkText, newCanvas.width / 2, 10);

    // Convert the new canvas to a data URL and download the image
    const link = document.createElement('a');
    link.href = newCanvas.toDataURL('image/jpeg');
    link.download = `${tileId}.jpg`;
    link.click();
  });
}



function reorderTiles(order) {
  const container = document.getElementById('container');
  const tiles = Array.from(container.getElementsByClassName('tile'));

  tiles.sort((a, b) => {
    const dateA = new Date(a.getAttribute('data-date'));
    const dateB = new Date(b.getAttribute('data-date'));
    return order === 'asc' ? dateA - dateB : dateB - dateA;
  });

  tiles.forEach(tile => container.appendChild(tile));
}

document.getElementById('sort-select').addEventListener('change', (event) => {
  reorderTiles(event.target.value);
});

function createTile(tileData) {
  const { id, title, date, time, center } = tileData;
  const formattedDate = new Date(date).toLocaleDateString('en-GB'); // Format to dd/mm/yyyy
  const newTile = document.createElement('div');
  newTile.classList.add('tile', 'dark');
  newTile.id = id;
  newTile.setAttribute('data-date', date);

  newTile.innerHTML = `
    <h2>${title}</h2>
    <p>Date: ${formattedDate}</p>
    <p>Time: ${time}</p>
    ${center ? `<p><strong>Center:</strong> ${center}</p>` : ''}
    <div class="countdown dark" id="countdown${id}"></div>
    <button class="download-btn" onclick="downloadTile('${id}')"><i class="fas fa-download"></i></button>
    <button class="delete-btn" onclick="deleteTile('${id}')"><i class="fas fa-trash"></i></button>
  `;

  document.getElementById('container').appendChild(newTile);
  updateCountdown(new Date(`${date}T${time}`), `countdown${id}`);
  setInterval(() => updateCountdown(new Date(`${date}T${time}`), `countdown${id}`), 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTiles = JSON.parse(localStorage.getItem('tiles')) || [];
  savedTiles.forEach((tile) => createTile(tile));
  reorderTiles(document.getElementById('sort-select').value); // Reorder tiles after loading
});

const AddBtn = document.getElementById('addTileBtn');
const floatingForm = document.getElementById('floatingForm');
const addTile = document.getElementById('addTile');
const cancelTile = document.getElementById('cancelTile');

addTileBtn.addEventListener('click', () => {
  floatingForm.style.display = 'block';
});

cancelTile.addEventListener('click', () => {
  // Add the 'hide' class to trigger the disappearance animation
  floatingForm.classList.add('hide');
  
  // Wait for the animation to complete before hiding the form
  setTimeout(() => {
    floatingForm.style.display = 'none';
    // Optionally, remove the 'hide' class so it can be re-used
    floatingForm.classList.remove('hide');
  }, 500); // Match the duration of the slide-out animation
});

function saveTile(tileData) {
  const savedTiles = JSON.parse(localStorage.getItem('tiles')) || [];
  savedTiles.push(tileData);
  localStorage.setItem('tiles', JSON.stringify(savedTiles));
}

addTile.addEventListener('click', saveTileHandler);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const currentInput = document.activeElement;
    const inputs = Array.from(floatingForm.querySelectorAll('input, button'));
    const currentIndex = inputs.indexOf(currentInput);

    if (currentIndex < inputs.length - 1) {
      inputs[currentIndex + 1].focus();
    } else if (currentInput === addTile) {
      saveTileHandler();
    }
  }
});

function saveTileHandler() {
  const title = document.getElementById('tileTitle').value;
  const date = document.getElementById('tileDate').value;
  const time = document.getElementById('tileTime').value;
  const center = document.getElementById('tileCenter').value;

  if (title && date && time) {
    const newTileId = `tile${Date.now()}`;
    const tileData = { id: newTileId, title, date, time };

    // Include 'center' only if it's provided
    if (center.trim() !== "") {
      tileData.center = center;
    }

    createTile(tileData);
    saveTile(tileData);

    // Clear form and hide
    floatingForm.style.display = 'none';
    document.getElementById('tileTitle').value = '';
    document.getElementById('tileDate').value = '';
    document.getElementById('tileTime').value = '';
    document.getElementById('tileCenter').value = '';

    reorderTiles(document.getElementById('sort-select').value); // Reorder tiles after adding new tile
  } else {
    alert('Please fill out all required fields.');
  }
}

function deleteTile(tileId) {
  const savedTiles = JSON.parse(localStorage.getItem('tiles')) || [];
  const updatedTiles = savedTiles.filter(tile => tile.id !== tileId);
  localStorage.setItem('tiles', JSON.stringify(updatedTiles));

  const tileElement = document.getElementById(tileId);
  if (tileElement) {
    tileElement.remove();
  }
}


//to stop the blinking after 3 cycles (6 seconds) of Scroll icon
document.addEventListener("DOMContentLoaded", () => {
    const scrollIcon = document.querySelector(".scroll-icon");

    // Stop blinking after 6 seconds
    setTimeout(() => {
      scrollIcon.classList.add("hide-text");
    }, 6000); // 3 blinks (2 seconds each)
  });