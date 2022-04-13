function solve(year, month, day ) {
    let theDayBefore = new Date
    theDayBefore.setFullYear(year, month-1, day);
    theDayBefore.setDate(theDayBefore.getDate() - 1)

    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(theDayBefore);
    let mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(theDayBefore);
    let da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(theDayBefore);
    console.log(`${ye}-${mo}-${da}`);
}
solve(2016, 9, 30)