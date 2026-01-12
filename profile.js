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
                window.location.href = 'chat.html';
                break;
            case 'Profile':
                console.log('Already on Profile page');
                break;
        }
    });
});

// Copy user ID functionality
document.querySelector('.user-id').addEventListener('click', function() {
    const userId = this.querySelector('span').textContent;
    
    // Copy to clipboard
    navigator.clipboard.writeText(userId).then(() => {
        showToast('User ID copied to clipboard!');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = userId;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('User ID copied to clipboard!');
    });
});

// Menu item functions (dummy functionality)
function openPaymentAccount() {
    showModal('Payment Account', 'Set up your payment method to receive withdrawals. You can add bank account, mobile wallet, or other payment options.');
}

function changePassword() {
    showModal('Change Password', 'For security reasons, please enter your current password and then create a new strong password.');
}

function viewMyTeam() {
    showModal('My Team', 'View your referral team structure and earnings from each level. Build your team to increase your passive income.');
}

function viewRankRewards() {
    showModal('Rank Rewards', 'Check your current rank and see what rewards you can earn by reaching higher ranks in the system.');
}

function inviteFriends() {
    window.location.href = 'invite.html';
}

// Finance section functions
function viewTransactionHistory() {
    showModal('Transaction History', 'View all your deposit, withdrawal, and earning transactions with detailed information and timestamps.');
}

function viewPackage() {
    showModal('Package', 'Manage your earning packages. Purchase new packages or view details of your current active packages.');
}

// Information section functions
function viewWhatsNew() {
    showModal('What\'s New', 'Check out the latest features, updates, and improvements in the app. Stay updated with new earning opportunities.');
}

function viewAnnouncements() {
    showModal('Announcements', 'Important announcements from the platform including maintenance schedules, new features, and policy updates.');
}

function viewUsersGuide() {
    showModal('User\'s Guide', 'Complete guide on how to use the platform effectively. Learn about earning strategies and platform features.');
}

// Help & Legal section functions
function viewSupport() {
    showModal('Support', 'Get help with your account, technical issues, or general questions. Contact our support team for assistance.');
}

function viewPrivacyPolicy() {
    showModal('Privacy Policy', 'Read our privacy policy to understand how we collect, use, and protect your personal information.');
}

function viewTermsOfService() {
    showModal('Terms of Service', 'Review the terms and conditions for using our platform. Important legal information about your rights and responsibilities.');
}

// Logout function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        showToast('Logging out...');
        setTimeout(() => {
            window.location.href = 'signin.html';
        }, 1500);
    }
}

// Stats card click handlers
document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent;
        
        switch(title) {
            case 'Packages':
                showModal('Packages', 'Purchase an earning package to start watching ads and earning money. Packages are lifetime valid with one-time payment.');
                break;
            case 'Team':
                viewMyTeam();
                break;
            case 'Withdraw':
                showModal('Withdraw', 'Withdraw your earnings to your registered payment account. Minimum withdrawal amount is $0.15.');
                break;
        }
    });
});

// Header button functionality
document.querySelector('.notification-btn').addEventListener('click', function() {
    showModal('Notifications', 'You have no new notifications at the moment.');
});

document.querySelector('.profile-btn').addEventListener('click', function() {
    showModal('Edit Profile', 'Update your profile information including name, email, and other personal details.');
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
document.querySelectorAll('.menu-item, .stat-card').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Simulate balance updates (dummy functionality)
function updateBalance() {
    // This is just for demo - in real app this would come from server
    const balanceAmount = document.querySelector('.balance-amount:not(.earned)');
    const earnedAmount = document.querySelector('.balance-amount.earned');
    
    // Simulate small random changes
    const currentBalance = parseFloat(balanceAmount.textContent.replace('$', ''));
    const currentEarned = parseFloat(earnedAmount.textContent.replace('$', ''));
    
    // Very small random increments for demo
    const newBalance = (currentBalance + Math.random() * 0.01).toFixed(2);
    const newEarned = (currentEarned + Math.random() * 0.01).toFixed(2);
    
    balanceAmount.textContent = `$${newBalance}`;
    earnedAmount.textContent = `$${newEarned}`;
}

// Update balance every 60 seconds (demo only)
setInterval(updateBalance, 60000);

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
        background: linear-gradient(135deg, #8B5CF6, #A855F7);
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
        box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
    }
    
    .toast {
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%) translateY(-100px);
        background: rgba(139, 92, 246, 0.9);
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