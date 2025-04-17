//1/10: Variables

//2/10: Create a Variable: var
var favoriteFood = 'pizza'; //or favouriteFood if you're using British English, only the results matter. fmclcmelLKD is another possible name.
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
