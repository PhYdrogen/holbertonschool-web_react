interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,

    [extra: string]: any,
}

const t: Teacher = {
    firstName: "Gabriel",
    lastName: "Hyd",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    contract: true,
    location: "Toulouse"
}
console.log(t)


interface Directors extends Teacher {
    numberOfReports: number,
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);

interface printTeacherInterface {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherInterface = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
}
console.log(printTeacher("Jhon", "Doe"));

interface StudentInterface {
    firstName: string;
    lastName: string;

    workOnHomework(): string;
    displayName(): string;
}

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentInterface;
}

const Student: StudentConstructor = class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return "Currently working";
    }

    displayName() {
        return this.firstName;
    }

}

let stu = new Student("Red", "Godot")