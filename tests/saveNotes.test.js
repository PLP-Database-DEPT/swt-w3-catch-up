const Script = require("../script");

describe("saveNote()", () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <input id="note-title"/>
    <textarea id="note-content"></textarea>
    <div id="notes"></div>`;

    Script.notes = []; 
    global.alert = jest.fn();
  });

  // test case 1
  test("Title or content is empty", () =>{
    Script.saveNote();
    expect(global.alert).toHaveBeenCalledWith("Please fill in both fields.")
  });

  // test case 2
  test("Add a note", () =>{
    document.getElementById("note-title").value = "Submit Assignment";
    document.getElementById("note-content").value = "Everyone should be in week 3 by the 20th of October! Late submission not allowed";

    Script.saveNote(); 

    expect(Script.notes.length).toBe(1); 
    expect(Script.notes[0].title).toBe("Submit Assignment")
    expect(Script.notes[0].content).toBe("Everyone should be in week 3 by the 20th of October! Late submission not allowed")
  });
});


