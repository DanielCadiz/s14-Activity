
type employees = Array<number>;
let staffIds: employees = [1, 2, 3];
interface Employee {
	id: number;
	name: string;
	position: string;
	address: string;
}
const employee: Employee = {
	id: 1,
	name: "Dan",
	position: "trainee",
	address: "PH"
}
console.log(employee);
function checkEmployment(employee): string {
	console.log('Checking if employee credentials are valid:')
	for(let i = 0; i <= staffIds.length-1; i++){
		if(employee.id == staffIds[i]){
			return true.toString();
		} else {
			return false.toString();
		}
	}
}

checkEmployment(employee);


