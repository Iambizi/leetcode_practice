/* 
Our diagram has discernable pattern of directions.
Right, down, left, up.
*/
function spiralOrder(matrix) {
/* 
we are going to set a top bottom, left, right variables 
That will correspond to numbers in that matrix.

we will set a direction variable set to "right"
*/
 
 //result array we return back with the values
const spiralArray = [];
//this will pass the exception case test
    if(matrix.length === 0){
        return spiralArray;
    }
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    let dir = "right";

    while (top <= bottom && left <= right){
        if(dir === "right"){
            for(let i = left; i <=right; i++){
                spiralArray.push(matrix[top][i]);
            }
            top++;
            dir = "down";
        }else if(dir === "down"){
            for(let i = top; i <= bottom; i++){
                spiralArray.push(matrix[i][right]);
            }
            right--;
            dir = "left";
        }else if(dir === "left"){
            for(let i = right; i >= left; i--){
                spiralArray.push(matrix[bottom][i]);
            }
            bottom--;
            dir = "up";
        }else if(dir === "up"){
            for(let i = bottom; i >= top; i--){
                spiralArray.push(matrix[i][left]);
            }
            left++;
            dir = "right";
        }
    }
    //while loop keeps runing untill our matrix is exhausted then 
    
    return spiralArray; 
}

module.exports = spiralOrder;
