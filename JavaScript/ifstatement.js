var cheese = 0;
var buger = 0;

var report = "blank!";

if(cheese >= 10 && buger >= 10) {
    report = "Strong sales of both cheese and buger"
} else if(buger === 0 && cheese === 0){
    report="No sales today"
}
else{
    report="We had some sales items"
}

console.log(report);