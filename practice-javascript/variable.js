
// var x = 5;
// var y = 6;
// var z = x + y;
// document.getElementById("demo").innerHTML =
// "The value of z is: " + z;
// var z = "hello world";

// document.write(z);
var per = prompt("enter your percentage");
if(per >= 80 && per <= 100){
    document.write("you are merit");
}
else if(per >=60 && per <= 80){
    document.write("you are first divison");
}
else if (per >45 && per <= 60){
    document.write("you are second divison");
}
else if (per >=33 && per <= 45){
    document.write("you are third divison");
}
else if (per < 33){
    document.write("you are fail");
}
else {
    document.write("enter your valid percent");
}
