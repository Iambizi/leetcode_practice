/*
If the first row and/or the first column needs to be set to zeros 
we need to do that last
*/

/* 
    1) Loop over the 1st column and check if there are zeros
     if there are, store that info in a variable for later use

    2) Loop over 1st row and check if there are zeros, 
    if there are, store that info into a variable for later use

    3)

    4) Zero out the cells not in first row & first col based on previous flags

    5) Zero all cells in first row based on step 1

    6) Zero all cells in first column based on step 1 
    */
function setZeroes(matrix) {
    let firstColHasZero = false;
    let firstRowHasZero = false;

    //Check if first column has zero
    for(let i = 0; i < matrix.length; i++){
        if(matrix[i][0] === 0){
            firstColHasZero = true;
            // we break as soon we hit 1st zero no need to keep looping
            break;
        }
    }
    //Check if first row has zero
    for(let i = 0; i < matrix[0].length; i++){
        if(matrix[0][i] === 0){
            firstRowHasZero = true;
            break;
        }
    }
    //Use first row and column as flags, if rest of cells have zeros
    for(let row = 1; row < matrix.length; row++){
        for(let col = 1; col < matrix[0].length; col++){
            if(matrix[row][col] === 0){
                matrix[0][col] = 0;
                matrix[row][0] = 0;
            }
        }
    }
    //Zero out cells based on flags in first row and column
    for(let row = 1; row < matrix.length; row++){
        for(let col = 1; col < matrix[0].length; col++){
            if(matrix[row][0] === 0 || matrix[0][col] === 0){
                matrix[row][col] = 0;
            }
        }
    }
    //Zero out first column
    if(firstColHasZero){
        for(let i = 0; i < matrix.length; i++){
            matrix[i][0] = 0
        }
    }
    //Zero out first row
    if(firstRowHasZero){
        for(let i = 0; i < matrix[0].length; i++){
            matrix[0][i] = 0
        }
    }
}

module.exports = setZeroes;
