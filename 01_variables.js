const accountId = 144553
let accountEmail = "itzmenishu04@gmail.com"
var accountPassword = "12345"
accountCity = "Kanpur"
let accountState;
//accountId = 2 // not allowed


accountEmail = "kdci@hc.com"
accountPassword = "3234"
accountCity = "Jaipur"


console.log(accountId);

/*
Prefer not to use var
because of issuse in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
