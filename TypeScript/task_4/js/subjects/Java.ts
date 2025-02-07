/// <reference path="Teacher.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number,
    }
    export class Java extends Subject {
        getRequirements() {
            return 'Here is the list of requirements for Java';
        }
        getAvailableTeacher(self: Java) {
            if (this.teacher && self.teacher.experienceTeachingJava > 0) {
                return `Available Teacher: ${self.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}