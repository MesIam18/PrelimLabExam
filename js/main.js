import { students } from './students.js';
import { 
    searchStudents, 
    filterStudentsByBlock, 
    filterStudentsByStatus 
} from './gradeUtils.js';
import { 
    displayStudents, 
    displaySummary, 
    displayMessage 
} from './display.js';

// DOM Element References using required IDs[cite: 1]
const searchInput = document.getElementById('searchInput');
const blockFilter = document.getElementById('blockFilter');
const statusFilter = document.getElementById('statusFilter');
const applyBtn = document.getElementById('applyBtn');
const resetBtn = document.getElementById('resetBtn');

// Primary data pipeline handling combined processing[cite: 1]
function processAndRender() {
    const query = searchInput.value;
    const selectedBlock = blockFilter.value;
    const selectedStatus = statusFilter.value;

    let filtered = searchStudents(students, query);
    filtered = filterStudentsByBlock(filtered, selectedBlock);
    filtered = filterStudentsByStatus(filtered, selectedStatus);

    displayStudents(filtered);
    displaySummary(filtered);
}

// Reset application state[cite: 1]
function handleReset() {
    searchInput.value = '';
    blockFilter.value = 'All';
    statusFilter.value = 'All';
    displayMessage('');
    
    displayStudents(students);
    displaySummary(students);
}

// Register Event Listeners without inline attributes[cite: 1]
function init() {
    applyBtn.addEventListener('click', processAndRender);
    resetBtn.addEventListener('click', handleReset);
    searchInput.addEventListener('input', processAndRender);
    blockFilter.addEventListener('change', processAndRender);
    statusFilter.addEventListener('change', processAndRender);

    // Initial render on load[cite: 1]
    displayStudents(students);
    displaySummary(students);
}

// Run application
init();