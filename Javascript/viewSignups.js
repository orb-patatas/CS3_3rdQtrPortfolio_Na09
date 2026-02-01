
const CLUB_DISPLAY_NAMES = {
    volant: "Volant",
    himig: "Himig Agham",
    bake: "Bake Club",
    astrosoc: "Astrosoc",
    math: "Math Club",
    debate: "Debate Society"
};

document.addEventListener('DOMContentLoaded', () => {
    const filterSelect = document.getElementById('clubFilter');
    const resultsContainer = document.getElementById('resultsContainer');
    
    renderSignups('all');
    
    if (filterSelect) {
        filterSelect.addEventListener('change', (e) => {
            renderSignups(e.target.value);
        });
    }
});

function renderSignups(selectedClub) {
    const resultsContainer = document.getElementById('resultsContainer');
    const totalDisplay = document.getElementById('totalDisplay');
    
    // Retrieve signups from localStorage
    const allSignups = JSON.parse(localStorage.getItem('clubSignups')) || [];
    
    // empty storage case
    if (allSignups.length === 0) {
        resultsContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📋</div>
                <h2>No Sign-ups Found</h2>
                <p>Be the first to join a club! Submit your application from the sign-up page.</p>
            </div>
        `;
        totalDisplay.textContent = "Total Sign-ups: 0";
        return;
    }
    
    // filter signups
    let filteredSignups = [];
    if (selectedClub === 'all') {
        filteredSignups = [...allSignups];
    } else {
        filteredSignups = allSignups.filter(signup => signup.club === selectedClub);
    }
    
    // total count display
    const clubName = selectedClub === 'all' 
        ? 'All Clubs' 
        : (CLUB_DISPLAY_NAMES[selectedClub] || selectedClub);
    totalDisplay.textContent = `Total Sign-ups for ${clubName}: ${filteredSignups.length}`;
    
    // no results
    if (filteredSignups.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <div class="empty-icon">🔍</div>
                <h2>No Sign-ups for ${clubName}</h2>
                <p>Students haven't joined this club yet. Check another club or encourage sign-ups!</p>
            </div>
        `;
        return;
    }
    
    // submission time 
    filteredSignups.sort((a, b) => 
        new Date(b.submittedAt) - new Date(a.submittedAt)
    );
    
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Full Name</th>
                    <th>Grade Level</th>
                    <th>Club</th>
                    <th>Email</th>
                    <th>Submitted</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    filteredSignups.forEach(signup => {
        const formattedDate = new Date(signup.submittedAt).toLocaleString('en-PH', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        tableHTML += `
            <tr>
                <td>${escapeHtml(signup.studentID)}</td>
                <td>${escapeHtml(signup.fullName)}</td>
                <td>Grade ${escapeHtml(signup.gradeLevel)}</td>
                <td>${CLUB_DISPLAY_NAMES[signup.club] || escapeHtml(signup.club)}</td>
                <td>${escapeHtml(signup.email)}</td>
                <td>${formattedDate}</td>
            </tr>
        `;
    });
    
    tableHTML += `
            </tbody>
        </table>
    `;
    
    resultsContainer.innerHTML = tableHTML;
}


function escapeHtml(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/[&<>"']/g, m => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[m]));
}