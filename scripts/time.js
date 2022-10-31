function getTime(){
    const obj = new Date();
    time = obj.toLocaleTimeString();
    // Will remove the milliseconds at a later time
    document.querySelector(".time").innerText = time;
}
getTime();