function displayAge(){
  let dateNode = document.getElementById("dateInput");
  let date = parseInt(dateNode.value);

  let monthNode = document.getElementById("monthInput");
  let month = parseInt(monthNode.value);

  let yearNode = document.getElementById("yearInput");
  let year = parseInt(yearNode.value);

  let errMsg = "Please input valid data for ";

  if(isNaN(date)||date<=0||date>31){
      errMsg += "Date Field, "
  }

  if(isNaN(month)||month<=0||month>12){
      errMsg += "Month Field, "
  }

  if(isNaN(year)||year<=0){
      errMsg += "Year Field, "
  }

  if(errMsg!=="Please input valid data for "){
      document.getElementById('result').innerText=errMsg;
  }else{
      let now = new Date();
      let presentYear = now.getFullYear();
      let presentMonth = now.getMonth()+1;
      let presentDate = now.getDate();
      let resultYear = presentYear - year;
      let resultMonth = presentMonth - month;
      if(resultMonth<0){
          resultMonth += 12;
          resultYear--
      }
      let resultDays = presentDate - date;
      if(resultDays<0){
          resultDays += 30;
          resultMonth--
      }
      let resultAge = `Your age is ${resultYear} years ${resultMonth} months ${resultDays} days`;
      document.getElementById('result').innerText=resultAge;
  }


}