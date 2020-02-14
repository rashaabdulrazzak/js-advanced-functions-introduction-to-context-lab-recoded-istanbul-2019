// Your code here
function createEmployeeRecord(array){
  return {firstName : array[0],
          familyName: array[1],
          title:array[2],
          payPerHour : array[3],
          timeInEvents:[],
          timeOutEvents:[]
  }
}

function createEmployeeRecords(array){
  let arr = [];
  for(let element of array)
  {
    arr.push(createEmployeeRecord(element))
  }
  return arr;
}
function createTimeInEvent(obj,dateStamp){
  let timeVal = dateStamp.split(' ');
  let timeObj = {type:'TimeIn', hour : parseInt(timeVal[1]),date:timeVal[0]};
  obj.timeInEvents.push(timeObj);
  return obj;
  
}
function createTimeOutEvent(obj,dateStamp){
  let timeVal = dateStamp.split(' ');
  let timeObj = {type:'TimeOut', hour : parseInt(timeVal[1]),date:timeVal[0]};
  obj.timeOutEvents.push(timeObj);
  return obj;
}
<<<<<<< HEAD
function hoursWorkedOnDate(obj,dateStamp){
  let arrayIn = obj.timeInEvents ,arrayOut = obj.timeOutEvents,resIn = 0 ,resOut = 0 
  for (let element of arrayIn){
    if(element.date == dateStamp) {resIn= element.hour ; break;}
     }
  for (let element of arrayOut){
    if(element.date == dateStamp) {resOut= element.hour ; break;}
  }
  return (resOut-resIn) /100
  }
  
=======
/*function hoursWorkedOnDate(obj,dateStamp){
  let arrayIn = obj.timeInEvents 
  let arrayOut = obj.timeOutEvents
  let resIn = 0 
  let resOut = 0 
  for (let element in arrayIn){
    if(element.date == dateStamp) {resIn= element.hour ; break;}
     }
  for (let element in arrayOut){
    if(element.date == dateStamp) {resOut= element.hour ; break;}
  }
  return (resOut-resIn) /100
  }*/
  function hoursWorkedOnDate(arr,date){
let timeIn=arr.timeInEvents, timeOut = arr.timeOutEvents,inHours=0,outHours=0
  for(let a of timeIn){
    if(a.date==date) {inHours=a.hour; break;}
  }
   for(let a of timeOut){
    if(a.date==date) {outHours=a.hour; break;}
  }
  return (outHours-inHours)/100 ;
}
>>>>>>> 8246fd1fd9723dc387c61fc573b3f244e5f601bd
function wagesEarnedOnDate(obj,dateStamp){
  let hoursWorked = hoursWorkedOnDate(obj,dateStamp)
  let value = hoursWorked * obj.payPerHour
  return value
  
}
function allWagesFor(obj){
  let val = []
  for ( let odate of obj.timeInEvents){
<<<<<<< HEAD
    val.push(odate.date)
  }
  return val.reduce(function(acc,value){return acc+= wagesEarnedOnDate(obj,value)},0)
}
function findEmployeeByFirstName(srcArray,firstName){
  return srcArray.find( ({ firstName }) => firstName === firstName );
=======
    val.push(odate)
  }
  return val.reduce(function(acc,value){return acc+= wagesEarnedOnDate(obj,value)},0)
  
}
function findEmployeeByFirstName(srcArray,firstName){
  return srcArray(firstName,index)
>>>>>>> 8246fd1fd9723dc387c61fc573b3f244e5f601bd
}
function calculatePayroll(array){
   return array.reduce(function(total,element){return total+=allWagesFor(element)},0)
  
<<<<<<< HEAD
}
=======
}
>>>>>>> 8246fd1fd9723dc387c61fc573b3f244e5f601bd
