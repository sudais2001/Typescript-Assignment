let current_users : string [] =  ["Admin", "Eric", "Sudais", "Ali", "Junaid"]
let new_user : string [] = ["Admin", "Ali", "Sultan", "Jaffer", "Jakhura"]

let current_users_lower : string [] =current_users.map(user => user.toLowerCase())




for (let new_user of current_users){
 if (current_users_lower.includes (new_user.toLowerCase())) {
        console.log(`Sorry ${new_user}, that name is taken`)
  } else {
    console.log(`yes ${new_user}, is still in avalible list`)
  }
}
