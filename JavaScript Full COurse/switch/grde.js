// Letter Grade Switch


let testScore = 76;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >=70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    case testScore >= 40:
        letterGrade = "E";
    default:
        letterGrade = "F";
}

console.log(letterGrade);