// Define the controls HTML as a string
const controlsHTML = `
  <div class="controls" id="controls">
    <!-- Color Picker Section -->
    <div class="control-section">
      <label for="colorPicker" class="control-label">
        <i class="fas fa-fill-drip color-icon"></i>
        <span>Pick a Color!</span>
      </label>
      <input type="color" id="colorPicker" title="Pick a color for the clock" />
    </div>
    <!-- Font Size Range Section -->
    <div class="control-section">
      <label for="fontSizeRange" class="control-label">
        <i class="fas fa-text-height size-icon"></i>
        <span>Font Size</span>
      </label>
      <input type="range" id="fontSizeRange" min="15" max="20" step="1" value="10" />
    </div>
    <!-- Background Upload Section -->
    <div class="control-section">
      <label for="bgUpload" class="upload-btn">
        <i class="fas fa-upload upload-icon"></i>
        <span>Upload BG</span>
      </label>
      <input type="file" id="bgUpload" accept="image/*" style="display: none;" />
    </div>
    <!-- Remove Background Button Section -->
    <div class="control-section">
      <button id="removeBgBtn">
        <i class="fas fa-trash-alt remove-icon"></i>
        <span>Remove BG</span>
      </button>
    </div>
    <!-- Check Button Section -->
    <div class="control-section">
      <button class="check-btn" id="checkBtn">
        <i class="fa-solid fa-circle-check check-icon"></i>
        <span>Done</span>
      </button>
    </div>
  </div>
`;

// Append the floating form and controls to the desired location
const container = document.getElementById('appContainer');
container.innerHTML = controlsHTML;