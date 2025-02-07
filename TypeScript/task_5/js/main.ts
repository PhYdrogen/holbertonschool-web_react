interface MajorCredits {
    credits: number,
    _Mabrand: any
}

interface MinorCredits {
    credits: number,
    _Mibrand: any
}

function sumMajorCredits(subject1: number, subject2: number) {
    return {credits: (subject1 + subject2)} as MajorCredits;
}

function sumMinorCredits(subject1: number, subject2: number) {
    return {credits: (subject1 + subject2)} as MinorCredits;
}
