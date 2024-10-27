function startMovingMouseGifOnLoad() {
  const mouse = document.getElementById("running-mouse");
  mouse.style.display = "block"; // Show the mouse to begin
  
  const STARTING_POSITION = -300; // Starting position off-screen
  let position = STARTING_POSITION; // Current position off-screen
  const screenWidth = window.innerWidth; // Get screen width

  function moveMouse() {
    position += 5; // Adjust speed (higher value means faster)
    mouse.style.left = position + "px";

    if (position < screenWidth) {
      console.log("HI")
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
