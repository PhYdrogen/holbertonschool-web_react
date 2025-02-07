/// <reference path="Teacher.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }
    export class React extends Subject {
        teacher: Teacher;

        getRequirements() {
            return 'Here is the list of requirements for React';
        }

        getAvailableTeacher(self: React) {
            if (this.teacher && self.teacher.experienceTeachingReact > 0) {
                return `Available Teacher: ${self.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }

}