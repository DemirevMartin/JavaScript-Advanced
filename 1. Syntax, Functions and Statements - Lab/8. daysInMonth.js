function countDays(month, year) {
    let daysInMonth = new Date(year, month, 0). getDate();
    console.log(daysInMonth);
}
countDays(1, 2012);
countDays(2, 2021);
countDays(2, 2012);