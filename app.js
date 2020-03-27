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

// getters and setters
class Car {
   constructor(model, seats) {
      this.modelTitle = model + '   ';
      this.seats = seats;
   }

   get model() {
      const modelName = this.modelTitle.trim();
      return modelName;
   }

   setSeats(value) {
      this.seats = value;
   }
}

const newCar = new Car('Ford', 5);
console.log(newCar.model);
newCar.setSeats(7);
console.log(newCar.seats);

// inheritance
class Post {
   constructor(title, date, creator) {
      this.title = title;
      this.date = date;
      this.creator = creator;
   }
}

class VideoPost extends Post {
   constructor(title, date, creator, vidUrl) {
      super(title, date, creator);
      this.vidUrl = vidUrl;
   }
}

class ImagePost extends Post {
   constructor(title, date, creator, imgUrl) {
      super(title, date, creator);
      this.imgUrl = imgUrl;
   }
}

const newVidPost = new VideoPost('vid1', 2020, 'Adam', 'adam.mp4');
const newImgPost = new ImagePost('img1', 2020, 'Owen', 'Owen.png');

console.log(newVidPost.title);
console.log(newVidPost.vidUrl);
console.log(newImgPost.title);
console.log(newImgPost.imgUrl);

// different method definitions
class Person {
   name = 'Adam';
   age = 27;
   occupation = 'Developer'

   sayHi() {
      console.log('hi!!!');
   }

   logAge = function() {
      console.log(this.age);
   }

   logOccupation = () => {
      console.log(this.occupation);
   }
}

const adam = new Person();
adam.sayHi();
adam.logAge();
adam.logOccupation();

// private properties
class Property {
   #type = 'house';
   #bedrooms = 3;
   price = 280;

   logProperty() {
      console.log(this.#type);
      console.log(this.#bedrooms);
   }
}

const newProperty = new Property();

newProperty.logProperty();

// instanceof
console.log(adam instanceof Property);
console.log(adam instanceof Person);