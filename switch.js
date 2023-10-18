// створити змінну в якій за допогою Prompt спитати який день неділі зараз. Далі написати swith який для вівторок четверг значень виводить ( Сьогодні ${day} у вас урок о 19) для інших днів свої варіанти,  адля значень що не відповідають умові виведіть default



let sunday = prompt('What day is Sunday now?');

switch (sunday) {
    case 'Monday':
        alert('Today is labor day');
        break;
    case 'Tuesday':
        alert(`Today ${sunday} you have class at 19:00 p.m`);
        break;
    case 'Wednesday':
        alert('family day');
        break;
    case 'Thursday':
            alert(`Today ${sunday} you have class at 19:00 p.m`);
            break;
    case 'Friday':
        alert('Food day');
        break;
    default:
        alert('There is no such day');
        break;
}