const form = document.querySelector('#form');
const dairyNote = document.querySelector('#dairyNote');
const container = document.querySelector('.container');
let dairyNotes = [];
if(localStorage.dairyNotes){
    dairyNotes = JSON.parse(localStorage.dairyNotes)
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    const nowDate = new Date();
    const newDate = nowDate.toLocaleString("tr")

    dairyNotes.push({
        note: dairyNote.value,
        crated_at: newDate
    });
    dairyNote.value = "";
    localStorage.dairyNotes = JSON.stringify(dairyNotes)
    getDairyNotes();
})


function getDairyNotes(){
    container.innerHTML = "";
    for (const dairyNote of dairyNotes.reverse()) {
        container.innerHTML += `<div class="box"${dairyNote.note} - ${dairyNote.crated_at}</div>`
    }
}

getDairyNotes();