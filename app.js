// class
class Product {
  title = 'DEFAULT';
  description;
  price;
}

const newProduct = new Product();
console.log(newProduct);

// constructor method
class Book {
  title;
  synopsis;
  author;
  releaseDate;

  constructor(title, synopsis, author, releaseDate) {
    this.title = title;
    this.synopsis = synopsis;
    this.author = author;
    this.releaseDate = releaseDate;
  }
}

const newBook = new Book('Mistborn', 'Allomancy', 'Brandon Sanderson', 2011);
console.log(newBook);

// this
class song {
   constructor(title, artist, releaseDate) {
      this.title = title;
      this.artist = artist;
      this.releaseDate = releaseDate;
   }

   logTitle() {
      console.log(this.title);
   }

   logArtist() {
      console.log(this.artist);
   }

   document.querySelector('.log-title').addEventListener('click', this.logTitle());
   document.querySelector('.log-artist').addEventListener('click', this.logArtist.bind(this));

}

const newSong = new song('sunflower', 'Post Malone', 2019);
newSong.logTitle();
newSong.logArtist();

// static methods and fields

class App {
   static init() {
      console.log('initializing app...');
   }

   static name = 'new app';
}

App.init();
console.log(App.name);