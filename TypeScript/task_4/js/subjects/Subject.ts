/// <reference path="Teacher.ts" />

namespace Subjects {
    export class Subject {
        teacher: Teacher;

        setTeacher(self: Subject, teacher: Teacher) {
            self.teacher = teacher
        }
    }
}