export enum Genre {
    Fiction = "Fiction",
    NonFiction = "Non-Fiction",
    Science = "Science",
    History = "History",
  }
export interface Book {
    id: number;
    title: string;
    author: string;
    genre: Genre;
    publishedYear: number;
    availability: boolean;
  }
  export function isAvailable(book: Book): boolean {
    return book.availability;
  }
  