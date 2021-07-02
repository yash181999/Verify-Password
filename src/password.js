
 const checkPassword = (password) =>{
     if(password === undefined || password === null || password == '' || password.length < 8) {
         throw "Password must be of atleast 8 characters";
     }   
     else if(!/[A-Z]/.test(password)) {
         throw "Password must contain a captial letter";
     } 
     else if(!/[a-z]/.test(password)) {
         throw "Password must contain a lowercase letter";
     }
     else if(!/[0-9]/.test(password)) {
         throw "Password must contain a number";
     }
     else{
         return "Correct Password";
     }
}

module.exports = {checkPassword}