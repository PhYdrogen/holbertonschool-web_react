interface DirectorInterface {
    workFromHome(): string;

    getCoffeeBreak(): string;

    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;

    getCoffeeBreak(): string;

    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string) {
    if (typeof salary == 'string') {
        salary = parseInt((salary.match('\d+'))[0])
        if (isNaN(salary)) {
            return Error('Not a number.')
        }
    }
    if (salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

/**
 * console.log(createEmployee(200));
 * Teacher
 * console.log(createEmployee(1000));
 * Director
 * console.log(createEmployee('$500'));
 * Director
 */

function isDirector(employee: Teacher | Director) {
    return employee instanceof Director;
}

function executeWork(employee: Teacher | Director) {
    if (isDirector(employee)) {
        employee.workDirectorTasks();
    } else {
        employee.workTeacherTasks();
    }
}

/*
 * executeWork(createEmployee(200));
 * Getting to work
 * executeWork(createEmployee(1000));
 * Getting to director tasks
 */
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else {
        return 'Teaching History';
    }
}

/*
 * teachClass('Math');
 * Teaching Math
 * teachClass('History');
 * Teaching History
 */
