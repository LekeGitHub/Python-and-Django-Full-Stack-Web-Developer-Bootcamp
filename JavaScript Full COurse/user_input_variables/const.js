let radius, circumference;
const PI = 3.14159;

document.getElementById("submit").onclick = function(){
    radius = document.getElementById("radius").value;
    radius = Number(radius)
    circumference = 2 * PI * radius
    document.getElementById("result").textContent = circumference+'cm';

}
// document.getElementById("submit").onclick = function(){
//     radius = document.getElementById("radius").value;
//     isValue = (radius = Boolean(radius))
//    // if (isValue = true){
//         radius = Number(radius)
//         circumference = 2 * PI * radius
//         document.getElementById("result").textContent = circumference+'cm'
//    // }else{
//        // alert("You didn't enter any value")
//    // }
// }