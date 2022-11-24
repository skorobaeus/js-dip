'use strict'

let userForm = new UserForm();
userForm.loginFormCallback = function f (data){
    if (data !== null){
      ApiConnector.login({ login: data.login, password: data.password }, (response) => {console.log(response); response.success == true ? location.reload() : userForm.setLoginErrorMessage(response.error)})
    }
    
}

userForm.registerFormCallback = function f (data) {
  if (data !== null){
    ApiConnector.register({ login: data.login, password: data.password }, (response) => {console.log(response); response.success == true ? location.reload() : userForm.setLoginErrorMessage(response.error)})
    }
}


/*Вопросы по тексту ниже.

## Реализация задания

    2. Посмотрите в консоли, какой объект возвращает сервер. - как это посмотреть?
    3. Проверьте успешность запроса. - как узнать, что запрос успешен? Какие варианты есть -успешен или нет?
    4. В случае успеха запроса обновите страницу (с помощью `location.reload();`). - что это за метод, не нашел в описании?
    5. В случае провала запроса выведите ошибку в окно для ошибок. - что это за окно? в него нужно вывести полученный ответ от сервера?*/
