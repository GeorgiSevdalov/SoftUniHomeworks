function requiredReading(numPages, pagesForHour, daysMustReadBook){
    let timeNeeded = numPages/pagesForHour;
    let requiredHours = timeNeeded/daysMustReadBook;
    console.log(requiredHours)
}