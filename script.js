var staffIds = [1, 2, 3];
var employee = {
    id: 1,
    name: "Dan",
    position: "trainee",
    address: "PH"
};
console.log(employee);
function checkEmployment(employee) {
    console.log('Checking if employee credentials are valid:');
    for (var i = 0; i <= staffIds.length - 1; i++) {
        if (employee.id == staffIds[i]) {
            return true.toString();
        }
        else {
            return false.toString();
        }
    }
}
checkEmployment(employee);
