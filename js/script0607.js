const maxAllowedChecks = 3;

function dummy(arg) {
    // console.log("Ку-ку");
    // console.log(arg);
    console.log($("input[type=checkbox]:checked").length);
};

// подсчет числа нажатых флажков.
function trackChecks() {
    // подсчет количества нажатых чекбоксов
    let checkCount = $("input[type=checkbox]:checked").length;
    console.log("Выбрано флажков: " + checkCount);
    // console.log('Выбрано флажков: ${checkCount}');
    if (checkCount >= maxAllowedChecks) {
        console.log("это много");
        $("input[type=checkbox]:not(:checked)").prop("disabled", true)
    } else {
        console.log("это нормально");
        $("input[type=checkbox]:not(:checked)").prop("disabled", false);
    }

};

function trackRadios() {
    $("input[type=radio]").prop("disabled", true);
}


// вызов функции для чекбокса1
$("#check1").change(dummy);

// Благодаря jquery, мы можем навязать вызов этой функции на все чекбоксы, просто поменяв селектор. Например вот так:
$("input[type=checkbox]").change(dummy)

function init() {

    $("input[type=checkbox]").change(trackChecks);
    $("input[type=radio]").change(trackRadios);

// Мы также добавили одно важное дополнение — вызов функций trackChecks и trackRadios при загрузке страницы. Это дополнительная мера безопасности, сделанная для того, чтобы если при загрузке страницы у нас какие-то из галочек уже установлены, наша логика всё равно применилась.
    trackChecks();
    // trackRadios();
    console.log("скрипт подгрузился");
};

$(document).ready(init);

// Примечания
// Как отключать флажки. На уровне кода отключенные элементы имеют свойство disabled
// С помощью jquery добавлять и убирать эти свойства надо с помощью метода prop:
// $("#check1").prop("disabled", true);
