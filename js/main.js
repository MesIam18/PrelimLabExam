import { students } from './students.js';
import { 
  searchStudents, 
  filterStudentsByBlock, 
  filterStudentsByStatus 
} from './gradeUtils.js';
import { 
  displayStudents, 
  displaySummary 
} from './display.js';

const searchInput = document.getElementById("searchInput");
const blockFilter = document.getElementById("blockFilter");
const statusFilter = document.getElementById("statusFilter");
const applyBtn = document.getElementById("applyBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDashboard() {
  const query = searchInput.value;
  const selectedBlock = blockFilter.value;
  const selectedStatus = statusFilter.value;

  let filtered = searchStudents(students, query);
  filtered = filterStudentsByBlock(filtered, selectedBlock);
  filtered = filterStudentsByStatus(filtered, selectedStatus);

  displayStudents(filtered);
  displaySummary(filtered);
}

function handleReset() {
  searchInput.value = "";
  blockFilter.value = "All";
  statusFilter.value = "All";

  displayStudents(students);
  displaySummary(students);
}

document.addEventListener("DOMContentLoaded", () => {
  displayStudents(students);
  displaySummary(students);

  applyBtn.addEventListener("click", updateDashboard);
  resetBtn.addEventListener("click", handleReset);

  searchInput.addEventListener("input", updateDashboard);
  blockFilter.addEventListener("change", updateDashboard);
  statusFilter.addEventListener("change", updateDashboard);
});