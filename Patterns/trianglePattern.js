/*
Outer loop - rows
Inner loop - focus on the columns and connect to the rows
print them inside the inner loop
Optional - observe symmetry
*/


/*
Triangle Pattern - I
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

const triangle1 = (n) => {
  // pattern variable carries the final pattern in string format
  let pattern = "";
  // outer loop runs for `rows` no. of times
  for (let i = 1; i <= n; i++) {
    // inner loop runs for n
    for (let j = 1; j <= i; j++) {
      pattern += j + " ";
    }
    // Add a new line character after contents of each line
    pattern += "\n";
  }
  console.log(pattern);
};

/*  
Triangle Pattern - II
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
*/

const triangle2 = (n) => {
  // pattern variable carries the final pattern in string format
  let pattern = "";
  // outer loop runs for `rows` no. of times
  for (let i = 1; i <= n; i++) {
    // inner loop runs for n
    for (let j = 1; j <= i; j++) {
      pattern += i + " ";
    }
    // Add a new line character after contents of each line
    pattern += "\n";
  }
  console.log(pattern);
};

/*
Triangle Pattern - III
1
2 3
4 5 6
7 8 9 10
*/

const triangle3 = (n) => {
  //  start variable carries start number of the row
  let start = 1
  // pattern variable carries the final pattern in string format
  let pattern = "";
  // outer loop runs for `rows` no. of times
  for (let i = 1; i <= n; i++) {
    // inner loop runs for n
    for (let j = 1; j <= i; j++) {
      pattern += start + " ";
      start++
    }
    // Add a new line character after contents of each line
    pattern += "\n";
  }
  console.log(pattern);
};

/* 
Reverse Triangle - I
12345
1234
123
12
1
*/

const reverseTriangle1 = (n) => {
  let rows = n
  let pattern = ""
  for(let i =0; i<rows; i++){
    for(let j=1; j<=rows-i; j++){
      pattern+= j + " "
    }
    pattern+= "\n"
  }
  console.log(pattern)
}


triangle1(5);
triangle2(5);
triangle3(5);
reverseTriangle1(5)