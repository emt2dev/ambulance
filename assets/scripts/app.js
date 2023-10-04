function handleContextMenu(e) {
  e.preventDefault();
  alert("Sorry, can't right-click.");
}

// Add the event listener to the entire document
document.addEventListener("contextmenu", handleContextMenu);