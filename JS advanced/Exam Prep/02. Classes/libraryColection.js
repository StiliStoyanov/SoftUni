class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }
  addBook(bookName, bookAuthor) {
    if (this.capacity < 1) {
      throw new Error("Not enough space in the collection.");
    } else {
      const book = {
        bookName,
        bookAuthor,
        payed: false,
      };
      this.books.push(book);
      this.capacity -= 1;
      return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
  }
  payBook(bookName) {
    let foundBookIndex = this.books.findIndex((b) => b.bookName == bookName);
    if (foundBookIndex == -1) {
      throw new Error(`${bookName} is not in the collection.`);
    } else {
      if (this.books[foundBookIndex].payed == true) {
        throw new Error(`${bookName} has already been paid.`);
      } else {
        this.books[foundBookIndex].payed = true;
        return `${bookName} has been successfully paid.`;
      }
    }
  }
  removeBook(bookName) {
    let foundBookIndex = this.books.findIndex((b) => b.bookName == bookName);
    if (foundBookIndex == -1) {
      throw new Error("The book, you're looking for, is not found.");
    } else {
      if (this.books[foundBookIndex].payed == false) {
        throw new Error(
          `${bookName} need to be paid before removing from the collection.`
        );
      } else {
        this.books.splice(foundBookIndex, 1);
        return `${bookName} remove from the collection.`;
      }
    }
  }
  getStatistics(bookAuthor) {
    if (bookAuthor == undefined) {
      let resultArray = [
        `The book collection has ${this.capacity} empty spots left.`,
      ];
      this.books = this.books.sort((a, b) =>
        a.bookName.localeCompare(b.bookName)
      );
      for (const book of this.books) {
        if (book.payed == true) {
          resultArray.push(
            `${book.bookName} == ${book.bookAuthor} - Has Paid.`
          );
        } else {
          resultArray.push(
            `${book.bookName} == ${book.bookAuthor} - Not Paid.`
          );
        }
      }
      return resultArray.join("\n");
    } else {
      let foundBookIndex = this.books.findIndex(
        (b) => b.bookAuthor == bookAuthor
      );
      if (foundBookIndex == -1) {
        throw new Error(`${bookAuthor} is not in the collection.`);
      } else {
        if (this.books[foundBookIndex].payed == true) {
          return `${this.books[foundBookIndex].bookName} == ${bookAuthor} - Has Paid.`;
        } else {
          return `${this.books[foundBookIndex].bookName} == ${bookAuthor} - Not Paid.`;
        }
      }
    }
  }
}
const library = new LibraryCollection(5);
library.addBook("Don Quixote", "Miguel de Cervantes");
library.payBook("Don Quixote");
library.addBook("In Search of Lost Time", "Marcel Proust");
library.addBook("Ulysses", "James Joyce");
console.log(library.getStatistics());
