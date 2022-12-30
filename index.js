let a = [2, 5, 8, 2, 5, 7, 2];

const { sort } = require('fast-sort');

const ascSorted = sort(a).desc();

console.log(ascSorted);