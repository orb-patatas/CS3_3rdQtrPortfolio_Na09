document.querySelectorAll('.play-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation(); 
        const row = this.closest('.playlist-row');
        const link = row.getAttribute('data-link');
        if (link && link !== '#') {
            window.location.href = link;
        } else {
            alert('This project is coming soon!');
        }
    });
});

document.querySelectorAll('.playlist-row').forEach(row => {
    row.addEventListener('click', function(e) {
        if (!e.target.closest('.play-btn')) {
            const link = this.getAttribute('data-link');
            if (link && link !== '#') {
                window.location.href = link;
            }
        }
    });
});

const featuredPlay = document.querySelector('.featured-play');
if (featuredPlay) {
    featuredPlay.style.animation = 'pulse 2s ease-in-out infinite';
}

document.querySelectorAll('.playlist-row').forEach(row => {
    row.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'rgba(193, 18, 31, 0.1)';
    });
    
    row.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '';
    });
});