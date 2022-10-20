const currentDate = new Date();
const oldDate = new Date("1990-12-25");

const getDateDifference = (firstDate, secondDate) => {
    const difference = new Date(firstDate.getTime() - secondDate.getTime())

    return {
        years: difference.getFullYear() - 1970,
        months: difference.getMonth(),
        days: difference.getDate() - 1,
    };
};

const getNextDayDate = (date) => {
    date = new Date(date);

    return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
};

console.log(getDateDifference(currentDate, oldDate));

console.log(getNextDayDate("2022-05-06"));
