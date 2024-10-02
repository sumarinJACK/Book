import { Book, Genre } from './book';

export class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
    console.log(`Added book: ${book.title}`);
  }

  listBooks(): void {
    console.log("Listing all books:");
    this.books.forEach(book => {
      console.log(`${book.id}: ${book.title} by ${book.author}`);
    });
  }

  updateBook(id: number, updatedData: Partial<Book>): void {
    const book = this.books.find(b => b.id === id);
    if (book) {
      Object.assign(book, updatedData);
      console.log(`Updated book ID ${id}: ${book.title}`);
    } else {
      console.log(`Book with ID ${id} not found.`);
    }
  }

  deleteBook(id: number): void {
    this.books = this.books.filter(b => b.id !== id);
    console.log(`Deleted book with ID ${id}`);
  }

  searchBooks(key: keyof Book, value: any): void {
    const results = this.books.filter(book => book[key] === value);
    console.log(`Search results for ${key} = ${value}:`);
    results.forEach(book => {
      console.log(`${book.id}: ${book.title} by ${book.author}`);
    });
  }
}
