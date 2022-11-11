'use strict'
let userForm = new UserForm();
userForm.loginFormCallback = function f (data){
    if (data){
      ApiConnectors.login(data, callback);  
    }
}


