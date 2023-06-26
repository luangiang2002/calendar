let minusHours = document.querySelector(".fa-minus");
let increaseHours = document.querySelector(".fa-plus");
let timeOut = document.querySelector('.time')
let focus = document.querySelector('.focus button')
let totalSeconds = 30
const clickMini = () => {
    minusHours.addEventListener('click', () => {
        totalSeconds -= 30
        UpdateTimeOut()
    })
}
const clickSeconds = () => {
    increaseHours.addEventListener('click', () => {
        totalSeconds += 30 
        UpdateTimeOut()
    })
}
clickMini();
clickSeconds();
let setinter=''
focus.addEventListener('click', () => {
    UpdateTimeOut();
    setinter = setInterval(UpdateTimeOut, 1000)
})

function UpdateTimeOut() {
    const minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    timeOut.innerHTML = `${minutes} : ${seconds}`
    totalSeconds--
    if (minutes == 0 && seconds == 0) {
        clearInterval(setinter)
        alert('Hết thời gian')
    }
  

}

