document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const viewBtn = document.getElementById('viewSignupsBtn');
    
    if (viewBtn) {
        viewBtn.addEventListener('click', () => {
            window.location.href = 'viewSignUps.html';
        });
    }

    document.querySelectorAll('input, select, textarea').forEach(element => {
        element.addEventListener('input', () => {
            if (element.value.trim() !== '') {
                element.classList.remove('invalid');
            }
        });
        
        element.addEventListener('blur', (e) => {
            if (!e.target.value.trim()) {
                e.target.classList.add('invalid');
            }
        });
    });

    //form submission -- erin???
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Confirm submission with user
            if (!confirm('Are you sure you want to submit this application?')) {
                return;
            }

            // Collect form data into object
            const formData = new FormData(form);
            const signupEntry = Object.fromEntries(formData.entries());

            const existingSignups = JSON.parse(localStorage.getItem('clubSignups')) || [];
            
            // timestampso
            signupEntry.submittedAt = new Date().toISOString();
            
            // save localStorage
            existingSignups.push(signupEntry);
            localStorage.setItem('clubSignups', JSON.stringify(existingSignups));
            
            // Success feedback tas reset
            alert('Application submitted successfully!');
            form.reset();
            
            document.querySelectorAll('.invalid').forEach(el => {
                el.classList.remove('invalid');
            });
        });

        // Reset confirmation
        form.addEventListener('reset', (e) => {
            if (!confirm('Are you sure you want to reset? All unsaved data will be lost.')) {
                e.preventDefault();
            }
        });
    }
});