
// Store the location in a array. Make sure the array is not in   alphabetical order.
let places :string[] = ['itly', 'Germany', 'Lyari', 'Nayabad', 'Mosamiyat'];

//print youre array in its orignal order.
console.log('orignal ' + places);

//print your array in alphabatical order without modifying the actual list.
console.log('copy ' +[...places].sort);

//show that your array is still in its orignal order by printing it.
console.log('orignal' + places);

//print your array in reverse alphabatical order without changing the order of the orignal list.
console.log('copy '+ [...places].sort().reverse());

//Show that your array stillin its orignal order by printing it again.
console.log('orignal '+ places);

//Reverse the order of your. print the array to show that its order has changed.
console.log('orignal '+ places.reverse());

//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('orignal '+ places.reverse());

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('orignal '+ places.sort());

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('orignal '+ places.sort().reverse());