export function calculateFinalGrade(student) {
  const { quiz, lab, exam } = student;
  return (quiz * 0.25) + (lab * 0.35) + (exam * 0.40);
}

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

export function searchStudents(studentsArray, query) {
  if (!query) return studentsArray;
  const cleanQuery = query.toLowerCase().trim();
  return studentsArray.filter(student => student.name.toLowerCase().includes(cleanQuery));
}

export function filterStudentsByBlock(studentsArray, block) {
  if (block === "All") return studentsArray;
  return studentsArray.filter(student => student.block === block);
}

export function filterStudentsByStatus(studentsArray, status) {
  if (status === "All") return studentsArray;
  return studentsArray.filter(student => {
    const grade = calculateFinalGrade(student);
    return getAcademicStatus(grade) === status;
  });
}

export function calculateClassAverage(studentsArray) {
  if (!studentsArray || studentsArray.length === 0) return 0;
  const totalSum = studentsArray.reduce((acc, student) => acc + calculateFinalGrade(student), 0);
  return totalSum / studentsArray.length;
}

export function countPassingStudents(studentsArray) {
  return studentsArray.filter(student => calculateFinalGrade(student) >= 75).length;
}

export function getTopStudent(studentsArray) {
  if (!studentsArray || studentsArray.length === 0) return null;
  return studentsArray.reduce((top, current) => {
    return calculateFinalGrade(current) > calculateFinalGrade(top) ? current : top;
  }, studentsArray[0]);
}