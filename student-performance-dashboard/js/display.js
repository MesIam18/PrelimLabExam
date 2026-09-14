import { 
    calculateFinalGrade, 
    getAcademicStatus, 
    getPerformanceRemark, 
    calculateClassAverage, 
    countPassingStudents, 
    getTopStudent 
} from './gradeUtils.js';

// Displays cards in studentList container[cite: 1]
export function displayStudents(students) {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';

    if (students.length === 0) {
        displayMessage("No students found"); // Render exact no-results text[cite: 1]
        return;
    }

    displayMessage(""); // Clear message when results are found

    students.forEach(student => {
        // Object destructuring[cite: 1]
        const { id, name, block, quiz, lab, exam } = student;
        const finalGrade = calculateFinalGrade(student);
        const status = getAcademicStatus(finalGrade);
        const remark = getPerformanceRemark(finalGrade);

        const card = document.createElement('article');
        card.className = 'student-card'; // Required class[cite: 1]
        card.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Block:</strong> ${block}</p>
            <p><strong>Quiz:</strong> ${quiz} | <strong>Lab:</strong> ${lab} | <strong>Exam:</strong> ${exam}</p>
            <p><strong>Final Grade:</strong> ${finalGrade.toFixed(2)}</p>
            <p><strong>Status:</strong> ${status}</p>
            <p><strong>Remark:</strong> ${remark}</p>
        `;
        studentList.appendChild(card);
    });
}

// Updates summary metrics[cite: 1]
export function displaySummary(students) {
    const classAvgElem = document.getElementById('classAverage');
    const passingCountElem = document.getElementById('passingCount');
    const displayedCountElem = document.getElementById('displayedCount');
    const topStudentElem = document.getElementById('topStudent');

    displayedCountElem.textContent = students.length;
    classAvgElem.textContent = calculateClassAverage(students).toFixed(2);
    passingCountElem.textContent = countPassingStudents(students);

    const topStudent = getTopStudent(students);
    if (topStudent) {
        const topGrade = calculateFinalGrade(topStudent).toFixed(2);
        topStudentElem.textContent = `${topStudent.name} (${topGrade})`;
    } else {
        topStudentElem.textContent = "None";
    }
}

// Renders feedback message[cite: 1]
export function displayMessage(message) {
    const messageArea = document.getElementById('messageArea');
    messageArea.textContent = message;
}