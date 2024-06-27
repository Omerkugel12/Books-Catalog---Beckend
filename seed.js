// seed.js
// This script seeds the database with sample data.
// This is for development purposes only and should not be used in production.

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Book = require("./models/book.model");

dotenv.config(); // Load environment variables

const books = [
  {
    title: "To Kill a Mockingbird",
    authors: ["Harper Lee"],
    genres: ["Classic", "Fiction"],
    description:
      "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.",
  },
  {
    title: "1984",
    authors: ["George Orwell"],
    genres: ["Dystopian", "Science Fiction"],
    description:
      "A dystopian novel by English writer George Orwell, and a scathing critique of totalitarianism.",
  },
  {
    title: "Pride and Prejudice",
    authors: ["Jane Austen"],
    genres: ["Romance", "Classic"],
    description: "A novel of manners by Jane Austen, first published in 1813.",
  },
  {
    title: "The Great Gatsby",
    authors: ["F. Scott Fitzgerald"],
    genres: ["Fiction", "Classic"],
    description:
      "A novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island.",
  },
  {
    title: "To the Lighthouse",
    authors: ["Virginia Woolf"],
    genres: ["Modernist", "Fiction"],
    description:
      "A 1927 novel by Virginia Woolf. The novel centres on the Ramsay family and their visits to the Isle of Skye.",
  },
  {
    title: "Moby-Dick",
    authors: ["Herman Melville"],
    genres: ["Adventure", "Classic"],
    description:
      "A novel by American writer Herman Melville, published in 1851 during the period of the American Renaissance.",
  },
  {
    title: "The Catcher in the Rye",
    authors: ["J.D. Salinger"],
    genres: ["Fiction", "Coming-of-age"],
    description:
      "A novel by J. D. Salinger, published in 1951. It is known for its themes of teenage angst and alienation.",
  },
  {
    title: "Brave New World",
    authors: ["Aldous Huxley"],
    genres: ["Dystopian", "Science Fiction"],
    description:
      "A novel by Aldous Huxley, published in 1932. It explores a futuristic society where humans are engineered.",
  },
  {
    title: "The Lord of the Rings",
    authors: ["J.R.R. Tolkien"],
    genres: ["Fantasy", "Adventure"],
    description:
      "An epic high-fantasy novel by J.R.R. Tolkien. It follows the quest to destroy the One Ring.",
  },
  {
    title: "War and Peace",
    authors: ["Leo Tolstoy"],
    genres: ["Historical Fiction", "Classic"],
    description:
      "A novel by the Russian author Leo Tolstoy, first published serially, then published as a whole in 1869.",
  },
  {
    title: "Jane Eyre",
    authors: ["Charlotte Brontë"],
    genres: ["Gothic", "Romance"],
    description:
      "An 1847 novel by English writer Charlotte Brontë. The novel follows the experiences of its eponymous heroine.",
  },
  {
    title: "The Hobbit",
    authors: ["J.R.R. Tolkien"],
    genres: ["Fantasy", "Adventure"],
    description:
      "A children's fantasy novel by J.R.R. Tolkien, published in 1937. It follows the quest of Bilbo Baggins.",
  },
  {
    title: "Crime and Punishment",
    authors: ["Fyodor Dostoevsky"],
    genres: ["Philosophical Fiction", "Psychological Fiction"],
    description:
      "A novel by the Russian author Fyodor Dostoevsky. It explores morality, ethics, and the consequences of crime.",
  },
  {
    title: "The Odyssey",
    authors: ["Homer"],
    genres: ["Epic Poetry", "Adventure"],
    description:
      "An ancient Greek epic poem attributed to Homer. It is one of the oldest works of literature.",
  },
  {
    title: "Frankenstein",
    authors: ["Mary Shelley"],
    genres: ["Gothic", "Science Fiction"],
    description:
      "A novel by English author Mary Shelley. It tells the story of Victor Frankenstein, a young scientist who creates a sapient creature.",
  },
  {
    title: "Don Quixote",
    authors: ["Miguel de Cervantes"],
    genres: ["Satire", "Adventure"],
    description:
      "A Spanish novel by Miguel de Cervantes. It is considered one of the greatest works of literature.",
  },
  {
    title: "The Picture of Dorian Gray",
    authors: ["Oscar Wilde"],
    genres: ["Gothic", "Philosophical Fiction"],
    description:
      "A novel by Oscar Wilde, published in 1890. It tells the story of a young man who makes a Faustian bargain.",
  },
  {
    title: "One Hundred Years of Solitude",
    authors: ["Gabriel García Márquez"],
    genres: ["Magical Realism", "Fiction"],
    description:
      "A novel by Colombian author Gabriel García Márquez, published in 1967. It tells the multi-generational story of the Buendía family.",
  },
  {
    title: "The Brothers Karamazov",
    authors: ["Fyodor Dostoevsky"],
    genres: ["Philosophical Fiction", "Psychological Fiction"],
    description:
      "A novel by the Russian author Fyodor Dostoevsky, published in 1880. It explores ethical dilemmas and the nature of faith.",
  },
  {
    title: "Anna Karenina",
    authors: ["Leo Tolstoy"],
    genres: ["Realist Fiction", "Romance"],
    description:
      "A novel by the Russian author Leo Tolstoy, published in 1878. It explores themes of love, betrayal, faith, family, and life.",
  },
  {
    title: "Slaughterhouse-Five",
    authors: ["Kurt Vonnegut"],
    genres: ["Science Fiction", "Satire"],
    description:
      "A novel by Kurt Vonnegut, published in 1969. It is known for its anti-war themes and use of time travel.",
  },
  {
    title: "The Bell Jar",
    authors: ["Sylvia Plath"],
    genres: ["Semi-autobiographical", "Fiction"],
    description:
      "A novel by Sylvia Plath, published under the pseudonym Victoria Lucas in 1963. It addresses themes such as mental illness and identity.",
  },
  {
    title: "The Road",
    authors: ["Cormac McCarthy"],
    genres: ["Post-apocalyptic", "Fiction"],
    description:
      "A novel by Cormac McCarthy, published in 2006. It follows a father and son journeying through a post-apocalyptic landscape.",
  },
  {
    title: "The Count of Monte Cristo",
    authors: ["Alexandre Dumas"],
    genres: ["Adventure", "Historical Fiction"],
    description:
      "A novel by Alexandre Dumas, published in 1844. It is one of the author's most popular works.",
  },
  {
    title: "Middlemarch",
    authors: ["George Eliot"],
    genres: ["Realist Fiction", "Historical Fiction"],
    description:
      "A novel by George Eliot, published in 1871. It is set in the fictitious Midlands town of Middlemarch during the early 1830s.",
  },
  {
    title: "The Handmaid's Tale",
    authors: ["Margaret Atwood"],
    genres: ["Dystopian", "Feminist Literature"],
    description:
      "A novel by Margaret Atwood, published in 1985. It explores themes of misogyny and the oppression of women.",
  },
  {
    title: "Wuthering Heights",
    authors: ["Emily Brontë"],
    genres: ["Gothic", "Romance"],
    description:
      "A novel by Emily Brontë, published in 1847 under the pseudonym Ellis Bell. It tells the tale of the passionate, obsessive love between Heathcliff and Catherine.",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    authors: ["Douglas Adams"],
    genres: ["Science Fiction", "Comedy"],
    description:
      "A comic science fiction series by Douglas Adams, originally published as a radio series in 1978. It follows the adventures of Arthur Dent.",
  },
  {
    title: "The Grapes of Wrath",
    authors: ["John Steinbeck"],
    genres: ["Social Realism", "Historical Fiction"],
    description:
      "A novel by John Steinbeck, published in 1939. It tells the story of the Joads, an impoverished family of tenant farmers displaced from their Oklahoma home.",
  },
  {
    title: "A Clockwork Orange",
    authors: ["Anthony Burgess"],
    genres: ["Dystopian", "Satire"],
    description:
      "A novel by Anthony Burgess, published in 1962. It explores themes of free will, psychological conditioning, and the morality of violence.",
  },
];

async function seedDB() {
  await connectDB(); // Connect to the database
  try {
    await Book.deleteMany({});
    await Book.insertMany(books);
    console.log("Database seeded");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close(); // Close the database connection
  }
}

seedDB();
