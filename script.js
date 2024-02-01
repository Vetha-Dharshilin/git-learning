// XML-HTTP Methods :
// Purpose : it is used to interact with the 
// servers via API

//Total there are 5 steps:
// Step 01: 
  var request = new XMLHttpRequest();
// Step 02 open a request :
request.open("GET","https://restcountries.com/v3.1/all")
//Step 03 kickstart a request: 
request.send();
//step 04:
// once the data successfully received from the server
//server status code is 200
//data coming from the server is the type of string
//convert string to object
request.onload = function(){
  var res = JSON.parse(request.response);
  console.log(res);
}