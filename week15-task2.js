function validate() {
    //Записываем значения из всех полей в переменные a, b, c, d, e, f, g, h, i
    let a = document.forms['form']['name'].value;
    let b = document.forms['form']['username'].value;
    let c = document.forms['form']['password'].value;
    let d = document.forms['form']['password2'].value;
    let e = document.forms['form']['date'].value;
    let f = document.forms['form']['sex'].value;
    let g = document.forms['form']['tel'].value;
    let h = document.forms['form']['email'].value;
    let i = document.forms['form']['country'].value;

    //Если поле пустое - выводим сообщение и останавливаем отправку формы
    if (a.length == 0) {
        document.getElementById('namef').innerHTML = '*обязательно для заполнения';
        return false;
    }

    if (b.length == 0) {
        document.getElementById('usernamef').innerHTML = '*обязательно для заполнения';
        return false;
    }

    if (c.length == 0) {
        document.getElementById('passwordf').innerHTML = '*обязательно для заполнения';
        return false;
    }

    if (d.length == 0) {
        document.getElementById('password2f').innerHTML = '*обязательно для заполнения';
        return false;
    }

    if (e.length == 0) {
        document.getElementById('datef').innerHTML = '*обязательно для заполнения';
        return false;
    }

    if (f.length == 0) {
        document.getElementById('sexf').innerHTML = '*обязательно для заполнения';
        return false;
    }

    if (g.length == 0) {
        document.getElementById('telf').innerHTML = '*обязательно для заполнения';
        return false;
    }

    if (h.length == 0) {
        document.getElementById('emailf').innerHTML = '*обязательно для заполнения';
        return false;
    }

    if (i.length == 0) {
        document.getElementById('countryf').innerHTML = '*обязательно для заполнения';
        return false;
    }


    //Проверяем, содержит ли значение, введенное в поле email символы @ и .
    at = h.indexOf("@");
    dot = h.indexOf(".");
    //Если поле не содержит эти символы, значит email введен не верно
    if (at < 1 || dot < 1) {
        document.getElementById('emailf').innerHTML = '*email введен не верно';
        return false;
    }
}



/*
МОИ ЗАМЕТКИ
    //Проверяем, содержит ли значение, введенное в поле "телефон" символы + и 7
    at = g.indexOf("+");
    dot = g.indexOf("7");
    //Если поле не содержит эти символы, значит телефон введен не верно
    if (at < 1 || dot < 1) {
        document.getElementById('telf').innerHTML = '*номер телефона введен не верно';
        return false;
    }
    */

/*
function showMessage() {
    alert(`Добро пожаловать, ${namef}!`);
}

function ok(){
    document.getElementById('submitf').innerHTML = 'Добро пожаловать!'}


    document.querySelector('submit').onclick = function () {
    alert('Добро пожаловать!');
};
*/