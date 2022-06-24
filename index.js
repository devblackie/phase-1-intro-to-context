// Your code here
function createEmployeeRecord(array){
    const testEmployee = {
        firstName:array[0],
        familyName:array[1],
        title:array[2],
        payPerHour:array[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
    return testEmployee;
}

function createEmployeeRecords(array){
const arrayOfObject = array.map((element)=>createEmployeeRecord(element));
return arrayOfObject;
}

function createTimeInEvent(dateStamp){
const dataTime = dateStamp.split(" ");
const dateInfo = {
    type:"TimeIn",
    hour:parseInt(dataTime[1]),
    date:dataTime[0],
}

this.timeInEvents.push(dateInfo);
return this;
}

function createTimeOutEvent(dateStamp){
const dataInfo = {
    type:"TimeOut",
    hour:parseInt(dateStamp.split(" ")[1]),
    date:dateStamp.split(" ")[0],
}
this.timeOutEvents.push(dataInfo);
return this;
}

function hoursWorkedOnDate(dateStamp){
let hoursOut = this.timeOutEvents.find(element=>element.date == dateStamp);
let hoursIn = this.timeInEvents.find(element=>element.date == dateStamp);
console.log((hoursOut.hour - hoursIn.hour) / 100)
return (hoursOut.hour - hoursIn.hour) / 100;
}
function wagesEarnedOnDate(dateStamp) {
let hours = hoursWorkedOnDate.call(this, dateStamp);
return this.payPerHour * hours;
}

function findEmployeeByFirstName(testEmployees, name) {    
return testEmployees.find(employee => employee.firstName == name)
}

function calculatePayroll(employeeRecord) {
return employeeRecord.reduce((total, employee) => {
return total + allWagesFor.call(employee);
}, 0);
}

const allWagesFor = function () {
const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date
})

const payable = eligibleDates.reduce(function (memo, d) {
    return memo + wagesEarnedOnDate.call(this, d)
}.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

return payable
}