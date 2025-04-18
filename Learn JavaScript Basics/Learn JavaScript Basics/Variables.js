//1/10: Variables

//2/10: Create a Variable: var
var favouriteFood = 'pizza'; /*or favoriteFood following American English(like in the course), only the results matter. 
fmclcmelLKD is another possible name.*/
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

//3/10: Create a Variable: let
let changeMe = true;
changeMe = false;
console.log(changeMe);

//4/10: Create a Variable: const
const entree = 'Enchiladas';
console.log(entree);
entree = 'Tacos';//Should get TypeError: Assignment to constant variable.
/* Hint quirk:
const testing;
Should say: SyntaxError: Missing initializer in const declaration
*/

//5/10: Mathematical Assignment Operators
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

//6/10: The Increment and Decrement Operator
let gainedDollar = 3;
let lostDollar = 50;
gainedDollar ++;
lostDollar --;

//7/10: String Concatenation with Variables
let favoriteAnimal = 'penguin';
console.log('My favorite animal: ' + favoriteAnimal)

//8/10: String Interpolation
let myName = 'Gabriel';
let myCity = 'London';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);
