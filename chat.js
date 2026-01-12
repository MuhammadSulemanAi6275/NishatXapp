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
                window.location.href = 'watch.html';
                break;
            case 'Invite':
                window.location.href = 'invite.html';
                break;
            case 'Chat':
                console.log('Already on Chat page');
                break;
            case 'Profile':
                window.location.href = 'profile.html';
                break;
        }
    });
});

// Join Group button functionality
document.querySelector('.join-group-btn').addEventListener('click', function() {
    showModal('Join Group', 'Enter a group code or get invited by a team leader to join a chat group.');
});

// Group item click functionality
document.querySelectorAll('.group-item').forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all groups
        document.querySelectorAll('.group-item').forEach(group => group.classList.remove('active'));
        
        // Add active class to clicked group
        this.classList.add('active');
        
        // Get group name
        const groupName = this.querySelector('h4').textContent;
        
        // Show group chat (placeholder)
        showToast(`Opening ${groupName} chat...`);
    });
});

// Header button functionality
document.querySelector('.notification-btn').addEventListener('click', function() {
    showModal('Notifications', 'You have no new notifications at the moment.');
});

document.querySelector('.profile-btn').addEventListener('click', function() {
    showModal('Profile', 'View and edit your profile information.');
});

// Modal functionality
function showModal(title, message) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
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
                <button class="modal-btn" onclick="closeModal()">Close</button>
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
document.querySelectorAll('.group-item, .join-group-btn').forEach(element => {
    element.addEventListener('mouseenter', function() {
        if (!this.classList.contains('group-item') || !this.classList.contains('active')) {
            this.style.transform = 'translateY(-2px)';
        }
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Simulate real-time updates for online count
function updateOnlineCount() {
    const onlineCount = document.querySelector('.online-count');
    if (onlineCount) {
        const currentCount = parseInt(onlineCount.textContent.replace('+', ''));
        const newCount = Math.max(95, currentCount + Math.floor(Math.random() * 3) - 1);
        onlineCount.textContent = newCount >= 99 ? '99+' : newCount.toString();
    }
}

// Update online count every 30 seconds
setInterval(updateOnlineCount, 30000);

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
    }
    
    .modal-btn {
        width: 100%;
        background: linear-gradient(135deg, #00D4AA, #00B894);
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .modal-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 212, 170, 0.4);
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