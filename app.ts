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

  borrow(): void {
    if (this.isBorrowed) {
      throw new Error(`'${this.title}' allaqachon qarzga olingan.`);
    }
    this.isBorrowed = true;
    console.log(`'${this.title}' muvaffaqiyatli qarzga olindi.`);
  }

  returnItem(): void {
    if (!this.isBorrowed) {
      throw new Error(`'${this.title}' allaqachon qaytarilgan.`);
    }
    this.isBorrowed = false;
    console.log(`'${this.title}' muvaffaqiyatli qaytarildi.`);
  }

  isBorrowedStatus(): boolean {
    return this.isBorrowed;
  }

  abstract getDetails(): string;
}

// 2. Meros olish: Book, Magazine, DVD

class Book extends LibraryItem {
  private author: string;
  private pages: number;

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
  private month: string;
  private year: number;

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
  private duration: number;
  private genre: string;

  constructor(id: number, title: string, duration: number, genre: string) {
    super(id, title);
    this.duration = duration;
    this.genre = genre;
  }

  getDetails(): string {
    return `[DVD] Sarlavha: ${this.title}, Davomiylik: ${this.duration} daqiqa, Janr: ${this.genre}`;
  }
}

// 3. Test qilish
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

// 4. Qarzga olish, qaytarish
console.log("\n--- Qarzga olish ---");
libraryItems[0].borrow();
libraryItems[3].borrow();
libraryItems[6].borrow();

console.log("\n--- Qaytarish ---");
libraryItems[0].returnItem();
libraryItems[3].returnItem();
libraryItems[6].returnItem();

console.log("\n--- Yana qarzga olish ---");
libraryItems[0].borrow();
libraryItems[3].borrow();

console.log("\n--- Qarz holatini tekshirish ---");
libraryItems.forEach((item) => {
  console.log(
    `${item.title}: ${item.isBorrowedStatus() ? "qarzga olingan" : "mavjud"}`
  );
});

console.log("\n--- Elementlar haqida ma'lumotlar ---");
libraryItems.forEach((item) => {
  console.log(item.getDetails());
});
