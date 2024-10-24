window.onload = function () {
  const mouse = document.getElementById("running-mouse");
  let position = -150; // Starting position off-screen
  const screenWidth = window.innerWidth; // Get screen width

  function moveMouse() {
    position += 5; // Adjust speed (higher value means faster)
    mouse.style.left = position + "px";

    if (position < screenWidth) {
      requestAnimationFrame(moveMouse); // Continue moving
    } else {
      mouse.style.display = "none"; // Hide the mouse when it reaches the end
    }
  }

  moveMouse(); // Start the mouse movement
};

