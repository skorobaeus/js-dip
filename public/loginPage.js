'use strict'

let userForm = new UserForm();
userForm.loginFormCallback = function f (data){
    if (data !== null){
      ApiConnector.login({data.login, data.password}, (response) => {});  
    }
    if (response === success){
        location.reload();
    } else {
      console.log(response);
    }
}

userForm.registerFormCallback = function f (data) {
  if (data !== null){
    ApiConnector.register({data.login, data.password}, (response) => {console.log(response)});
  }
  if (response === success){
        location.reload();
    } else {
      console.log(response);
    }
}


/*Вопросы по тексту ниже.

## Реализация задания

    2. Посмотрите в консоли, какой объект возвращает сервер. - как это посмотреть?
    3. Проверьте успешность запроса. - как узнать, что запрос успешен? Какие варианты есть -успешен или нет?
    4. В случае успеха запроса обновите страницу (с помощью `location.reload();`). - что это за метод, не нашел в описании?
    5. В случае провала запроса выведите ошибку в окно для ошибок. - что это за окно? в него нужно вывести полученный ответ от сервера?*/