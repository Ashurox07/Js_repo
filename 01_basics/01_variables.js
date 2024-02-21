const accountId = 144553
let accountEmail = "ashispradhan11@gmail.com"
var accountpassword = "12345"
accountCity = "Jalandhar"
let accountState;

// accountId = 2 //not allowed

/*
prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "ashu11.com"
accountPassword = "121212"
accountCity = "Nayagarh"

console.log(accountId);

console.table([accountId, accountEmail, accountpassword,accountCity, accountState])