function addNote() {
    const noteInput = document.getElementById("noteInput");
    const notesBoard = document.getElementById("notesBoard");
  
    const noteText = noteInput.value;
    if (noteText) {
      const noteElement = document.createElement("div");
      noteElement.className = "note";
      noteElement.textContent = noteText;
      notesBoard.appendChild(noteElement);
      noteInput.value = "";
    }
  }
  