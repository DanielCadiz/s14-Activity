var staffIds = [1, 2, 3];
var employee1 = {
    id: 1,
    name: "Dan",
    position: "trainee",
    address: "PH"
};
var employee2 = {
    id: 3,
    name: "Steph",
    position: "trainee",
    address: "PH"
};
var employee3 = {
    id: 5, 
    name: "Cadz",
    position: "trainee",
    address: "PH"
};
console.log(staffIds.length);
function checkEmployment(employee) {
    console.log('Checking if employee credentials are valid:');
    for (var i = 0; i <= staffIds.length - 1; i++) {
        console.log(i);
        if (employee.id == staffIds[i]) {
            console.log("true");
            console.log("Welcome ".concat(employee.name, ". You are clocked in. Enjoy your day!"));
            return;
        }
        else {
            console.log("false");
            return;
        }
    }
}
checkEmployment(employee3);
