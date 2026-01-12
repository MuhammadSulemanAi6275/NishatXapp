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
                console.log('Already on Watch page');
                break;
            case 'Invite':
                window.location.href = 'invite.html';
                break;
            case 'Chat':
                window.location.href = 'chat.html';
                break;
            case 'Profile':
                window.location.href = 'profile.html';
                break;
        }
    });
});

// Play button functionality
document.querySelector('.play-button').addEventListener('click', function() {
    showPackageRequiredModal();
});

// Package required button click
document.querySelector('.package-required-btn').addEventListener('click', function() {
    showPackageRequiredModal();
});

// Header button functionality
document.querySelector('.notification-btn').addEventListener('click', function() {
    showModal('Notifications', 'You have no new notifications at the moment.');
});

document.querySelector('.profile-btn').addEventListener('click', function() {
    showModal('Profile', 'View and edit your profile information.');
});

// Show package required modal
function showPackageRequiredModal() {
    showModal(
        'Package Required', 
        'You need to purchase an earning package to start watching ads and earning rewards. Would you like to activate a package now?',
        true
    );
}

// Modal functionality
function showModal(title, message, showActivateButton = false) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    const activateButtonHTML = showActivateButton ? 
        `<button class="modal-btn activate" onclick="activatePackage()">Activate Package ($3.00)</button>
         <button class="modal-btn secondary" onclick="closeModal()">Maybe Later</button>` :
        `<button class="modal-btn" onclick="closeModal()">Close</button>`;
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="modal-close" onclick="closeModal()">&times;</button>
            </div>
            <div class="modal-body">
                <p>${message}</p>
            </div>
            <div class="modal-footer">
                ${activateButtonHTML}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Show modal with animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

function activatePackage() {
    closeModal();
    showToast('Redirecting to package activation...');
    // Here you would redirect to package purchase page
    setTimeout(() => {
        // window.location.href = 'package.html';
    }, 1500);
}

// Toast notification function
function showToast(message) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Add hover effects to interactive elements
document.querySelectorAll('.play-button, .nav-item').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add styles dynamically
const styles = document.createElement('style');
styles.textContent = `
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }
    
    .modal.show {
        opacity: 1;
        visibility: visible;
    }
    
    .modal-content {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 20px;
        max-width: 400px;
        width: 90%;
        margin: 20px;
        transform: scale(0.8);
        transition: transform 0.3s ease;
    }
    
    .modal.show .modal-content {
        transform: scale(1);
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 24px 0;
    }
    
    .modal-header h3 {
        color: white;
        font-size: 20px;
        font-weight: 600;
    }
    
    .modal-close {
        background: none;
        border: none;
        color: #9CA3AF;
        font-size: 24px;
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.3s ease;
    }
    
    .modal-close:hover {
        background: rgba(255, 255, 255, 0.1);
        color: white;
    }
    
    .modal-body {
        padding: 20px 24px;
    }
    
    .modal-body p {
        color: #D1D5DB;
        line-height: 1.6;
        margin: 0;
    }
    
    .modal-footer {
        padding: 0 24px 24px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    
    .modal-btn {
        width: 100%;
        border: none;
        padding: 12px 24px;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .modal-btn.activate {
        background: linear-gradient(135deg, #8B5CF6, #A855F7);
        color: white;
    }
    
    .modal-btn.secondary {
        background: rgba(255, 255, 255, 0.1);
        color: #9CA3AF;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .modal-btn:not(.secondary) {
        background: linear-gradient(135deg, #8B5CF6, #A855F7);
        color: white;
    }
    
    .modal-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
    }
    
    .modal-btn.secondary:hover {
        background: rgba(255, 255, 255, 0.15);
        box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
    }
    
    .toast {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%) translateY(-100px);
        background: rgba(0, 212, 170, 0.9);
        color: white;
        padding: 12px 24px;
        border-radius: 12px;
        font-size: 14px;
        font-weight: 500;
        z-index: 1001;
        opacity: 0;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    }
    
    .toast.show {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }
`;
document.head.appendChild(styles);