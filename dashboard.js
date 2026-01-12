// Update functionality
function updateNow() {
    const updateBtn = document.querySelector('.update-btn');
    const updateTime = document.querySelector('.update-time');
    
    // Disable button and show loading state
    updateBtn.disabled = true;
    updateBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="loading-spinner">
            <path d="M12 4V1L8 5L12 9V6C15.31 6 18 8.69 18 12C18 13.01 17.75 13.97 17.3 14.8L18.76 16.26C19.54 15.03 20 13.57 20 12C20 7.58 16.42 4 12 4Z" fill="white"/>
            <path d="M12 18C8.69 18 6 15.31 6 12C6 10.99 6.25 10.03 6.7 9.2L5.24 7.74C4.46 8.97 4 10.43 4 12C4 16.42 7.58 20 12 20V23L16 19L12 15V18Z" fill="white"/>
        </svg>
        Updating...
    `;
    
    updateTime.textContent = 'Please wait while we update...';
    
    // Simulate update process
    setTimeout(() => {
        showSuccess();
    }, 3000);
}

// Show success message after update
function showSuccess() {
    const updateCard = document.querySelector('.update-card');
    
    updateCard.innerHTML = `
        <div class="success-icon">
            <div class="icon-circle success">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="white"/>
                </svg>
            </div>
        </div>
        
        <h1>Update Complete!</h1>
        <p class="subtitle">Your app has been successfully updated with the latest features</p>
        
        <button class="continue-btn" onclick="continueToDashboard()">
            Continue to Dashboard
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="white"/>
            </svg>
        </button>
    `;
}

// Continue to main dashboard
function continueToDashboard() {
    // Redirect to main dashboard (home page)
    window.location.href = 'home.html';
}

// Navigation functionality
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all items
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Get the navigation text
        const navText = this.querySelector('span').textContent;
        
        // Handle navigation
        switch(navText) {
            case 'Home':
                window.location.href = 'home.html';
                break;
            case 'Watch':
                console.log('Navigate to Watch');
                break;
            case 'Invite':
                console.log('Navigate to Invite');
                break;
            case 'Chat':
                console.log('Navigate to Chat');
                break;
            case 'Profile':
                console.log('Navigate to Profile');
                break;
        }
    });
});

// Add loading animation to update button
const style = document.createElement('style');
style.textContent = `
    .loading-spinner {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    
    .success-icon {
        margin-bottom: 30px;
    }
    
    .icon-circle.success {
        background: linear-gradient(135deg, #00D4AA, #00B894);
        box-shadow: 0 10px 30px rgba(0, 212, 170, 0.4);
    }
    
    .continue-btn {
        width: 100%;
        background: linear-gradient(135deg, #00D4AA, #00B894);
        color: white;
        border: none;
        padding: 16px 24px;
        border-radius: 16px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 20px;
        box-shadow: 0 10px 25px rgba(0, 212, 170, 0.3);
    }
    
    .continue-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 15px 35px rgba(0, 212, 170, 0.4);
    }
    
    .update-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none !important;
    }
`;
document.head.appendChild(style);

// Add smooth scrolling and page transitions
document.addEventListener('DOMContentLoaded', function() {
    // Add entrance animations
    setTimeout(() => {
        document.querySelector('.update-card').style.opacity = '1';
        document.querySelector('.update-card').style.transform = 'translateY(0)';
    }, 100);
});

// Handle feature item interactions
document.querySelectorAll('.feature-item').forEach(item => {
    item.addEventListener('click', function() {
        // Add a subtle click effect
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'translateY(-2px)';
        }, 150);
    });
});