// - напишіть змінні які питають за допомогою prompt логін та пароль   якщо логін admin і пароль 12345 вірні то виводити повідомлення "вітаємо в системі" якщо ні то виводити "Пароль логін не вірні" ( реалізувати за допомогою if else )


let loginUser = prompt("Write a login");
let passwordUser = prompt('Write a password');


if (loginUser == 'login' && passwordUser == '12345' ){
    alert('Вітаємо в системі');
    }
    else{
        alert('Пароль та логін не вірні');
    };