// Define the floating form HTML as a string
const floatingFormHTML = `
  <div class="floating-form" id="floatingForm">
    <div class="form-container">
      <header>Add New Countdown↴</header>
      
      <label for="tileTitle">Title:</label>
      <input type="text" id="tileTitle" placeholder="Exam Name" required>
      
      <label for="tileDate">Date:</label>
      <input type="date" id="tileDate" required>
      
      <label for="tileTime">Time:</label>
      <input type="time" id="tileTime" required>
      
      <label for="tileCenter">Center:</label>
      <input type="text" id="tileCenter" placeholder="Exam Center">
      
      <button id="addTile"><i class="fas fa-plus-circle"></i> Add</button>
      <button id="cancelTile"><i class="fas fa-undo-alt"></i> Cancel</button>
    </div>
  </div>
`;

// Append the floating form to the desired location
const container = document.getElementById('Add-new');
container.innerHTML = floatingFormHTML;
