/*
Number Pyramid Pattern - I
    1
   123
  12345
 1234567
123456789
*/

const numberPyramid1 = (n) => {
    let rows = n;
    let pattern = ""
    for(let i=0; i<n; i++){
        // spaces
        for(space=0; space<rows-i ; space++){
            pattern+= " "
        }
        //number
        for(let num=1; num < 2*i; num++){
            pattern+= num+ " "
        }

        pattern += "\n"
    }
    return console.log(pattern)
}

numberPyramid1(5)