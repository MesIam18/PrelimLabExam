import { 
  calculateFinalGrade, 
  getAcademicStatus, 
  getPerformanceRemark, 
  calculateClassAverage, 
  countPassingStudents, 
  getTopStudent 
} from './gradeUtils.js';

export function displayMessage(message) {
  const messageArea = document.getElementById("messageArea");
  if (messageArea) {
    messageArea.textContent = message;
  }
}

export function displayStudents(studentsArray) {
  const studentList = document.getElementById("studentList");
  studentList.innerHTML = "";

  if (!studentsArray || studentsArray.length === 0) {
    displayMessage("No students found");
    return;
  }

  displayMessage("");

  studentsArray.forEach(student => {
    const { id, name, block, quiz, lab, exam } = student;
    const finalGrade = calculateFinalGrade(student);
    const status = getAcademicStatus(finalGrade);
    const remark = getPerformanceRemark(finalGrade);

    const card = document.createElement("article");
    card.className = "student-card";
    card.setAttribute("data-id", id);

    card.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Block:</strong> ${block}</p>
      <div class="scores">
        <span><strong>Quiz:</strong> ${quiz}</span> | 
        <span><strong>Lab:</strong> ${lab}</span> | 
        <span><strong>Exam:</strong> ${exam}</span>
      </div>
      <p><strong>Final Grade:</strong> ${finalGrade.toFixed(2)}</p>
      <p><strong>Academic Status:</strong> <span class="status-${status.toLowerCase().replace(/\s+/g, '-')}">${status}</span></p>
      <p><strong>Remark:</strong> ${remark}</p>
    `;

    studentList.appendChild(card);
  });
}

export function displaySummary(studentsArray) {
  const displayedCountEl = document.getElementById("displayedCount");
  const classAverageEl = document.getElementById("classAverage");
  const passingCountEl = document.getElementById("passingCount");
  const topStudentEl = document.getElementById("topStudent");

  const totalCount = studentsArray.length;
  const avgGrade = calculateClassAverage(studentsArray);
  const passing = countPassingStudents(studentsArray);
  const top = getTopStudent(studentsArray);

  if (displayedCountEl) displayedCountEl.textContent = totalCount;
  if (classAverageEl) classAverageEl.textContent = avgGrade.toFixed(2);
  if (passingCountEl) passingCountEl.textContent = passing;
  
  if (topStudentEl) {
    if (top) {
      const topGrade = calculateFinalGrade(top).toFixed(2);
      topStudentEl.textContent = `${top.name} (${topGrade})`;
    } else {
      topStudentEl.textContent = "N/A";
    }
  }
}