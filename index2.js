//button click value print in creating function
// function show(){
// document.getElementById("error").innerHTML = 'Congratulation Fullfil Datail Subming';//bazu me error dega
// var car = document.getElementById("set").value;
// let str = "Hello "+ car; //string me jo value ayi hello ke sath print hogi
// document.getElementById("greet").innerHTML=  str;
// let set = document.getElementById("error");
// set.style.color='Green';
// set.style.fontSize ="30px";
// set.style.textTransform = "capitalize";
// }
  
//trnery oparetor
// let num2 = 5;
// let num3 = 6;
// let num4 = num2 > num3 ? "same" : " Note same"; //num2 num3 se bada nhi hai
//let num4 = num2 < num3 ? "same" : " Note same"; //num2 num3 se chhota hai
// console.log(num4)

//Assing oparetor
// let a = 7;
// let b = 3;
// let c = a+b;
// let num = document.getElementById("result").innerHTML = c;


//string concate
//let num1 = "Tausif";
//let num2 = "Qureshi";
//console.log(num1+ " " + num2);


// simple using calculetor creating javascript
// function cal(){
//let opared1 = document.getElementById("first").value;
//let opared2 = document.getElementById("second").value;
//let select = document.getElementById("ope").value;
//if(select == '+'){
//var hello = parseInt(opared1) + parseInt(opared2);
//console.log(hello)
//}
// if( select == '-'){
//var hello = parseInt(opared1) - parseInt(opared2);
//}
//if( select == '*'){
//var hello = parseInt(opared1) * parseInt(opared2);
//}
//if( select == '/'){
//var hello = parseInt(opared1) / parseInt(opared2);
//}
//document.getElementById('res').value = hello;
//}


//creating javascript  digital watch
//function showtime(){
//let d = new Date();
//let h = d.getHours();
//let min = d.getMinutes();
//let sec = d.getSeconds();
//let sestion = "AM";
//if(h > 12 ){  //houres se big hote hai to h = h-12 means 13nhi baze ge 12 ke baad ek hi ae ga
//h= h- 12;
//}
//if(h >= 12){  //houre 12 ye 12 ke barabr ata hai to AM SE PM me Convert ho
//sestion = "PM";
//}
//h = h < 10 ? "0" + h : h;  //hour 10 se small hai to concete hora hai zero se agar houres 10 se small 9 hai to 09 show ho  warna houres aise hi print ho same min sec bhi?
//min = min < 10 ? "0" + min : min;
//sec = sec < 10 ? "0" + sec : sec;
//let time = h + " : " + min + " : " + sec + " : " + sestion;
//document.getElementById("watch").innerHTML = time;
//setInterval(showtime, 1000);
//}
//showtime();


//use prompt function data print use clicked button
//function num(){
//let result=prompt("Enter Your Details");
//document.writeln(result);
//document.getElementById("show").innerHTML = result;
//}

// start and stop function
// var num1;
// const start=()=>{
// num1 = setTimeout(()=>{
// document.writeln("Print My Name Tausif")
// }, 5000);
// }
// const stop=()=>{
// clearTimeout(num1);
// alert("Stoped The Button")
// }

//create setinterval function har one min me ek number plus hoke print us se jaha rukna hai clear interval use
// const num2 = setInterval(num3 ,1000);
// let b = 0; //global variable kahi hi use kar sakte hai
// function num3(){
// document.getElementById("new").innerHTML = b;
// b++;
// };
// const stop =()=>{
// clearInterval(num2)
// }

//addEventListener use button //addEventListener ye to peramet leta hai first kon sa event second ek function leta hai kya work karna hai?
// let i = 0;
// document.getElementById("btn").addEventListener('click', Tausif);
// function Tausif(){
// document.getElementById("car").innerText =i;
// i++;
// }
// document.getElementById("btn")
//.addEventListener('mouseenter', onColorChange); //mosue jaye ga tab color change hoga is ka 
// function onColorChange(){
// document.getElementById("car").style.color='red';
// }
// function stop(){
// document.getElementById("btn").removeEventListener('click',Tausif) //removeaddEventListener
// }





