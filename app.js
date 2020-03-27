class Product {
  title = 'DEFAULT';
  description;
  price;
}

const newProduct = new Product();
console.log(newProduct);

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
