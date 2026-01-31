const userNumber = prompt("Введіть число")
if (userNumber > 10) {
    alert("Сума більша за 10")
} else if (userNumber <= 10) {
    alert("Сума менша або дорівнює 10")
}
const numberUser = prompt("Введіть число")
if (numberUser > 10 && numberUser < 20) {
alert("Число входить в діапазон від 10 до 20")
} else {
    alert("Число не входить в діапазон від 10 до 20")
}
const userName = prompt("Напишіть своє ім'я")
const userEmail = prompt("Напишіть своє емаіл")
const userPassword = prompt("Напишіть своє пароль")
if (userName.length >= 3 && userEmail.includes("@") && userEmail.includes(".") && userPassword >= 6) {
    alert("Перенаправлення на іншу сторінку")
} else {
    alert("Помилка: неправильне заповнення")
}
const userProfile = prompt("Введіть текст")
const profileUser = prompt("Введіть слово")
if (userProfile === "" && profileUser === "") {
  alert("Не всі поля заповнені")
} else {
  alert("Обидва поля заповнені")
}

const userText = prompt("Введіть текст")
if (userText.includes("JavaScript")) {
    alert("Текст містить слово JavaScript")
} else {
    alert("Текст не містить слово JavaScript")
}