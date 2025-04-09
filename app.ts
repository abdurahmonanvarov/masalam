// class Animal {
//   name: string;
//   color: string;
//   weight: number;
//   constructor(name: string, color: string, weight: number) {
//     this.name = name;
//     this.color = color;
//     this.weight = weight;
//   }
//   getInfo() {
//     return `Animal name ${this.name}\n Color ${this.color}\n Vazni ${this.weight}`;
//   }
//   getName() {
//     return this.name;
//   }
// }
// class Dog extends Animal {
//   constructor(name: string, color: string, weight: number) {
//     super(name, color, weight);
//   }
// }
// class Cat extends Animal {
//   constructor(name: string, color: string, weight: number) {
//     super(name, color, weight);
//   }
// }
// class Cow extends Animal {
//   constructor(name: string, color: string, weight: number) {
//     super(name, color, weight);
//   }
// }

// class Fil extends Animal {
//   constructor(name: string, color: string, weight: number) {
//     super(name, color, weight);
//   }
// }
// const dog = new Dog("Malla", "Black", 15);
// console.log(dog);
// const cat = new Cat("Sariq", "Yellow", 5);
// console.log(cat.getInfo());
// const cow = new Cow("Qora", "Qora", 100);
// console.log(cow.getName());
// const fil = new Fil("Malla", "Black", 15);
// console.log(fil);

//vazifa KUtubxona

// 1. Abstraksiya: abstract class
abstract class LibraryItem {
  private id: number;
  private isBorrowed: boolean;
  title: string;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.isBorrowed = false;
  }

  borrow() {
    if (this.isBorrowed) {
      throw new Error(`'${this.title}' sizda oldin qarzga olingan.`);
    }
    this.isBorrowed = true;
    console.log(`'${this.title}' muvaffaqiyatli qarzga qolga kiritildi.`);
  }

  returnItem() {
    if (!this.isBorrowed) {
      throw new Error(`'${this.title}' qaytarib bolingan qaytarilgan.`);
    }
    this.isBorrowed = false;
    console.log(`'${this.title}' muvaffaqiyatli qaytarildi.`);
  }

  isBorrowedStatus(): boolean {
    return this.isBorrowed;
  }

  abstract getDetails(): string;
}

//Book Magazine DVD da ishanishi

class Book extends LibraryItem {
  author: string;
  pages: number;

  constructor(id: number, title: string, author: string, pages: number) {
    super(id, title);
    this.author = author;
    this.pages = pages;
  }

  getDetails(): string {
    return `[Kitob] Sarlavha: ${this.title}, Muallif: ${this.author}, Betlar: ${this.pages}`;
  }
}

class Magazine extends LibraryItem {
  month: string;
  year: number;

  constructor(id: number, title: string, month: string, year: number) {
    super(id, title);
    this.month = month;
    this.year = year;
  }

  getDetails(): string {
    return `[Jurnal] Sarlavha: ${this.title}, Oy: ${this.month}, Yil: ${this.year}`;
  }
}

class DVD extends LibraryItem {
  duration: number;
  genre: string;

  constructor(id: number, title: string, duration: number, genre: string) {
    super(id, title);
    this.duration = duration;
    this.genre = genre;
  }

  getDetails(): string {
    return `[DVD] Sarlavha: ${this.title}, Davomiylik: ${this.duration} daqiqa, Janr: ${this.genre}`;
  }
}

// hammasiga  malumot kiritib test qilish
const libraryItems: LibraryItem[] = [
  new Book(1, "Sherlok Xolms", "A.K. Doyl", 250),
  new Book(2, "Alkimyogar", "P. Koelyo", 198),
  new Book(3, "1984", "J. Oruell", 328),
  new Magazine(4, "National Geographic", "Mart", 2024),
  new Magazine(5, "Forbes", "Yanvar", 2025),
  new Magazine(6, "Nature", "Aprel", 2023),
  new DVD(7, "Interstellar", 169, "Fanstastika"),
  new DVD(8, "Inception", 148, "Thriller"),
  new DVD(9, "Titanic", 195, "Romantik"),
  new Book(10, "Aql va G'urur", "Jeyn Osten", 300),
  new Magazine(11, "O‘zbekiston Adabiyoti", "Fevral", 2024),
  new DVD(12, "Avatar", 162, "Fantastika"),
  new Book(13, "Hayot yo‘li", "A.Qodiriy", 210),
];

// ularni conlola chiqarish
console.log(libraryItems[0].borrow());
console.log(libraryItems[3].borrow());
console.log(libraryItems[6].borrow());

console.log(libraryItems[0].returnItem());
console.log(libraryItems[3].returnItem());
console.log(libraryItems[6].returnItem());

console.log(libraryItems[0].borrow());
console.log(libraryItems[3].borrow());

//Kitoblar kutubxona tizmi
console.log(
  libraryItems.forEach((item) => {
    console.log(
      `${item.title}: ${item.isBorrowedStatus() ? "qarzga olingan" : "mavjud"}`
    );
  })
);

console.log(
  libraryItems.forEach((item) => {
    console.log(item.getDetails());
  })
);
