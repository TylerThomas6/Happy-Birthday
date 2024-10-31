// Function for the running mouse on card2.html
function startMovingMouseGifOnLoad() {
  const mouse = document.getElementById("running-mouse");
  mouse.style.display = "block"; // Show the mouse to begin

  const screenWidth = window.innerWidth; // Get screen width
  const STARTING_POSITION = -1 * (screenWidth / 2); // Starting position off-screen
  let position = STARTING_POSITION; // Current position off-screen

  function moveMouse() {
    position += 5; // Adjust speed (higher value means faster)
    mouse.style.left = position + "px";

    if (position < screenWidth) {
      requestAnimationFrame(moveMouse); // Continue moving
    } else {
      mouse.style.display = "none"; // Hide the mouse when it reaches the end

      // vv COMMENT OUT/DELETE IF WE DONT WANT THE ANIMATION TO LOOP
      // -------------------------------------------------------------------------------
      position = STARTING_POSITION; // Reset position to the starting position
      mouse.style.left = position + "px";

      mouse.style.display = "block"; // Show the mouse again after it is resetted
      requestAnimationFrame(moveMouse);
      // -------------------------------------------------------------------------------
    }
  }

  moveMouse(); // Start the mouse movement
}

// Function for the float mouse on card3.html
function startFloatingMouseGifOnLoad() {
  const mouse = document.getElementById("floating-mouse");
  mouse.style.display = "block"; // Show the mouse to begin

  const screenHeight = window.innerHeight; // Get screen height
  const STARTING_POSITION = -1 * (screenHeight / 2); // Starting position off-screen
  let position = STARTING_POSITION; // Current position off-screen

  function floatMouseDown() {
    position += 2; // Adjust speed (higher value means faster)
    mouse.style.top = position + "px";

    if (position < screenHeight) {
      requestAnimationFrame(floatMouseDown); // Continue moving
    } else {
      mouse.style.display = "none"; // Hide the mouse when it reaches the end

      // vv COMMENT OUT/DELETE IF WE DONT WANT THE ANIMATION TO LOOP
      // -------------------------------------------------------------------------------
      position = STARTING_POSITION; // Reset position to the starting position
      mouse.style.top = position + "px";

      mouse.style.display = "block"; // Show the mouse again after it is resetted
      requestAnimationFrame(floatMouseDown);
      // -------------------------------------------------------------------------------
    }
  }

  floatMouseDown(); // Start the mouse movement
}

// Function for the surprise mouse on card.html
function surpriseMouse() {
  const mouse = document.getElementById("surprise-mouse");
  const cheese = document.getElementById("clickable-cheese");
  document.getElementById("clickable-cheese").addEventListener("click", surprise);

  // Array to store the "animation frames" that move the surprise mouse up
  let offsetFrames = [];
  let index = 0;

  // Add the appropriate "animation frames" to offsetFrames
  let startingPercentage = -80;
  let curOffset = 0;
  while (startingPercentage < 0) {
    curOffset += startingPercentage;
    offsetFrames.push(curOffset + "%");
    offsetFrames.push(curOffset + "%");
    startingPercentage = (startingPercentage / 2.5) + 1;
  }

  // Function to move the surprise mouse up
  function surprise() {
    mouse.style.display = "block"; // Show the mouse to begin

    // Use the "animation frames" from offsetFrames to translate/offset the mouse
    if (index < offsetFrames.length) {
      mouse.style.transform = "translate(0px, " + offsetFrames[index] + ")";
      index++;

      requestAnimationFrame(surprise);
    }
  }
}
