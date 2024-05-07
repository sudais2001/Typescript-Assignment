import { Console } from "console";

let Guest_list :string[]= ['Nawaz Sharif' , 'Imran Khan' , 'Asif Zardari'];

// for(let i=0; i<Guest_list.length; i++){


//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in your party.\n\nThank you!\n\n')


// }

let absent_Guest :string = 'Imran Khan' ; 

let New_Guest :string = 'Kamran Tessori' ;

// for(let i=0; i<Guest_list.length; i++){


//     console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in your party.\n\nThank you!\n\n')


// }

console.log(`${absent_Guest}is not comingto the par.`);

console.log('Good News! We find Big Table So We are inviting 3 more person.')

// array mai 3 guest add kiye hein
Guest_list.unshift('Sir Faisal Masood') ;
Guest_list.splice(2 , 0 , 'Arif Alwi');
Guest_list.push('Salman Khan');

// yha per mainy 6 Guest ka array kon print kraya hai
for(let i=0; i<Guest_list.length; i++){


    console.log('Dear Mr. ' + Guest_list[i] + ',\n\nIt is our pleasure to invite you in your party.\n\nThank you!\n\n')


}
// Sorry messsage to guest for not invited
console.log('sorry we not arrange big table, only two peoples will bw invited.');
//yha per mane Guest Remove kry hein.
while(Guest_list.length > 2){
    let Remove_Guest = Guest_list.pop()
    // console.log;('Sorry Mr. ${remove_guest}, you are not invited for dinner');
}
//for(let i=0; i<Guest_list.length; i++)


//         console.log('Dear Mr. ' + Guest_list[i] + ',\n\nYou are still invited.\n\nThank you!\n\n')

// }
//mainy sary Array say remove kerdiye.
Guest_list.splice(0, 2)
console.log();(Guest_list);


///Exercise 19

//print a message indicating the number of peoples you are inviting to dinner.

console.log(`Total number of guest Are: ${Guest_list.length}`);
