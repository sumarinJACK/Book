import { Library } from './library';
import { Genre } from './book';

const library = new Library();

library.addBook({
  id: 1,
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  genre: Genre.Fiction,
  publishedYear: 1925,
  availability: true
});

library.listBooks();

library.updateBook(1, { title: "The Great Gatsby (Updated)" });

library.searchBooks('genre', Genre.Fiction);

library.deleteBook(1);
