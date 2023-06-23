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
    for (let i = DatelastOf; i < 6; i++) {
        table += `<li class="opacity">${i - DatelastOf + 1}</li>`
    }
    currenDate.innerHTML = ` ${month[currMonth]} ${currYear}`;
    days.innerHTML = table

}
renderCalendar();
icondownup.forEach(icon => {
    let date = "";
    icon.addEventListener("click", () => {
        currMonth = icon.id === "down" ? currMonth - 1 : currMonth + 1;
        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear()
            currMonth = date.getMonth()
        }
        else {
            date = new Date()
        }
        renderCalendar();
    })
})
const onToggle = () => {
    if (table.style.display === "none") {
        table.style.display = "block"
    }
    else {
        table.style.display = "none"
    }
}
let monthRender = '';
const monthLast=document.querySelector(".renderMonth")
let monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const renderMonth = () => {
    for (let i = 0; i <monthShortNames.length; i++) {
        monthRender += `<p class=monthlast>${monthShortNames[i]}</p>`
    }
    for (let i = 0; i <4; i++) {
        monthRender += `<p class="monthlast mothlastOf">${monthShortNames[i]}</p>`
    }
    monthLast.innerHTML = monthRender
}
renderMonth()

const daylast=document.querySelector(".table-day")
const isMonth = () => {
       if( monthLast.style.display=="none"){
        monthLast.style.display="grid"
        daylast.style.display="none"
        currenDate.innerHTML = `  ${currYear}`;
       }
       else{
        monthLast.style.display="none"
        daylast.style.display="block"
        currenDate.innerHTML = ` ${month[currMonth]} ${currYear}`;
       }
}
// const renderMonthDay=document.querySelectorAll('.monthlast');
// renderMonthDay.addEventListener("click",()=>{
//     daylast.style.display="block"
//     console.log("ksdukdjj");
//     renderMonth()
// })