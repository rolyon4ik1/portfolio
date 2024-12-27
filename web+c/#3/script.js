function getTomorrow() {
    let today = new Date();
    today.setDate(today.getDate() + 1);
    let year = today.getFullYear();
    let month = (today.getMonth() + 1).toString().padStart(2, '0');
    let day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Устанавливаем завтрашнюю дату только для элементов с классом .date-input
window.onload = function () {
    let dateInputs = document.querySelectorAll('.date-input');
    dateInputs.forEach(input => {
        input.value = getTomorrow();
        input.min = getTomorrow(); // Запрещаем выбирать даты раньше завтрашнего дня
    });
}