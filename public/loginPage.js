'use strict'

let userForm = new UserForm();
userForm.loginFormCallback = function f (data){
    if (data !== null){
<<<<<<< HEAD
      ApiConnector.login({ login: data.login, password: data.password },
        (response) => {console.log(response); response.success == true ? location.reload() : userForm.setLoginErrorMessage(response.error)})
=======
      ApiConnector.login({ login: data.login, password: data.password }, (response) => {console.log(response); response.success ? location.reload() : userForm.setLoginErrorMessage(response.error)})
>>>>>>> c716fb4612ad4e18bff028762f7f974403e680a3
    }
    
}

userForm.registerFormCallback = function f (data) {
  if (data !== null){
<<<<<<< HEAD
    ApiConnector.register({ login: data.login, password: data.password }, (response) => {console.log(response); response.success == true ? location.reload() : userForm.setRegisterErrorMessage(response.error)})
    }
}

=======
    ApiConnector.register({ login: data.login, password: data.password }, (response) => {console.log(response); response.success ? location.reload() : userForm.setLoginErrorMessage(response.error)})
    }
}


/*Вопросы по тексту ниже.

## Реализация задания

    2. Посмотрите в консоли, какой объект возвращает сервер. - как это посмотреть?
    3. Проверьте успешность запроса. - как узнать, что запрос успешен? Какие варианты есть -успешен или нет?
    4. В случае успеха запроса обновите страницу (с помощью `location.reload();`). - что это за метод, не нашел в описании?
    5. В случае провала запроса выведите ошибку в окно для ошибок. - что это за окно? в него нужно вывести полученный ответ от сервера?*/
>>>>>>> c716fb4612ad4e18bff028762f7f974403e680a3
