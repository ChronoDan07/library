let index = 3;
let bookColors = [];
let book_index = 1;

// Add Book Function

function createBook(title, author, pages, read){
const book = document.createElement("div");
book.setAttribute("id", "book");
book.setAttribute("data-index",book_index); 
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");


svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg.setAttribute("id", `Capa_${index - 1}`);
svg.setAttribute("data-name", `Capa ${index - 1}`);
svg.setAttribute("viewBox", "0 0 1283.39 1773.16");

// Get Random Book Color

function getRandomColor(){
  var color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
  return color
}

const colors = getRandomColor();
bookColors.push(colors)
const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
style.textContent = `.clss-${index} { fill: #fffbdc; } .cls-${index} { fill: ${bookColors[index-3]}; }`;


defs.appendChild(style);


svg.appendChild(defs);


const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
path1.setAttribute("class", `clss-${index}`);
path1.setAttribute("d", "m1273.08,1750.69h-10.76v-195.15c6.62-6.47,10.76-15.47,10.76-25.4V35.62c0-19.56-16-35.56-35.56-35.56H150.62S27.49-5.82,0,100.57v1538.05c0,141.65,86.07,134.48,86.07,134.48h1187.01c5.8-.96,10.23-3.02,10.31-9.41.16-12.1-10.31-13-10.31-13Z");

const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
path2.setAttribute("class", `cls-${index}`);
path2.setAttribute("d", "m1273.08,1750.69h-10.76v-21.81H43.07c-23.28-31.62-20.61-86.28-20.61-86.28,2.39-90.25,128.15-76.89,128.15-76.89h1086.9c9.63,0,18.39-3.89,24.8-10.16,6.62-6.47,10.76-15.47,10.76-25.4V35.62c0-19.56-16-35.56-35.56-35.56H150.62S27.49-5.82,0,100.57v1538.05c0,141.65,86.07,134.48,86.07,134.48h1187.01c5.8-.96,10.23-3.02,10.31-9.41.16-12.1-10.31-13-10.31-13Z");



svg.appendChild(path1);
svg.appendChild(path2);

// Add respective elements to the books

document.getElementById("bookshelf").appendChild(book);
const newbook = document.getElementById("bookshelf").lastChild;
newbook.appendChild(svg);

// Title

const titleTag = document.createElement("div");
titleTag.setAttribute("id", "title-tag");
newbook.appendChild(titleTag);

const text1 = document.createElement("div");
text1.setAttribute("id", "text1");

text1.textContent = title;

titleTag.appendChild(text1);

// Author

const authorTag = document.createElement("div");
authorTag.setAttribute("id", "author-tag");
newbook.appendChild(authorTag);

const text2 = document.createElement("div");
text2.setAttribute("id", "text2");

text2.textContent = author;

authorTag.appendChild(text2);

// Pages
const pagesTag = document.createElement("div");
pagesTag.setAttribute("id", "pages-tag");
newbook.appendChild(pagesTag);

const text3 = document.createElement("div");
text3.setAttribute("id", "text3");

text3.textContent = pages;

pagesTag.appendChild(text3);

const text4 = document.createElement("div");
text4.setAttribute("id", "text4");
text4.textContent = "pages";
pagesTag.appendChild(text4);

//Check Read

const check1 = document.createElement("i");
check1.setAttribute("class", "fa-regular");
check1.setAttribute("id", "read")
check1.classList.add("fa-circle-check");
check1.classList.add("toggleButton");
newbook.appendChild(check1);

// Check Not Read

const check2 = document.createElement("i");
check2.setAttribute("class", "fa-regular");
check2.setAttribute("id", "notread")
check2.classList.add("fa-circle-xmark");
check2.classList.add("invisible");
check2.classList.add("toggleButton");
newbook.appendChild(check2);

if (read == "Not Read"){
    check2.classList.remove("invisible");
    check1.classList.add("invisible");
};

// Remove Book Button

const closeTag = document.createElement("div");
closeTag.setAttribute("id","close-tag");
newbook.appendChild(closeTag);

const close = document.createElement("i");
close.setAttribute("class", "fa-solid");
close.classList.add("fa-xmark");
close.classList.add("close");

closeTag.appendChild(close);

index++;
book_index++;
}

//Form handling

const myLibrary = [];
const addButton = document.getElementById("add-button");
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



addButton.addEventListener("click", () => {
  dialog.classList.remove("invisible");
  title.value = "";
  author.value = "";
  pages.value = "";
  dialog.showModal();
});

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1178,"Not Read");

//Dialog elements
const form = document.getElementById("form");
const dialog = document.getElementById("dialog");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const stateCheckbox = document.getElementById("state");

myLibrary.push(book1);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const state = stateCheckbox.checked ? "Read" : "Not Read";
  if (title.value && author.value && pages.value) {
      myLibrary.push(new Book(title.value, author.value, pages.value, state));
      createBook(title.value, author.value, pages.value, state);

  }  
      dialog.classList.add("invisible");
      dialog.close();
      console.log(myLibrary);
      form.reset();

});

// Dialog Close

const closeDialog = document.getElementById("close-dialog");

closeDialog.addEventListener("click", () => {
    dialog.classList.add("invisible");
    dialog.close();
    form.reset();
});



// Toggle Read + Remove Book

document.getElementById('bookshelf').addEventListener('click', function(event) {
    if (event.target.classList.contains('toggleButton')) {
        const book = event.target.closest('#book');
        const read = book.querySelector("#read");
        const notRead = book.querySelector("#notread");
        const bookIndex = book.getAttribute('data-index');

        // Toggle visibility

        read.classList.toggle("invisible");
        notRead.classList.toggle("invisible");

        // Update read

        if (read.classList.contains("invisible")) {
            myLibrary[bookIndex]["read"] = "Not Read";
        } else {
            myLibrary[bookIndex]["read"] = "Read";
        }
    }
    const book = event.target.closest('#book');
    
    // Remove Book

    if (book) {
        if (event.target.classList.contains('close')) {
        const bookElement = event.target.closest('#book');
        const ind = bookElement.getAttribute('data-index');
        
        myLibrary.splice(ind, 1);
        
        bookElement.remove();
        
        book_index--;
        
        const remainingBooks = document.querySelectorAll('#book');
        remainingBooks.forEach((book, idx) => {
            book.setAttribute('data-index', idx);
        });
        }
    }
});



