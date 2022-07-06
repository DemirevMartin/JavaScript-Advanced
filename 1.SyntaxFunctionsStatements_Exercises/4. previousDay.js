function getPreviousDay(year, month, day) {
    let inputDate = new Date(year, month - 1, day);
    inputDate.setDate(inputDate.getDate() - 1);
    console.log(`${inputDate.getFullYear()}-${inputDate.getMonth() + 1}-${inputDate.getDate()}`);
}
getPreviousDay(2016, 9, 30);
getPreviousDay(2016, 10, 1);