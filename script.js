const Script = {

    notes: [],

    saveNote() {
      const title = document.getElementById('note-title').value;
      const content = document.getElementById('note-content').value;
      if (!title || !content) return alert("Please fill in both fields.");
      this.notes.push({ id: Date.now(), title, content }); 
      this.renderNotes();
    },

    editNote(id) {
      const note = this.notes.find(n => n.id === id);
      if (!note) return;
      document.getElementById('note-title').value = note.title;
      document.getElementById('note-content').value = note.content;
    },

    deleteNote(id) {
      notes = this.notes.filter(n => n.id !== id);
      this.renderNotes();
    },

    
    renderNotes() {
      const container = document.getElementById('notes');
      container.innerHTML = this.notes.map(n => `<div>&{n.title}</div>`).join("");
    
    }
};

module.exports = Script; 
