"use strict";

// Destructuring Arrays
const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
];

const ratingStars = [63405, 1808];

const [firstBook, secondBook] = books;

const [, , thirdBook] = books;

const [[, rating], [, ratingsCount]] = ratings;

const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

// Destructuring Objects
