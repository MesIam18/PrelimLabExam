// Computes weighted final grade: Quiz 25%, Laboratory 35%, Exam 40%
export function calculateFinalGrade(student) {
    const { quiz, lab, exam } = student; // Object destructuring requirement
    return (quiz * 0.25) + (lab * 0.35) + (exam * 0.40);
}

// Classifies academic status using conditional logic[cite: 1]
export function getAcademicStatus(grade) {
    if (grade >= 90) {
        return "Excellent";
    } else if (grade >= 75) {
        return "Passed";
    } else if (grade >= 70) {
        return "Needs Improvement";
    } else {
        return "Failed";
    }
}

// Case-insensitive search using array method and arrow callback[cite: 1]
export function searchStudents(students, query) {
    const cleanQuery = query.toLowerCase().trim();
    return students.filter(student => student.name.toLowerCase().includes(cleanQuery));
}

// Filter students by block[cite: 1]
export function filterStudentsByBlock(students, block) {
    if (block === "All") return students;
    return students.filter(student => student.block === block);
}

// Filter students by academic status[cite: 1]
export function filterStudentsByStatus(students, status) {
    if (status === "All") return students;
    return students.filter(student => getAcademicStatus(calculateFinalGrade(student)) === status);
}

// Calculates class average using reduce()[cite: 1]
export function calculateClassAverage(students) {
    if (students.length === 0) return 0;
    const totalSum = students.reduce((acc, student) => acc + calculateFinalGrade(student), 0);
    return totalSum / students.length;
}

// Counts passing students (grade >= 75)[cite: 1]
export function countPassingStudents(students) {
    return students.filter(student => calculateFinalGrade(student) >= 75).length;
}

// Finds the top performing student[cite: 1]
export function getTopStudent(students) {
    if (students.length === 0) return null;
    return students.reduce((max, student) => {
        return calculateFinalGrade(student) > calculateFinalGrade(max) ? student : max;
    }, students[0]);
}

// Module 2 Control Structure requirement using switch(true)[cite: 1]
export function getPerformanceRemark(grade) {
    switch (true) {
        case (grade >= 90):
            return "Outstanding";
        case (grade >= 85):
            return "Very Good";
        case (grade >= 80):
            return "Good";
        case (grade >= 75):
            return "Satisfactory";
        default:
            return "Unsatisfactory";
    }
}