// Code starts from Here




// Importing the required modules

import express from 'express'; //express module
import path from 'path'; //path module
import { fileURLToPath } from 'url'; //fileURLToPath module








// Importing DB

import noteSchema from "./Notes-Models/note.model.js";
import { console } from 'inspector';








// Setting the filename and directory name

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);





// Creating the express app

const app = express();
const port = 3000;
app.use(express.static(path.join(dirname, 'public')));
app.use(express.urlencoded({ extended: true }));






// Setting the view engine

app.set('view engine', 'ejs');





// ------------------------------------------------------Creating GET Routes

// Home Page Route

app.get('/', async (req, res) => {
    const fewNotes = await noteSchema.find();
    res.render('index', { fewNotes });
});





// All Notes Route

app.get("/all-notes", async function (req, res) {
    const fewNotes = await noteSchema.find();
    res.render("all-notes", { fewNotes });

})








// -----------------------------------------------------Creating POST routes


// Create Note route

app.post("/create-note-page", async function (req, res) {
    const { title, description } = req.body;
    const noteTitle = await noteSchema.create({
        title: title,
        description: description
    })

    let currentID = noteTitle._id;
    res.redirect(`/create-note/${currentID}`)
})





// Create Note route

app.get(`/create-note/:id`, async function (req, res) {
    let note = await noteSchema.findById(req.params.id)
    res.render("create-note", { note })
})

app.post(`/create-note/:id`, async function (req, res) {
    const { title, description } = req.body;
    await noteSchema.findByIdAndUpdate(req.params.id,
        {
            title: title,
            description: description
        }
    )

    res.redirect("/")

})



// View Note Route

app.get("/view-note/:id", async function (req, res) {
    const note = await noteSchema.findById(req.params.id)
    res.render("view-note", { note })
})











// Note Actions Route

// Edit Note

app.get("/create-note/:id", async function (req, res) {
    let note = await noteSchema.findById(req.params.id)

    res.render(`create-note`, { note });

})




// Delete Note

app.post("/delete-note/:id", async function (req, res) {

    await noteSchema.findByIdAndDelete(req.params.id);
    res.redirect("/all-notes")


})










// Starting the server

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
