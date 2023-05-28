function updateTitle() {
  const titleInput = document.getElementById('title-input');
  const bookTitle = document.getElementById('book-title');
  bookTitle.textContent = titleInput.value
  showBook();
}


function showBook(){
  var book = document.getElementById("book-img");
  const titleInput = document.getElementById('title-input');

  if (titleInput.value === "Song Of Achilles") {
    book.classList.add("fade-in");
    document.getElementById("img").src="img/song_of_achilles.jpg";
  } else if (titleInput.value === "The Great Gatsby") {
    book.classList.add("fade-in");
    document.getElementById("img").src="img/great_gatsby.jpg";
  } else{
    book.classList.remove("fade-in");
  }


}
