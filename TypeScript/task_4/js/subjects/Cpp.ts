/// <reference path="Teacher.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingC?: number,
    }
    export class Cpp extends Subject {
        getRequirements() {
            return 'Here is the list of requirements for Cpp';
        }

        getAvailableTeacher(self: Cpp) {
            if (this.teacher && self.teacher.experienceTeachingC > 0) {
                return `Available Teacher: ${self.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}