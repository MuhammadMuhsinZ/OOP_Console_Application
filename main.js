import inquirer from "inquirer";
class Student {
    constructor(N) {
        this.name = N;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    let loop = true;
    do {
        let ans = await inquirer.prompt({
            type: `list`,
            message: "What to want talk ",
            name: "select",
            choices: ["self", "Student"]
        });
        if (ans.select == "self") {
            console.log("i talk to myself");
            console.log("Iam very well");
        }
        if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                type: `input`,
                message: "which student to talk you",
                name: "Student"
            });
            const student = persons.students.find(val => val.name == ans.Student);
            if (!student) {
                const name = new Student(ans.Student);
                persons.addStudent(name);
                console.log(`Hello ${name.name} i am fine`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello ${student.name} i am fine ........... Student i here `);
                console.log(persons.students);
            }
        }
        ;
        let chat = await inquirer.prompt({
            type: `list`,
            name: "ChatCountine",
            message: "are you continue to chat",
            choices: ["Yes", "No"]
        });
        if (chat == "Yes") {
            console.log(programStart(persons));
        }
        if (chat == "No") { }
    } while (loop);
};
programStart(persons);
