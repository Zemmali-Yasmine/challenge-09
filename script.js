//01: Average of Even Numbers
let myNums5= [1, 9, 3, 4, 5];
const average = (arr) =>{ 
    let even= arr.filter (el=> el % 2 == 0);
    let sum= even.reduce ((accumulator, el) => accumulator + el, 0);
console.log(sum);
     return sum / even.length;
    }
    console.log(average(myNums5)); //output: 4 4




//02: Longest Word
let array=["word", "monthly", "am", "amlongestword"]
let max= array[0]
for(let i=0;i<array.length;i++){
    if(array[i].length>max.length){
       max=array[i]
    }
}
console.log(max) //output: amlongestword



//03: Average Number of Pages 
let books = [
    { title: "Book A", author: "Author A", pages: 200 },
    { title: "Book B", author: "Author B", pages: 300 },
    { title: "Book C", author: "Author C", pages: 250 }
];

const averagePages = (arr) => {
    let totalPages = arr.map(book => book.pages).reduce((acc, pages) => acc + pages, 0);
    return totalPages / arr.length;
};

console.log(averagePages(books)); // Output: 250


//04: Frequency of Strings
let strings = ["hello", "world", "hello", "test", "world", "hello"];

const stringFrequency = (arr) => {
    return arr.reduce((acc, str) => {
        acc[str] = (acc[str] || 0) + 1;
        return acc;
    }, {});
};

console.log(stringFrequency(strings)); // Output: { hello: 3, world: 2, test: 1 }


//05: Count of People by City
let people = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 40, city: "Chicago" },
    { name: "Charlie", age: 50, city: "New York" }
];

const countByCity = (arr) => {
    return arr.reduce((acc, person) => {
        acc[person.city] = (acc[person.city] || 0) + 1;
        return acc;
    }, {});
};

console.log(countByCity(people)); // Output: { "New York": 2, "Chicago": 1 }

