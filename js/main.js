const btnDarkMode = document.querySelector('.dark-mode__btn');

// проверка на уровне системных настроек 
// 1. системные настройки 
if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add('activity');
    document.body.classList.add('dark');
}



//2. проверка темной темы в localStorage

if(localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('activity');
    document.body.classList.add('dark');
}  


// else if(localStorage.setItem('darkMode') === 'light') {
//     btnDarkMode.classList.add('"activity');
//     document.body.classList.add('dark');
// }

// проверка на уровне системных настроек 



// если меняются системные настройки мы меняем тему
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', () => {
   const newColorSheme = event.matches ? "dark" : 'light';


   if(newColorSheme === 'dark') {
    btnDarkMode.classList.add('activity');
    document.body.classList.add('dark');
   } else {
    btnDarkMode.classList.remove('activity');
    document.body.classList.remove('dark');
   }
})


// включение ночного режима по кнопке
btnDarkMode.onclick = function() {
    btnDarkMode.classList.toggle("activity");
const isDark = document.body.classList.toggle("dark");

if(isDark)  {
    localStorage.setItem('darkMode', 'dark');
} else {
    localStorage.setItem('darkMode', 'light');
}

}