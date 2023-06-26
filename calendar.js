const currenDate = document.querySelector(".current-date");
const toDate = document.querySelector(".toDate");
const days = document.querySelector(".days");
let time = document.querySelector(".time");
const icondownup = document.querySelectorAll(".btn-down i, .btn-up i")
const table = document.querySelector(".table");
let date = new Date();
year = date.getFullYear();
currMonth = date.getMonth();
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
currenDate.innerHTML = ` ${month[currMonth]} ${year}`;
const renderCalendar = () => {
    toDate.innerHTML = date.toDateString();
    let lastDate = new Date(year, currMonth + 1, 0).getDate();
    let lastDateOf = new Date(year, currMonth, 0).getDay();
    let lastDatelastOf = new Date(year, currMonth, 0).getDate();
    let DatelastOf = new Date(year, currMonth, lastDate).getDay();
    let table = ''
    for (let i = lastDateOf; i > 0; i--) {

        table += `<li class="opacity">${lastDatelastOf - i + 1}</li>`
    }
    for (let i = 1; i <= lastDate; i++) {
        let today = i === date.getDate() && currMonth === date.getMonth() && year === date.getFullYear() ? "active" : ""

        table += `<li class=${today}>${i}</li>`
    }
    for (let i = DatelastOf; i < 7; i++) {
        table += `<li class="opacity">${i - DatelastOf + 1}</li>`
    }

    days.innerHTML = table;
}

renderCalendar();
const onToggle = () => {
    if (table.style.display === "none") {
        table.style.display = "block"
    }
    else {
        table.style.display = "none"
    }
}

document.querySelector('.prev').addEventListener('click', () => {
    year = currMonth === 0 ? year - 1 : year;
    currMonth = currMonth === 0 ? 11 : currMonth - 1;
    currenDate.innerHTML = `${month[currMonth]} ${year}`;
    renderCalendar();
});
document.querySelector('.next').addEventListener('click', () => {
    year = currMonth === 11 ? year + 1 : year;
    currMonth = (currMonth + 1) % 12;
    currenDate.innerHTML = ` ${month[currMonth]} ${year}`;
    renderCalendar();
})


document.querySelector('.prevMonth').addEventListener('click', () => {
    year--
    currenDate.innerHTML = `${year}`;
    renderYear(year)
    renderMonth();
});
document.querySelector('.nextMonth').addEventListener('click', () => {
    year++
    currenDate.innerHTML = `${year}`;
    renderYear(year)
    renderMonth();
});

document.querySelector('.prevYear').addEventListener('click', () => {
    year -= 10
    currenDate.innerHTML = `${year - (year % 10)} - ${(year - (year % 10)) + 9}`;
    renderYear(year);
    renderMonth();
});
document.querySelector('.nextYear').addEventListener('click', () => {
    year += 10
    currenDate.innerHTML = `${year - (year % 10)} - ${(year - (year % 10)) + 9}`;
    renderYear(year);
    renderMonth();
});

const monthLast = document.querySelector(".renderMonth")
let monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const renderMonth = () => {
    let monthRender = '';
    for (let i = 0; i < monthShortNames.length; i++) {
        monthRender += `<p class="monthlast" data-month="${i}" data-year="${year}">${monthShortNames[i]}</p>`
    }
    for (let i = 0; i < 4; i++) {
        monthRender += `<p class="monthlast mothlastOf" data-month="${i}" data-year="${year + 1}">${monthShortNames[i]}</p>`
    }
    monthLast.innerHTML = monthRender;
}
renderMonth()
const yearLast = document.querySelector(".renderYear");
renderYear = (year) => {
    let yearRender = '';
    const min = year - (year % 10);
    const max = min + 9;
    const Top = min % 4 === 0 ? 1 : 3;
    for (let i = 1; i <= Top; i++) {
        yearRender += `<div class="year year-before" data-year=${min - i}>${min - i}</div>`;
    }
    for (let i = min; i <= max; i++) {
        yearRender += `<div class="year "data-year=${i}>${i}</div>`;
    }
    const Bottom = 16 - (max - min + 1) - Top;
    for (let i = 1; i <= Bottom; i++) {
        yearRender += `<div class="year year-after "data-year=${max + i}>${max + i}</div>`;
    }
    yearLast.innerHTML = yearRender
}
renderYear(year);

const daylast = document.querySelector(".table-day");

const clickDay = document.querySelector(".btn-day");
const clickMonth = document.querySelector(".btn-month");
const clickYear = document.querySelector(".btn-year");
const diplay = () => {
    if (monthLast.style.display == "none") {
        monthLast.style.display = "grid"
        daylast.style.display = "none"
        clickDay.style.display = "none"
        clickMonth.style.display = "block"
        yearLast.style.display = "none"
        clickYear.style.display = "none"
        currenDate.innerHTML = `${year}`;
    }
    else {
        monthLast.style.display = "none"
        clickMonth.style.display = "none"
        if (daylast.style.display = "none" && currenDate.innerHTML == `${year}`) {
            yearLast.style.display = "grid"
            monthLast.style.display = "none"
            clickYear.style.display = "block"
            monthLast.style.display = "none"
            clickMonth.style.display = "none"
            currenDate.innerHTML = `${year - (year % 10)} - ${(year - (year % 10)) + 9}`;
        }
        // else{
        //     yearLast.style.display = "none"
        //     clickMonth.style.display = "block"
        // }
    }
}
diplay();
currenDate.removeEventListener('click',diplay)
currenDate.addEventListener('click', () => {
    diplay();
})
monthLast.addEventListener('click', function (e) {
    if (e.target.closest('.monthlast')) {
        const target = e.target.closest('.monthlast');
        year = Number(target.dataset.year);
        currMonth = Number(target.dataset.month);
        daylast.style.display = "block"
        monthLast.style.display = "none"
        yearLast.style.display = "none"
        clickMonth.style.display = "none"
        clickDay.style.display = "block"
        currenDate.innerHTML = `${month[currMonth]} ${year}`;
        currenDate.classList.add("year-click")
        renderCalendar()
        console.log(currMonth);
        console.log(year);
    }
    renderCalendar();
});
const yearLastClick = document.querySelector(".renderYear");
yearLastClick.addEventListener('click', function (e) {
    if (e.target.closest('.year')) {
        const target = e.target.closest('.year');
        year = Number(target.dataset.year);
        monthLast.style.display = "grid"
        yearLast.style.display = "none"
        clickYear.style.display = "none"
        clickMonth.style.display = "block"
        currenDate.innerHTML = `${year}`;
        currenDate.classList.add("year-click")
        renderCalendar();
        renderYear(year);
        renderMonth()
    }
    return;
});
toDate.addEventListener("click", () => {
    date = new Date();
    currMonth = date.getMonth();
    year = date.getFullYear()
    daylast.style.display = "block"
    monthLast.style.display = "none"
    clickYear.style.display = "none"
    currenDate.innerHTML = `${month[currMonth]} ${year}`;
    renderCalendar();
})