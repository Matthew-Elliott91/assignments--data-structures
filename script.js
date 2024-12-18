"use strict";

// Destructuring Arrays
const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
];

const ratingStars = [63405, 1808];

const [firstBook, secondBook] = books;

const [, , thirdBook] = books;

// const [[, rating], [, ratingsCount]] = ratings;

const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

// Destructuring Objects

// 2.1 Destructure the first book object from the books array into variables called title, author and ISBN.

const { title, author, ISBN } = books[0];

// 2.2 Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.

const { keywords: tags } = books[0];

// 2.3 The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.

const { language, programmingLanguage = "unknown" } = books[6];

// 2.4 Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.

let bookTitle = "unknown";
let bookAuthor = "unknown";

({ title: bookTitle, author: bookAuthor } = books[0]);

// 2.5 Each book object has a deeply nested rating property. Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.

// Please do most of the work on the left side of the assignment operator: const ... = books[0];

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];

// 2.6 Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".

// If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.

function printBookInfo({ title, author, year = "year unknown" }) {
  console.log(`${title} by ${author}, ${year}`);
}

printBookInfo({
  title: "Algorithms",
  author: "Robert Sedgewick",
  year: "2011",
});

// 3.1 Each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author.
// Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays).

const bookAuthors = [...books[0].author, ...books[1].author];

// 3.2 Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.

const spellWord = function (str) {
  console.log(...str);
};

spellWord("JavaScript");

// 4.1 Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).

const [mainKeyword, ...rest] = books[0].keywords;

// 4.2 Destructure the second book from the books array into a variable called bookPublisher. The bookPublisher variable should be assigned with the value of the publisher property of the book object. Assign the rest of the properties to the restOfTheBook variable.

const { publisher: bookPublisher, ...restOfTheBook } = books[1];

//4.3 Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".

const printBookAuthorsCount = function (title, ...authors) {
  console.log(`The book ${title} has ${authors.length} authors.`);
};

printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne");

//5.1

// Write a function called hasExamplesInJava that takes a book object from the books array as an argument. This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all.

// Use short-circuiting.

const hasExamplesInJava = function (book) {
  return book.programmingLanguage === "Java" || "no data availible";
};

//5.2 Some of the book objects have the onlineContent property, which is either true or false. Loop over the books array, and for the books that provide online content, log to the console a string in this format: "${title}" provides online content. Use short-circuiting.

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`"${books[i].title}" provides online content`);
}
