//style element
const style = document.createElement('style');

// CSS code as string
style.innerHTML = `
  .clock-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-image: url(''); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
    box-shadow: none;
    border-radius: 0;
    overflow: hidden;
  }

  #clock {
  font-size: 15vw;
  font-weight: bolder;
  text-align: center;
  color: #1e90ff;
  border: none;
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  text-shadow: 
    2px 2px 0 #000,  
    -2px -2px 0 #000,  
    2px -2px 0 #000,  
    -2px 2px 0 #000,
    3px 3px 0 #000,  
    -3px -3px 0 #000,  
    3px -3px 0 #000,  
    -3px 3px 0 #000;
 }

  #date {
    font-family: "Spicy Rice", serif;
    font-weight: 400;
    font-size: 2em;
    font-weight: 400;
    text-shadow: none;
    color: #1e90ff;
    border: none;
    background-color: rgba(0, 0, 0, 0.1);
    margin-top: 0;
    text-shadow: 
    1px 1px 0 #000,  
    -1px -1px 0 #000,  
    1px -1px 0 #000,  
    -1px 1px 0 #000;
  }
  
  #greeting {
    font-family: "Chakra Petch", serif;
    font-optical-sizing: auto;
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    color: #ffae00; 
    background-color: rgba(0, 0, 0, 0.1);
    border: none;
    margin-bottom: 10px;
    text-shadow: 1px 1px 3px #000000;
    opacity: 0;
    transform: scale(0.5); 
    animation: zoomFadeIn 0.8s ease-out forwards;
    text-shadow: 
    1px 1px 0 #000,  
    -1px -1px 0 #000,  
    1px -1px 0 #000,  
    -1px 1px 0 #000;
  }
  @keyframes zoomFadeIn {
    0% {
      opacity: 0;
      transform: scale(0.5); /* Shrink */
      }
      100% {
      opacity: 1;
      transform: scale(1); /* Normal size */
    }
  }

  .scroll-icon {
    display: inline-block;
    text-align: center;
    font-size: 3em;
    color: #1e90ff;
    margin-top: 20px;
    animation: scroll-indicator 2s infinite ease-in-out;
    cursor: pointer;
    text-shadow: 
      1px 1px 0 #000,  
      -1px -1px 0 #000,  
      1px -1px 0 #000,  
      -1px 1px 0 #000;
    }

  .scroll-icon::after {
    content: "Scroll_Down";
    display: block;
    margin-top: 10px;
    font-size: 15px;
    color: #ff8000;
    opacity: 0;
    animation: blink-text 2s steps(1, end) infinite;
  }

  .scroll-icon:hover{
    animation: none;
  }

  .scroll-icon.hide-text::after {
    display: none;
  }
  @keyframes blink-text {
    0%, 50% {
      opacity: 0;
    }
    51%, 100% {
      opacity: 1;
    }
  }

  /* Scroll-indicator animation */
  @keyframes scroll-indicator {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    50% {
      transform: translateY(15px);
      opacity: 0.8;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  body {
    font-family: "VT323", serif;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    position: relative;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  body::-webkit-scrollbar {
    display: none;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 10px;
    width: 90%;
    margin-top: 20px;
  }

  .tile {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    width: 300px;
    text-align: center;
    cursor: pointer;
    position: relative; /* Added for positioning the download button */
  }

  .tile:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);
    border: 2px solid green;
  }

  .tile h2 {
    font-family: "Rowdies", serif;
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 10px;
    color: #0000ff;
  }

  .tile p {
    font-family: "Cuprum", serif;
    font-size: 15px;
    font-weight: lighter;
    margin: 5px 0;
    color: #000000;
  }

  .countdown {
    font-family: "Chakra Petch", serif;
    font-weight: 900;
    font-size: 1.2rem;
    color: #ff0800;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    .tile {
      width: 100%;
    }
  }

  /* Dark Theme Styles */
  body.dark {
    background-color: #121212;
    color: #e0e0e0;
  }

  body.dark .clock-container {
    background-color: #121212;
    color: #e0e0e0;
  }

  .tile.dark {
    background: #333;
    border: 1px solid #555;
    color: #e0e0e0;
  }

  .tile.dark:hover {
    border: 2px solid green;
  }

  .tile.dark h2 {
    color: #fff;
  }

  .tile.dark p {
    color: #bbb;
  }

  .countdown.dark {
    color: #ff5722;
  }
  .clock-container.dark{
    background-color:#ffffff ;
    
  }
  .clock-container.dark {
    background-image: url('');
    filter: grayscale(100%);
  }

  .ui-switch {
    --switch-bg: rgb(135, 150, 165);
    --switch-width: 48px;
    --switch-height: 20px;
    --circle-diameter: 32px;
    --circle-bg: rgb(232, 89, 15);
    --circle-inset: calc((var(--circle-diameter) - var(--switch-height)) / 2);
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .ui-switch input {
    display: none;
  }

  .slider {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: var(--switch-width);
    height: var(--switch-height);
    background: var(--switch-bg);
    border-radius: 999px;
    position: relative;
    cursor: pointer;
  }

  .slider .circle {
    top: calc(var(--circle-inset) * -1);
    left: 0;
    width: var(--circle-diameter);
    height: var(--circle-diameter);
    position: absolute;
    background: var(--circle-bg);
    border-radius: inherit;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHdpZHRoPSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiCiAgICAgICAgZD0iTTkuMzA1IDEuNjY3VjMuNzVoMS4zODlWMS42NjdoLTEuMzl6bS00LjcwNyAxLjk1bC0uOTgyLjk4Mkw1LjA5IDYuMDcybC45ODItLjk4Mi0xLjQ3My0xLjQ3M3ptMTAuODAyIDBMMTMuOTI3IDUuMDlsLjk4Mi45ODIgMS40NzMtMS40NzMtLjk4Mi0uOTgyek0xMCA1LjEzOWE0Ljg3MiA0Ljg3MiAwIDAwLTQuODYyIDQuODZBNC44NzIgNC44NzIgMCAwMDEwIDE0Ljg2MiA0Ljg3MiA0Ljg3MiAwIDAwMTQuODYgMTAgNC44NzIgNC44NzIgMCAwMDEwIDUuMTM5em0wIDEuMzg5QTMuNDYyIDMuNDYyIDAgMDExMy40NzEgMTBhMy40NjIgMy40NjIgMCAwMS0zLjQ3MyAzLjQ3MkEzLjQ2MiAzLjQ2MiAwIDAxNi41MjcgMTAgMy40NjIgMy40NjIgMCAwMTEwIDYuNTI4ek0xLjY2NSA5LjMwNXYxLjM5aDIuMDgzdi0xLjM5SDEuNjY2em0xNC41ODMgMHYxLjM5aDIuMDg0di0xLjM5aC0yLjA4NHpNNS4wOSAxMy45MjhMMy42MTYgMTUuNGwuOTgyLjk4MiAxLjQ3My0xLjQ3My0uOTgyLS45ODJ6bTkuODIgMGwtLjk4Mi45ODIgMS40NzMgMS40NzMuOTgyLS45ODItMS40NzMtMS40NzN6TTkuMzA1IDE2LjI1djIuMDgzaDEuMzg5VjE2LjI1aC0xLjM5eiIgLz4KPC9zdmc+");
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    -o-transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  }

  .slider .circle::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.75);
    border-radius: inherit;
    -webkit-transition: all 500ms;
    -o-transition: all 500ms;
    transition: all 500ms;
    opacity: 0;
  }

  /* actions */
  .ui-switch input:checked+.slider .circle {
    left: calc(100% - var(--circle-diameter));
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHdpZHRoPSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiCiAgICAgICAgZD0iTTQuMiAyLjVsLS43IDEuOC0xLjguNyAxLjguNy43IDEuOC42LTEuOEw2LjcgNWwtMS45LS43LS42LTEuOHptMTUgOC4zYTYuNyA2LjcgMCAxMS02LjYtNi42IDUuOCA1LjggMCAwMDYuNiA2LjZ6IiAvPgo8L3N2Zz4=");
    background-color: rgb(0, 56, 146);
  }

  .ui-switch input:active+.slider .circle::before {
    -webkit-transition: 0s;
    -o-transition: 0s;
    transition: 0s;
    opacity: 1;
    width: 0;
    height: 0;
  }
  

  /* Download button styles */
  .download-btn {
    position: absolute;
    bottom: 5px;
    right: 5px;
    display: none;
    background-color: #1e90ff;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
  }

  .download-btn:hover{
    background-color: #195da1;
  }

  .download-btn i {
    font-size: 1.2em;
  }

  .tile:hover .download-btn {
    display: block;
  }

  /* Sort button styles */
  .sort-container {
    margin-top: 20px;
    margin-left: -30px;
    width: fit-content;
  }

  .sort-select {
    padding: 10px;
    font-size: 1rem;
    border: 2px solid #001eff;
    border-radius: 5px;
  }

  /* Add Button */
  .add-tile-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background-color: #1e90ff;
    color: white;
    font-size: 1.5rem;
    border: none;
    border-radius: 50%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .add-tile-btn:hover {
    background-color: #195da1;
  }

  /* Floating Form */
  .floating-form {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, #1f1f1f, #2e2e2e);
  padding: 20px 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  z-index: 10;
  height: auto;
  border: 1px solid #444;
  opacity: 0;
  animation: slide-in 0.5s ease-in-out forwards;
}

@keyframes slide-in {
  from {
    transform: translate(-50%, -100%);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: translate(-50%, -100%);
    opacity: 0;
  }
}

.floating-form.hide {
  animation: slide-out 0.5s ease-in-out forwards;
}

  .floating-form.dark {
    background: linear-gradient(135deg, #222, #333);
    color: #e0e0e0;
  }

  .floating-form .form-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  /* Style for the header */
  .floating-form header {
    font-size: 5vw; 
    text-align: center;
    color: #e0e0e0;
    margin-bottom: 20px; 
  }

  .floating-form input,
  .floating-form button {
    padding: 10px;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    outline: none;
  }

  .floating-form input {
    background: #1e1e1e;
    color: #fff;
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .floating-form input:focus {
    border: 2px solid #1e90ff;
  }

  .floating-form button {
    background: linear-gradient(135deg, #1e90ff, #00bfff);
    color: white;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease;
  }

  .floating-form button:hover {
    background: linear-gradient(135deg, #1e90ff, #007acc);
    transform: translateY(-2px); /* Subtle hover lift */
  }

  .floating-form button:active {
    transform: scale(0.95);
  }

  /* Delete Button */
  .delete-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px;
    background: #e74c3c;
    color: white;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  /* Show the delete button on tile hover */
  .tile:hover .delete-btn {
    opacity: 1;
  }
  .delete-btn:hover {
    background: #c0392b;
  }

  /* Prevent icon from blocking click */
  .delete-btn i {
    pointer-events: none;
  }

/* Overlay for Popup */
.controls-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
  display: none;
  backdrop-filter: blur(6px);
}

/* Popup Container */
.controls-popup {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: rgba(20, 20, 50, 0.4);
  padding: 20px;
  border-radius: 16px;
  text-align: center;
  z-index: 1000;
  backdrop-filter: blur(10px); 
  border: 2px solid rgba(0, 122, 255, 0.5);
}


/* Controls Wrapper */
.controls {
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
}

/* Control Section */
.control-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(30, 30, 70, 0.4); /* Transparent blue */
  padding: 12px 16px;
  border-radius: 12px;
  transition: all 0.3s ease;
  gap: 10px;
}

.control-section:hover {
  background: rgba(10, 10, 50, 0.6);
  border: 1px solid rgba(0, 122, 255, 0.5);
}

/* Labels and Icons */
.control-label {
  font-size: 16px;
  font-weight: 500;
  color: rgba(173, 216, 255, 0.8); /*Sft blue*/
  display: flex;
  align-items: center;
  gap: 10px;
}

.control-label span {
  color: rgba(0, 122, 255, 0.8);
  transition: color 0.3s ease;
}

.control-section:hover .control-label span {
  color: rgba(0, 82, 153, 0.8); /* Drk blue*/
}

/* Center Align Upload Button */
label.upload-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(0, 122, 255, 0.4);
  border: 1px solid rgba(0, 122, 255, 0.6);
  border-radius: 12px;
  padding: 12px 18px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

label.upload-btn:hover {
  background: rgba(0, 82, 153, 0.6);
  color: rgba(255, 255, 255, 0.9);
}

/* Upload icn */
label.upload-btn .upload-icon {
  color: rgba(173, 216, 255, 0.9); /* Light blue */
  transition: color 0.3s ease;
}

label.upload-btn:hover .upload-icon {
  color: rgba(255, 255, 255, 0.9);
}

/* Inputs and Buttons */
input[type="color"],
button {
  cursor: pointer;
  background: rgba(20, 20, 50, 0.4);
  border: 1px solid rgba(0, 122, 255, 0.5);
  border-radius: 6px;
  padding: 6px;
  color: rgba(173, 216, 255, 0.8);
  outline: none;
  transition: all 0.3s ease;
}

input[type="color"] {
  width: 50px;
  height: 30px;
}
#colorPicker {
  cursor: pointer;
  width: 100px;
  height: 50px;
  border: 2px solid #bbb;
  border-radius: 10px;
  padding: 0;
  background-color: #0000ff;
  background-size: 20px 20px;
  outline: none;
  transition: border-color 0.3s ease;
}

#colorPicker:hover {
  border-color: #3bfc00;
  box-shadow: 0 4px 12px rgba(0, 255, 0, 0.6);
}


input[type="range"] {
  width: 100px;
  background: rgba(10, 10, 50, 0.3);
}

button {
  padding: 10px 15px;
  border-radius: 8px;
  font-weight: bold;
  background: rgba(0, 122, 255, 0.4);
  color: rgba(255, 255, 255, 0.8);
}

button:hover {
  background: rgba(0, 82, 153, 0.6);
  color: rgba(255, 255, 255, 0.9);
}

/* Center Align Buttons */
button#removeBgBtn,
button#checkBtn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-align: center;
}

.check-btn {
  background: rgba(0, 122, 255, 0.4);
  color: rgba(255, 255, 255, 0.8);
}

.check-btn:hover {
  background: rgba(0, 82, 153, 0.6); /* Dark blue*/
  color: rgba(255, 255, 255, 0.9);
}
@media (max-width: 480px) {
  .controls-popup {
    width: 85%;
    max-height: 90%;
    overflow-y: auto;
    padding: 12px;
  }

  .controls {
    gap: 8px;
  }

  .control-section {
    padding: 8px 10px;
  }

  .control-label {
    font-size: 12px;
  }

  label.upload-btn {
    padding: 8px 12px;
  }

  button {
    padding: 6px 10px;
    font-size: 12px;
  }

  #colorPicker {
    width: 60px; 
    height: 30px;
  }
}

/*Settings*/
#cogsButton {
  position: fixed;
  left: 10px;
  top: 1%;
  transform: translateY(-50%);
  font-size: 2em;
  color: #007bff;
  background: transparent;
  border: none;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  z-index: 1001;
  transition: color 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
  animation: spin 2s linear infinite;
}

#cogsButton:hover {
  color: #ffffff;
  background-color: transparent;
  transform: scale(1);
  animation: spin 5s linear infinite;
}
#cogsButton:active {
  color: #fff;
  background-color: transparent;
  transform: scale(1.1);
  animation: spin 5s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;
// Append the style element to the head
document.head.appendChild(style);
