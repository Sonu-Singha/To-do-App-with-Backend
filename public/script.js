// Code starts from here



// Getting HTML Elems

let Note_Cards = document.body.querySelectorAll(".note-card");




// Adding Event Listener

Note_Cards.forEach(cards => {
    cards.addEventListener("click", function () {
        const noteID = this.dataset.noteId
        window.location.href = `/view-note/${noteID}`
        console.log("Done")
    })
});