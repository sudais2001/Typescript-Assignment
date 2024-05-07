// Equality and inequality Test 1
console.log("Equality test with string: ", "Apple" === "Apple");

// Equality and inequality Test 2
console.log("Equality test with string: ", ("Apple" as string) != "orange");

//Tests using the lower case function
console.log("Lower Case funcation test: ","Hello".toLowerCase() === "hello");

//Numerical tests involving equality 
console.log("Equality test with string: ", 26 ===26);

//Numerical tests involving inequality
console.log("Iquality test with numbers: ", (26 as number) != 35);

//Greater then test
console.log("Grater then test: ", 10 > 5);
//less then test
console.log("less then test: ",5 < 10);


//Greater then or equal to
console.log("Greater then and equal to test: ",10 >=10);

//less then or equal to
console.log("less then or equal to test: ", 5<= 10);

//Tests using "and"operators
console.log("And operator test ", 5===5 && 10 > 5);

//Tests using "or operator"
console.log("or operator test ", 5===5 || false);

//Test whether an item is in a array
const fruit :string[] = ['Apple', 'Mango', 'Orange' ]
console.log('Test "Mango" in the array: ', fruit.includes("Mango"));

//test whether an item is not in a array
console.log('testing "Grapes" is not in array: ' , !fruit.includes('Grapes'));

