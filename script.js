let count = 0;

const result = document.getElementById("result");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const message = document.getElementById("message");


function render() {

    result.textContent = count;


    // Изменение цвета результата

    if (count > 0) {

        result.style.background = "yellow";

    } else if (count < 0) {

        result.style.background = "green";

    } else {

        result.style.background = "red";

    }


    // Блокировка кнопок

    plus.disabled = count >= 10;

    minus.disabled = count <= -10;


    // Сообщение об экстремальном значении

    if (Math.abs(count) === 10) {

        message.textContent =
            "Вы достигли экстремального значения";

    } else {

        message.textContent = "";

    }
}


// Кнопка "Плюс"

plus.addEventListener("click", function () {

    if (count < 10) {

        count++;

        render();

    }

});


// Кнопка "Минус"

minus.addEventListener("click", function () {

    if (count > -10) {

        count--;

        render();

    }

});


// Первоначальное отображение

render();
