
type employees = Array<number>;
let staffIds: employees = [1, 2, 3];
interface Employee {
	id: number;
	name: string;
	position: string;
	address: string;
}
const employee1: Employee = {
	id: 1,
	name: "Dan",
	position: "trainee",
	address: "PH"
}
const employee2: Employee = {
	id: 3,
	name: "Steph",
	position: "trainee",
	address: "PH"
}
const employee3: Employee = {
	id: 5,
	name: "Cadz",
	position: "trainee",
	address: "PH"
}
console.log(staffIds.length);
function checkEmployment(employee): string {
	console.log('Checking if employee credentials are valid:')
	for(let i = 0; i <= staffIds.length-1; i++){
		console.log(i);
		if(employee.id == staffIds[i]){
			console.log("true");
			console.log(`Welcome ${employee.name}. You are clocked in. Enjoy your day!`);
			return
		} else {
			console.log("false");
			return
		}
	}
}

checkEmployment(employee3);


