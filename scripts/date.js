function getDate(){
    const obj = new Date();
    date = obj.toDateString();
    // Still need to add comma after day
    date = date.replace(/(?<=\d) /, ", ");
    document.querySelector(".date").innerText = date;
    console.log("tsst");
}
getDate();