const currenDate = document.querySelector(".current-date");
const toDate = document.querySelector(".toDate");
const days = document.querySelector(".days");
let time = document.querySelector(".time");
const icondownup = document.querySelectorAll(".btn-down i, .btn-up i")
const table = document.querySelector(".table");
let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
currenDate.innerHTML = ` ${month[currMonth]} ${currYear}`;
const renderCalendar = () => {
    toDate.innerHTML = date.toDateString();
    let lastDate = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDateOf = new Date(currYear, currMonth, 0).getDay();
    let lastDatelastOf = new Date(currYear, currMonth, 0).getDate();
    let DatelastOf = new Date(currYear, currMonth, lastDate).getDay();
    let table = ''
    for (let i = lastDateOf; i > 0; i--) {

        table += `<li class="opacity">${lastDatelastOf - i + 1}</li>`
    }
    for (let i = 1; i <= lastDate; i++) {
        let today = i === date.getDate() && currMonth === date.getMonth() && currYear === date.getFullYear() ? "active" : ""

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
// click next month and pre month

// icondownup.forEach(icon => {
//     let date = "";
//     icon.addEventListener("click", () => {
//         currMonth = icon.id === "down" ? currMonth - 1 : currMonth + 1;
//         if (currMonth < 0 || currMonth > 11) {
//             date = new Date(currYear, currMonth);
//             currYear = date.getFullYear()
//             currMonth = date.getMonth()
//         }
//         else {
//             date = new Date()
//         }
//         currenDate.innerHTML = `${month[currMonth]} ${currYear}`;
//         renderCalendar();
//     })
// })

document.querySelector('.prev').addEventListener('click', () => {
    currYear = currMonth === 0 ? currYear - 1 : currYear;
    currMonth = currMonth === 0 ? 11 : currMonth - 1;
    currenDate.innerHTML = ` ${month[currMonth]} ${currYear}`;
    renderCalendar();
});
document.querySelector('.next').addEventListener('click', () => {
    currYear = currMonth === 11 ? currYear + 1 : currYear;
    currMonth = (currMonth + 1) % 12;
    currenDate.innerHTML = ` ${month[currMonth]} ${currYear}`;
    renderCalendar();
})
let monthRender = '';
const monthLast = document.querySelector(".renderMonth")
let monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const renderMonth = () => {
    for (let i = 0; i < monthShortNames.length; i++) {
        monthRender += `<p class=monthlast>${monthShortNames[i]}</p>`
    }
    for (let i = 0; i < 4; i++) {
        monthRender += `<p class="monthlast mothlastOf">${monthShortNames[i]}</p>`
    }
    monthLast.innerHTML = monthRender;
}
renderMonth()
const monthLastClick = document.querySelectorAll(".monthlast")
const daylast = document.querySelector(".table-day")
const YearLastClick = document.querySelectorAll(".renderYear")
diplay = () => {
    if (monthLast.style.display == "none") {
        monthLast.style.display = "grid"
        daylast.style.display = "none"
        currenDate.innerHTML = `${currYear}`;

    }
    else {
        monthLast.style.display = "none"
        daylast.style.display = "block"
        currenDate.innerHTML = `${month[currMonth]} ${currYear}`;
    }
   
}
diplay();
click = () => {
    document.querySelector('.prev').addEventListener('click', () => {
        currYear--
        currenDate.innerHTML = `${currYear}`;
    });
    document.querySelector('.next').addEventListener('click', () => {
        currYear++
        currenDate.innerHTML = `${currYear}`;

    });
}
click();
currenDate.addEventListener('click', () => {
    currenDate.classList.remove("current-date")
    let date = "";
    date = new Date();
   
    diplay();
    monthLastClick.forEach((item, index) => {
        item.addEventListener("click", () => {
            let temp = currYear;
            currMonth = date.setMonth(index)
            currMonth = date.getMonth();
            index && index > 11 ? temp = date.setFullYear(temp + 1) : date.setFullYear(temp)
            temp = date.getFullYear();
            console.log(temp);
            daylast.style.display = "block"
            monthLast.style.display = "none"
            currenDate.innerHTML = `${month[currMonth]} ${temp}`;
        })
    })
    renderCalendar();
})

toDate.addEventListener("click", () => {
    date = new Date();
    currMonth = date.getMonth();
    currYear = date.getFullYear()
    daylast.style.display = "block"
    monthLast.style.display = "none"
    currenDate.innerHTML = `${month[currMonth]} ${currYear}`;
    renderCalendar();
})
