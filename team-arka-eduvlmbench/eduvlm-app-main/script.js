// Main JavaScript for EduVLM-Bench frontend
let leaderboardData = [];
const spreadsheetURL = 'https://docs.google.com/spreadsheets/d/1BiHQZ5-DpgB_RlrxC-w0q_zxD9Tj-YxYpG9vU01IPD8/gviz/tq?sheet=Sheet1';

console.log('Loaded script.js version: 2025-07-05-v6'); // Updated version for tracking

// Fetch leaderboard data from Google Sheets
fetch(spreadsheetURL)
  .then(res => res.text())
  .then(rep => {
    const json = JSON.parse(rep.substring(47).slice(0, -2));
    const rows = json.table.rows;

    leaderboardData = rows.map((row, index) => {
  return {
    id: index + 1,
    rank: index + 1,
    modelName: row.c[0]?.v || 'N/A',
    modelSize: row.c[1]?.v || '-',
    modelType: row.c[2]?.v || '-',
    detectionAccuracy: parseFloat((row.c[3]?.v || 0).toFixed(2)),
    notes: row.c[4]?.v || '-',
    overallScore: parseFloat((row.c[3]?.v || 0).toFixed(2)) // Use detection accuracy as score
  };
});

    // Sort by overallScore descending
    leaderboardData.sort((a, b) => b.overallScore - a.overallScore);

    // Assign ranks after sorting
    leaderboardData.forEach((item, index) => {
      item.rank = index + 1;
    });
    populateFilterOptions();
    renderLeaderboard();
  })
  .catch(error => {
    console.error('Error loading spreadsheet:', error);
    showNotification('Failed to load leaderboard data from Google Sheets.', 'error');
  });

let currentSort = { column: 'rank', direction: 'asc' };
let currentFilters = { modelType: 'all', size: 'all' };

// Dynamically populate filter options
function populateFilterOptions() {
  const modelFilter = document.getElementById('model-filter');
  const sizeFilter = document.getElementById('size-filter');

  const modelTypes = new Set();
  const modelSizes = new Set();

  leaderboardData.forEach(item => {
    if (item.modelType) modelTypes.add(item.modelType);
    if (item.modelSize) modelSizes.add(item.modelSize);
  });

  if (modelFilter) {
    modelFilter.innerHTML = `<option value="all">All</option>` +
      Array.from(modelTypes).map(type => `<option value="${type}">${type}</option>`).join('');
    modelFilter.addEventListener('change', function(e) {
      currentFilters.modelType = e.target.value;
      renderLeaderboard();
    });
  }

  if (sizeFilter) {
    sizeFilter.innerHTML = `<option value="all">All</option>` +
      Array.from(modelSizes).map(size => `<option value="${size}">${size}</option>`).join('');
    sizeFilter.addEventListener('change', function(e) {
      currentFilters.size = e.target.value;
      renderLeaderboard();
    });
  }
}

function filterData(data) {
  return data.filter(entry => {
    const matchesType = currentFilters.modelType === 'all' || entry.modelType.toLowerCase() === currentFilters.modelType.toLowerCase();
    const matchesSize = currentFilters.size === 'all' || entry.modelSize.trim().toLowerCase() === currentFilters.size.toLowerCase();
    return matchesType && matchesSize;
  });
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
  // Update current year
  const yearElements = document.querySelectorAll('#current-year');
  if (yearElements.length > 0) {
    yearElements.forEach(el => el.textContent = new Date().getFullYear());
  }

  // Load annotations if on admin panel
  if (document.getElementById('admin-annotations')) {
    loadAnnotations();
  }

  // Add click handler for prerequisite detection button
  const prereqBtn = document.getElementById('prereq-detection-btn');
  if (prereqBtn) {
    prereqBtn.addEventListener('click', function(e) {
      console.log('Prerequisite detection button clicked, navigating to prerequisite_detection.html');
      window.location.href = 'prerequisite_detection.html';
    });
  }

  // Leaderboard filters
  if (document.getElementById('leaderboard-body') || document.getElementById('mobile-leaderboard')) {
    renderLeaderboard();

    const modelFilter = document.getElementById('model-filter');
    const sizeFilter = document.getElementById('size-filter');

    if (modelFilter) {
      modelFilter.addEventListener('change', function(e) {
        currentFilters.modelType = e.target.value;
        renderLeaderboard();
      });
    }

    if (sizeFilter) {
      sizeFilter.addEventListener('change', function(e) {
        currentFilters.size = e.target.value;
        renderLeaderboard();
      });
    }
  }

  // Add random question loader
  const loadRandomBtn = document.getElementById('loadRandomBtn');
  if (loadRandomBtn) {
    loadRandomBtn.addEventListener('click', async () => {
      try {
        const response = await fetch(`/api/questions?random=1&t=${new Date().getTime()}`, {
          credentials: 'include'
        });
        console.log('Random question fetch response:', response.status); // Debug log
        if (response.ok) {
          const data = await response.json();
          const questionInput = document.getElementById('questionInput');
          const correctAnswerInput = document.getElementById('correctAnswerInput');
          const wrongAnswerInput = document.getElementById('wrongAnswerInput');
          const questionDisplay = document.getElementById('questionDisplay');
          const notification = document.getElementById('notification');

          if (questionInput && correctAnswerInput && wrongAnswerInput && questionDisplay && data[0]) {
            questionInput.value = data[0].question || '';
            correctAnswerInput.value = data[0].correct_answer || '';
            wrongAnswerInput.value = data[0].wrong_answer || '';
            questionDisplay.textContent = data[0].question || 'No question loaded';
            showNotification('Example question loaded successfully!', 'success');
          } else {
            throw new Error('Invalid data format or missing elements');
          }
        } else {
          console.error('Failed to load random question:', await response.json());
          showNotification('Failed to load random question.', 'error');
        }
      } catch (error) {
        console.error('Error loading random question:', error);
        showNotification('Error loading random question.', 'error');
      }
    });
  }

  // Add prerequisite detection with Gemini Flash
  const detectBtn = document.getElementById('detectBtn');
  if (detectBtn) {
    detectBtn.addEventListener('click', async () => {
      const questionInput = document.getElementById('questionInput').value.trim();
      const questionDisplay = document.getElementById('questionDisplay').textContent.trim();
      const question = questionInput || questionDisplay || '';
      const correctAnswer = document.getElementById('correctAnswerInput').value || '';
      const wrongAnswer = document.getElementById('wrongAnswerInput').value || '';
      if (!question) {
        showNotification('Please enter a question or load a random one.', 'error');
        return;
      }
      await detectPrerequisites(question, correctAnswer, wrongAnswer);
    });
  }

  // Add event listener for report generation button
  const generateReportBtn = document.getElementById('generate-report-btn');
  if (generateReportBtn) {
    generateReportBtn.addEventListener('click', generateReport);
  }
});

// Function to load annotations for admin panel
async function loadAnnotations() {
  const tableBody = document.getElementById('admin-annotations-body');
  if (!tableBody) {
    console.log('Table body not found. Not on admin page.');
    return;
  }

  try {
    const response = await fetch('/api/admin/annotations', {
      method: 'GET',
      credentials: 'include'
    });
    console.log('Annotations fetch response:', response.status, new Date().toISOString()); // Debug log
    if (!response.ok) {
      throw new Error(`Failed to fetch annotations: ${response.status}`);
    }
    const annotations = await response.json();
    console.log('Annotations data:', annotations); // Debug log

    if (!Array.isArray(annotations) || annotations.length === 0) {
      tableBody.innerHTML = '<tr><td colspan="5" class="py-3 px-4 text-center text-slate-grey">No annotations found.</td></tr>';
      showNotification('No annotations available.', 'info');
      return;
    }

    renderAnnotations(annotations);
  } catch (error) {
    console.error('Error loading annotations:', error);
    tableBody.innerHTML = '<tr><td colspan="5" class="py-3 px-4 text-center text-red-500">Error loading annotations. Please try again.</td></tr>';
    showNotification('Failed to load annotations.', 'error');
  }
}

// Function to render annotations in admin panel
function renderAnnotations(annotations) {
  const tableBody = document.getElementById('admin-annotations-body');
  if (!tableBody) {
    console.error('admin-annotations-body not found');
    return;
  }

  tableBody.innerHTML = ''; // Clear existing content
  annotations.forEach(annotation => {
    const row = document.createElement('tr');
    row.className = 'border-t border-gray-200';
    row.innerHTML = `
      <td class="py-3 px-4 text-sm text-dark-slate">${annotation.question_id || 'N/A'}</td>
      <td class="py-3 px-4 text-sm text-dark-slate">${annotation.question || 'N/A'}</td>
      <td class="py-3 px-4 text-sm text-dark-slate">${annotation.annotated_prerequisite || 'N/A'}</td>
      <td class="py-3 px-4 text-sm text-dark-slate">${annotation.annotator_name || 'N/A'}</td>
      <td class="py-3 px-4 text-sm text-dark-slate">${new Date(annotation.createdAt).toLocaleString() || 'N/A'}</td>
    `;
    tableBody.appendChild(row);
  });
  console.log('Annotations rendered:', annotations.length, new Date().toISOString()); // Debug log
}

// Function to generate and download report
async function generateReport() {
  try {
    const response = await fetch('/api/admin/report', {
      method: 'GET',
      credentials: 'include'
    });
    console.log('Report fetch response:', response.status, new Date().toISOString()); // Debug log
    if (!response.ok) {
      throw new Error(`Failed to generate report: ${response.status}`);
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'annotations_report.csv';
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
    showNotification('Report downloaded successfully!', 'success');
  } catch (error) {
    console.error('Error generating report:', error);
    showNotification('Failed to generate report.', 'error');
  }
}

// Toggle mobile menu
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const icon = document.getElementById('mobile-menu-icon');
  if (mobileMenu && icon) {
    mobileMenu.classList.toggle('hidden');
    icon.innerHTML = mobileMenu.classList.contains('hidden')
      ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>'
      : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
  }
}

// Download paper
function downloadPaper() {
  window.location.href = 'https://drive.google.com/file/d/1yjxI3PP3NmfFNHDrGOrbJdIMhxfzQHRH/view?usp=sharing';
}

// View code
function viewCode() {
  window.open('https://github.com/placeholder/eduvlm-bench', '_blank');
}

// Show citation modal
function showCitation() {
  const modal = document.getElementById('citation-modal');
  if (modal) modal.classList.remove('hidden');
}

// Hide citation modal
function hideCitation() {
  const modal = document.getElementById('citation-modal');
  if (modal) modal.classList.add('hidden');
}

// Copy citation to clipboard
function copyCitation() {
  const citationText = document.getElementById('citation-text');
  if (citationText && navigator.clipboard) {
    navigator.clipboard.writeText(citationText.textContent).then(() => {
      showNotification('Citation copied to clipboard!', 'success');
    }).catch(() => {
      showNotification('Failed to copy citation.', 'error');
    });
  } else if (citationText) {
    fallbackCopyTextToClipboard(citationText.textContent);
  }
}

// Fallback for copying text
function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showNotification('Citation copied to clipboard!', 'success');
  } catch {
    showNotification('Failed to copy citation. Please copy manually.', 'error');
  }
  document.body.removeChild(textArea);
}

// Show notification
function showNotification(message, type = 'info') {
  let notification = document.getElementById('notification');
  if (!notification) {
    notification = document.createElement('div');
    notification.id = 'notification';
    notification.className = 'notification';
    document.body.appendChild(notification);
  }
  notification.textContent = message;
  notification.className = `notification ${type} show`;
  setTimeout(() => {
    notification.classList.remove('show');
  }, 4000); // Increased from 3000 to 4000 ms
}

// Switch to signup modal
function switchToSignup() {
  const loginModal = document.getElementById('login-modal');
  const signupModal = document.getElementById('signup-modal');
  if (loginModal) loginModal.classList.add('hidden');
  if (signupModal) signupModal.classList.remove('hidden');
}

// Switch to login modal
function switchToLogin() {
  const signupModal = document.getElementById('signup-modal');
  const loginModal = document.getElementById('login-modal');
  if (signupModal) signupModal.classList.add('hidden');
  if (loginModal) loginModal.classList.remove('hidden');
}

// Sort leaderboard data
function sortData(data, column, direction) {
  return [...data].sort((a, b) => {
    const aVal = a[column];
    const bVal = b[column];
    if (typeof aVal === 'number') return direction === 'asc' ? aVal - bVal : bVal - aVal;
    return direction === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
  });
}

// Sort table
function sortTable(column) {
  if (currentSort.column === column) {
    currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
  } else {
    currentSort.column = column;
    currentSort.direction = 'asc';
  }
  renderLeaderboard();
}

// Reset leaderboard filters
function resetFilters() {
  currentFilters.modelType = 'all';
  currentFilters.size = 'all';
  currentSort = { column: 'rank', direction: 'asc' };
  const modelFilter = document.getElementById('model-filter');
  const sizeFilter = document.getElementById('size-filter');
  if (modelFilter) modelFilter.value = 'all';
  if (sizeFilter) sizeFilter.value = 'all';
  renderLeaderboard();
}

// Get rank badge class
function getRankBadgeClass(rank) {
  if (rank === 1) return 'rank-badge rank-1';
  if (rank === 2 || rank === 3) return 'rank-badge rank-2';
  return 'rank-badge rank-other';
}

// Get score class
function getScoreClass(score, isOverall = false) {
  if (isOverall && score >= 35) return 'score-overall-excellent';
  if (score >= 30) return 'score-excellent';
  if (score >= 20) return 'score-good';
  return 'score-average';
}

// Update sort icons
function updateSortIcons() {
  const sortIcons = document.querySelectorAll('.sort-icon');
  if (sortIcons) {
    sortIcons.forEach(icon => {
      icon.className = 'sort-icon';
      icon.textContent = '↕';
    });
  }
  const activeIcon = document.getElementById(currentSort.column + '-sort');
  if (activeIcon) {
    activeIcon.className = `sort-icon ${currentSort.direction}`;
    activeIcon.textContent = currentSort.direction === 'asc' ? '↑' : '↓';
  }
}

function renderLeaderboard() {
  const filtered = filterData(leaderboardData);
  const sorted = sortData(filtered, currentSort.column, currentSort.direction);

  const tbody = document.getElementById('leaderboard-body');
  if (tbody) {
    tbody.innerHTML = '';
    sorted.forEach(entry => {
      const row = document.createElement('tr');
      row.className = 'hover:bg-gray-50 transition-colors';
      row.innerHTML = `
  <td><span class="${getRankBadgeClass(entry.rank)}">${entry.rank}</span></td>
  <td>${entry.modelName}</td>
  <td>${entry.modelSize}</td>
  <td>${entry.modelType}</td>
  <td><span class="${getScoreClass(entry.detectionAccuracy)}">${entry.detectionAccuracy}%</span></td>
  <td>${entry.notes}</td>
`;

      tbody.appendChild(row);
    });
  }

  const mobileContainer = document.getElementById('mobile-leaderboard');
  if (mobileContainer) {
    mobileContainer.innerHTML = '';
    sorted.forEach(entry => {
      const card = document.createElement('div');
      card.className = 'mobile-card';
      card.innerHTML = `
        <div class="mobile-card-header">
          <div>
            <span class="${getRankBadgeClass(entry.rank)}">${entry.rank}</span>
            <div><strong>${entry.modelName}</strong></div>
            <div>${entry.modelSize} • ${entry.modelType}</div>
          </div>
          <div>
            <div class="${getScoreClass(entry.detectionAccuracy, true)}">${entry.detectionAccuracy}%</div>
            <div>Accuracy</div>
          </div>
        </div>
        <div class="mobile-card-metrics">
          <div><div>Notes</div><div>${entry.notes}</div></div>
          <div><div>Notes</div><div>${entry.notes}</div></div>
        </div>
      `;

      mobileContainer.appendChild(card);
    });
  }

  updateSortIcons();
}

// Detect prerequisites using Gemini Flash
async function detectPrerequisites(question, correctAnswer, wrongAnswer) {
  console.log('Detecting prerequisites for:', { question, correctAnswer, wrongAnswer }, new Date().toISOString()); // Debug log
  const prerequisitesDisplay = document.getElementById('prerequisitesDisplay');
  if (!prerequisitesDisplay) {
    console.error('prerequisitesDisplay element not found in DOM');
    showNotification('UI error: prerequisitesDisplay element not found.', 'error');
    return;
  }
  prerequisitesDisplay.textContent = 'Loading prerequisites...';
  console.log('Cleared prerequisitesDisplay at:', new Date().toISOString()); // Debug log
  try {
    const response = await fetch('/api/detect-prereqs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ question, correct_answer: correctAnswer, wrong_answer: wrongAnswer })
    });
    console.log('Prerequisite detection response:', response.status, new Date().toISOString()); // Debug log
    if (response.ok) {
      const data = await response.json();
      console.log('Prerequisite detection data:', data); // Debug log
      if (!data || !data.all_prerequisites || !('single_missing_prerequisite' in data)) {
        console.error('Invalid response structure:', data);
        showNotification('Invalid response from server.', 'error');
        prerequisitesDisplay.textContent = 'All Prerequisites: None, Missing Prerequisite: None';
        return;
      }
      const allPrereqs = Array.isArray(data.all_prerequisites) && data.all_prerequisites.length > 0 
        ? data.all_prerequisites.join(', ')
        : 'None';
      const missingPrereq = typeof data.single_missing_prerequisite === 'string' && data.single_missing_prerequisite.trim() !== '' && data.single_missing_prerequisite !== 'None'
        ? data.single_missing_prerequisite
        : 'None';
      console.log('Rendering prerequisites:', { allPrereqs, missingPrereq }, new Date().toISOString()); // Debug log
      prerequisitesDisplay.innerHTML = `<div>All Prerequisites: ${allPrereqs}</div><div>Missing Prerequisite: ${missingPrereq}</div>`; // Fixed typo from prerequisites_Displaysplay
      const questionInput = document.getElementById('questionInput');
      if (questionInput && questionInput.value) {
        questionInput.value = '';
        document.getElementById('correctAnswerInput').value = '';
        document.getElementById('wrongAnswerInput').value = '';
      }
      showNotification('Prerequisites detected successfully!', 'success');
    } else {
      const errorData = await response.json();
      console.error('Prerequisite detection failed:', errorData);
      showNotification(errorData.error || 'Failed to detect prerequisites.', 'error');
      prerequisitesDisplay.innerHTML = '<div>All Prerequisites: None</div><div>Missing Prerequisite: None</div>';
    }
  } catch (error) {
    console.error('Error detecting prerequisites:', error);
    showNotification('Error detecting prerequisites. Please try again.', 'error');
    prerequisitesDisplay.innerHTML = '<div>All Prerequisites: None</div><div>Missing Prerequisite: None</div>';
  }
}

// Handle modal close on click outside
document.addEventListener('click', function(e) {
  const modal = document.getElementById('citation-modal');
  if (modal && e.target === modal) hideCitation();
});

// Handle modal close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') hideCitation();
});