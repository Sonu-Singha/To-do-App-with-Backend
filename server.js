// Code starts from Here




// Importing the required modules

import express from 'express'; //express module
import path from 'path'; //path module
import { fileURLToPath } from 'url'; //fileURLToPath module




// Setting the filename and directory name

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);





// Creating the express app

const app = express();
const port = 3000;
app.use(express.static(path.join(dirname, 'public')));






// Setting the view engine

app.set('view engine', 'ejs');





// Creating Routes

app.get('/', (req, res) => {
    res.render('index');
});

app.get("/all-notes", function (req, res) {
    res.render("all-notes");

})

app.post("/create-note", function (req, res) {
    res.render("create-note")
    
})






// Starting the server

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
