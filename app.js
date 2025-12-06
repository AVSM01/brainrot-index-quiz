/* ========================================
   BRAINROT INDEX™ - Application Logic
   ======================================== */

// ========================================
// Quiz Questions Data
// ========================================
const questions = [
    {
        id: 1,
        question: "How many hours of TikTok/Reels/Shorts do you consume daily?",
        options: [
            { text: "I don't use short-form content", value: 0 },
            { text: "Less than 1 hour", value: 25 },
            { text: "1-3 hours", value: 50 },
            { text: "3-5 hours", value: 75 },
            { text: "My screen time report is classified", value: 100 }
        ]
    },
    {
        id: 2,
        question: "Can you explain what Skibidi Toilet is to a normal person?",
        options: [
            { text: "What is Skibidi Toilet?", value: 0 },
            { text: "I've heard of it but don't get it", value: 25 },
            { text: "I know the basics (toilet heads, cameramen)", value: 50 },
            { text: "I can recite the entire lore", value: 85 },
            { text: "I unironically watch it for entertainment", value: 100 }
        ]
    },
    {
        id: 3,
        question: "Do you use the word 'rizz' in real conversations?",
        options: [
            { text: "I don't know what that means", value: 0 },
            { text: "Only ironically", value: 30 },
            { text: "Sometimes when it fits", value: 55 },
            { text: "It's part of my vocabulary now", value: 80 },
            { text: "I have W rizz fr fr no cap", value: 100 }
        ]
    },
    {
        id: 4,
        question: "What's your relationship with the 'Ohio' meme?",
        options: [
            { text: "Ohio is just a state to me", value: 0 },
            { text: "I've seen a few memes", value: 25 },
            { text: "Only in Ohio 💀", value: 55 },
            { text: "Ohio is a state of mind", value: 80 },
            { text: "Ohio consumed my entire personality", value: 100 }
        ]
    },
    {
        id: 5,
        question: "How would you describe your 'sigma grindset'?",
        options: [
            { text: "I don't know what sigma means", value: 0 },
            { text: "I think it's cringe", value: 15 },
            { text: "I get the meme but don't participate", value: 40 },
            { text: "I watch sigma edits occasionally", value: 70 },
            { text: "I AM the sigma. Patrick Bateman is my spirit animal.", value: 100 }
        ]
    },
    {
        id: 6,
        question: "Can you identify this sound: 'dun dun dun dun dun dun dun dundundun'?",
        options: [
            { text: "No idea what you're talking about", value: 0 },
            { text: "Sounds familiar but can't place it", value: 25 },
            { text: "Is that the TikTok sound?", value: 45 },
            { text: "Oh no oh no oh no no no no", value: 75 },
            { text: "I hear it in my nightmares", value: 100 }
        ]
    },
    {
        id: 7,
        question: "What does 'very demure, very mindful' mean to you?",
        options: [
            { text: "Just normal English words", value: 0 },
            { text: "I think I saw this somewhere", value: 25 },
            { text: "That one TikTok trend from 2024", value: 55 },
            { text: "I say it regularly in daily life", value: 80 },
            { text: "It's my entire personality now", value: 100 }
        ]
    },
    {
        id: 8,
        question: "Do you recognize 'Cursed Plankton' or the 'Find Luigi' game?",
        options: [
            { text: "Neither of those ring a bell", value: 0 },
            { text: "I've seen one of them", value: 30 },
            { text: "Both are familiar", value: 55 },
            { text: "I've participated in both trends", value: 80 },
            { text: "I've lost hours to finding Luigi", value: 100 }
        ]
    },
    {
        id: 9,
        question: "How often do you think in meme formats?",
        options: [
            { text: "Never, I think in normal thoughts", value: 0 },
            { text: "Occasionally a meme pops up", value: 25 },
            { text: "Daily, certain situations trigger memes", value: 50 },
            { text: "My internal monologue is 50% memes", value: 75 },
            { text: "I can't form a thought without it being a meme", value: 100 }
        ]
    },
    {
        id: 10,
        question: "Final question: Do you think you have brainrot?",
        options: [
            { text: "Absolutely not, I'm perfectly normal", value: 0 },
            { text: "Maybe a little", value: 30 },
            { text: "Yeah probably", value: 55 },
            { text: "It's terminal at this point", value: 85 },
            { text: "I AM the brainrot. The brainrot is me.", value: 100 }
        ]
    }
];

// Result Tiers
const tiers = [
    {
        min: 0,
        max: 20,
        emoji: "🌱",
        title: "NORMIE",
        description: "Touch grass certified. You actually go outside and have real conversations. The algorithm fears you.",
        badges: ["🌿 Grass Toucher", "👴 Boomer Energy", "📖 Book Reader"]
    },
    {
        min: 21,
        max: 40,
        emoji: "😅",
        title: "MILDLY ROTTED",
        description: "You've seen some things, but you can still hold a conversation without quoting memes. There's hope.",
        badges: ["📱 Casual Scroller", "🙂 Still Recoverable", "🎭 Irony User"]
    },
    {
        min: 41,
        max: 60,
        emoji: "😵‍💫",
        title: "CHRONICALLY ONLINE",
        description: "The algorithm owns you. You understand references that shouldn't exist. Your FYP is a mirror to your soul.",
        badges: ["⏰ 4AM Enjoyer", "🔄 Repost Addict", "🧪 Chronically Online"]
    },
    {
        min: 61,
        max: 80,
        emoji: "💀",
        title: "CERTIFIED BRAINROT",
        description: "Skibidi is your alarm. Ohio is your home. You speak in a language that only the internet understands.",
        badges: ["🚽 Skibidi Scholar", "🌽 Ohio Native", "💀 Terminal Stage"]
    },
    {
        min: 81,
        max: 100,
        emoji: "🧠🔥",
        title: "TERMINAL BRAINROT",
        description: "You ARE the brainrot. You don't consume content—you have become content. There is no recovery. Only sigma.",
        badges: ["👑 Brainrot King", "🎭 Living Meme", "⚡ Main Character", "🏆 Sigma Supreme"]
    }
];

// ========================================
// State Management
// ========================================
let currentQuestion = 0;
let answers = [];
let score = 0;
let timerInterval = null;

// ========================================
// DOM Elements
// ========================================
const heroSection = document.getElementById('hero');
const quizSection = document.getElementById('quiz');
const resultsSection = document.getElementById('results');
const heroMeter = document.getElementById('heroMeter');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const questionCard = document.getElementById('questionCard');
const questionNumber = document.getElementById('questionNumber');
const questionText = document.getElementById('questionText');
const optionsGrid = document.getElementById('optionsGrid');
const premiumModal = document.getElementById('premiumModal');
const shareModal = document.getElementById('shareModal');
const toast = document.getElementById('toast');

// ========================================
// Hero Section
// ========================================
function animateHeroMeter() {
    setTimeout(() => {
        heroMeter.style.width = '65%';
    }, 500);
}

// Initialize hero animation
animateHeroMeter();

// ========================================
// Quiz Functions
// ========================================
function startQuiz() {
    currentQuestion = 0;
    answers = [];
    score = 0;

    showSection('quiz');
    renderQuestion();
    startTimer();
}

function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

function renderQuestion() {
    const question = questions[currentQuestion];

    // Update progress
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestion + 1}/${questions.length}`;

    // Update question content
    questionNumber.textContent = `Q${currentQuestion + 1}`;
    questionText.textContent = question.question;

    // Render options
    optionsGrid.innerHTML = question.options.map((option, index) => `
        <button class="option-btn" onclick="selectOption(${index}, ${option.value})">
            <span class="option-key">${String.fromCharCode(65 + index)}</span>
            <span class="option-text">${option.text}</span>
        </button>
    `).join('');

    // Animate card
    questionCard.style.animation = 'none';
    questionCard.offsetHeight; // Trigger reflow
    questionCard.style.animation = 'slideIn 0.4s ease';

    // Reset timer
    resetTimer();
}

function selectOption(index, value) {
    // Store answer
    answers.push(value);

    // Highlight selected option
    const options = document.querySelectorAll('.option-btn');
    options[index].classList.add('selected');

    // Disable all options
    options.forEach(btn => btn.disabled = true);

    // Move to next question after short delay
    setTimeout(() => {
        currentQuestion++;

        if (currentQuestion < questions.length) {
            renderQuestion();
        } else {
            calculateResults();
        }
    }, 400);
}

function startTimer() {
    const timerFill = document.getElementById('timerFill');
    let timeLeft = 100;

    timerInterval = setInterval(() => {
        timeLeft -= 0.5;
        timerFill.style.width = `${timeLeft}%`;

        if (timeLeft <= 0) {
            // Auto-select first option if timer runs out
            selectOption(0, questions[currentQuestion].options[0].value);
        }
    }, 100);
}

function resetTimer() {
    const timerFill = document.getElementById('timerFill');
    timerFill.style.width = '100%';

    if (timerInterval) {
        clearInterval(timerInterval);
    }
    startTimer();
}

function quitQuiz() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    showSection('hero');
}

// ========================================
// Results Functions
// ========================================
function calculateResults() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    // Calculate average score
    score = Math.round(answers.reduce((sum, val) => sum + val, 0) / answers.length);

    // Show results section
    showSection('results');

    // Animate score counter
    animateScore(0, score);

    // Display tier info
    displayTier(score);

    // Animate meter
    setTimeout(() => {
        document.getElementById('meterIndicator').style.left = `${score}%`;
    }, 500);

    // Save to localStorage
    saveResult(score);
}

function animateScore(start, end) {
    const scoreNumber = document.getElementById('scoreNumber');
    const duration = 1500;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + (end - start) * easeOut);

        scoreNumber.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

function displayTier(score) {
    const tier = tiers.find(t => score >= t.min && score <= t.max);

    document.getElementById('tierEmoji').textContent = tier.emoji;
    document.getElementById('tierTitle').textContent = tier.title;
    document.getElementById('tierDescription').textContent = tier.description;

    // Render badges
    const badgesContainer = document.getElementById('resultBadges');
    badgesContainer.innerHTML = tier.badges.map(badge =>
        `<span class="badge">${badge}</span>`
    ).join('');
}

function saveResult(score) {
    const results = JSON.parse(localStorage.getItem('brainrotResults') || '[]');
    results.push({
        score,
        date: new Date().toISOString()
    });
    localStorage.setItem('brainrotResults', JSON.stringify(results));
}

function retryQuiz() {
    startQuiz();
}

// ========================================
// Share Functions
// ========================================
function shareResults() {
    const tier = tiers.find(t => score >= t.min && score <= t.max);

    document.getElementById('shareScore').textContent = `${score}%`;
    document.getElementById('shareTier').textContent = tier.title;

    shareModal.classList.add('active');
}

function closeShareModal() {
    shareModal.classList.remove('active');
}

function shareToTwitter() {
    const tier = tiers.find(t => score >= t.min && score <= t.max);
    const text = `My Brainrot Index is ${score}% - ${tier.title} ${tier.emoji}\n\nHow cooked is YOUR brain? Take the quiz:`;
    const url = window.location.href;

    window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
        '_blank'
    );
}

function copyLink() {
    const tier = tiers.find(t => score >= t.min && score <= t.max);
    const text = `My Brainrot Index is ${score}% (${tier.title}). Check yours: ${window.location.href}`;

    navigator.clipboard.writeText(text).then(() => {
        showToast('Link copied to clipboard!');
        closeShareModal();
    });
}

function downloadCard() {
    // In a real app, this would use html2canvas or similar
    showToast('Screenshot saved! (Demo mode)');
    closeShareModal();
}

// ========================================
// Premium Modal Functions
// ========================================
function showPremiumModal() {
    premiumModal.classList.add('active');
}

function closePremiumModal() {
    premiumModal.classList.remove('active');
}

// Close modals on overlay click
premiumModal.addEventListener('click', (e) => {
    if (e.target === premiumModal) closePremiumModal();
});

shareModal.addEventListener('click', (e) => {
    if (e.target === shareModal) closeShareModal();
});

// ========================================
// Email Capture
// ========================================
function captureEmail(e) {
    e.preventDefault();

    const email = document.getElementById('emailInput').value;

    // In a real app, this would send to backend
    const emails = JSON.parse(localStorage.getItem('capturedEmails') || '[]');
    emails.push({
        email,
        score,
        date: new Date().toISOString()
    });
    localStorage.setItem('capturedEmails', JSON.stringify(emails));

    // Show success
    showToast('Successfully subscribed! 🎉');
    document.getElementById('emailInput').value = '';
}

// ========================================
// Toast Notification
// ========================================
function showToast(message) {
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// Keyboard Navigation
// ========================================
document.addEventListener('keydown', (e) => {
    // Only handle keypresses during quiz
    if (!quizSection.classList.contains('active')) return;

    const key = e.key.toUpperCase();
    const keyIndex = key.charCodeAt(0) - 65; // A=0, B=1, etc.

    if (keyIndex >= 0 && keyIndex < questions[currentQuestion].options.length) {
        const option = questions[currentQuestion].options[keyIndex];
        selectOption(keyIndex, option.value);
    }
});

// Escape key closes modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePremiumModal();
        closeShareModal();
    }
});

// ========================================
// Analytics (Placeholder)
// ========================================
function trackEvent(eventName, data = {}) {
    // In production, send to analytics service
    console.log('Analytics:', eventName, data);
}

// Track page view
trackEvent('page_view', { page: 'brainrot_index' });

// ========================================
// Premium Analysis Functions
// ========================================

// Category definitions with question mapping
const categories = [
    {
        id: 'shortform',
        name: 'Short-Form Addiction',
        icon: '📱',
        questionIndex: 0,
        descriptions: {
            low: 'You have healthy screen habits',
            medium: 'The scroll is calling you',
            high: 'TikTok owns your soul',
            extreme: 'Your thumb has muscle memory'
        }
    },
    {
        id: 'skibidi',
        name: 'Skibidi Syndrome',
        icon: '🚽',
        questionIndex: 1,
        descriptions: {
            low: 'Blissfully unaware of toilet lore',
            medium: 'You\'ve seen the darkness',
            high: 'Cameraman sympathizer',
            extreme: 'You ARE Skibidi'
        }
    },
    {
        id: 'slang',
        name: 'Rizz & Slang',
        icon: '💬',
        questionIndex: 2,
        descriptions: {
            low: 'You speak like a normal human',
            medium: 'Occasional slang slips out',
            high: 'Your vocabulary is 50% internet',
            extreme: 'No cap, fr fr, you\'re cooked'
        }
    },
    {
        id: 'ohio',
        name: 'Ohio Brain',
        icon: '🌽',
        questionIndex: 3,
        descriptions: {
            low: 'Ohio is just a state',
            medium: 'You understand the chaos',
            high: 'Ohio lives rent-free in your head',
            extreme: 'You ARE Ohio'
        }
    },
    {
        id: 'sigma',
        name: 'Sigma Mindset',
        icon: '🐺',
        questionIndex: 4,
        descriptions: {
            low: 'Alpha? Beta? Just vibes',
            medium: 'You\'ve seen the edits',
            high: 'Grindset activated',
            extreme: 'Patrick Bateman is your mentor'
        }
    },
    {
        id: 'sounds',
        name: 'Audio Recognition',
        icon: '🔊',
        questionIndex: 5,
        descriptions: {
            low: 'Your ears are unpolluted',
            medium: 'Some sounds trigger memories',
            high: 'You hear TikTok sounds in your dreams',
            extreme: 'Oh no oh no oh no no no no'
        }
    }
];

// All possible badges
const allBadges = [
    { id: 'skibidi_scholar', icon: '🚽', name: 'Skibidi Scholar', condition: (answers) => answers[1] >= 85 },
    { id: 'sigma_supreme', icon: '🐺', name: 'Sigma Supreme', condition: (answers) => answers[4] >= 80 },
    { id: 'ohio_native', icon: '🌽', name: 'Ohio Native', condition: (answers) => answers[3] >= 80 },
    { id: 'rizz_master', icon: '💫', name: 'Rizz Master', condition: (answers) => answers[2] >= 80 },
    { id: 'scroll_addict', icon: '📱', name: 'Scroll Addict', condition: (answers) => answers[0] >= 75 },
    { id: 'sound_detective', icon: '🔊', name: 'Sound Detective', condition: (answers) => answers[5] >= 75 },
    { id: 'meme_thinker', icon: '🧠', name: 'Meme Thinker', condition: (answers) => answers[8] >= 75 },
    { id: 'self_aware', icon: '🪞', name: 'Self Aware', condition: (answers) => answers[9] >= 85 },
    { id: 'touch_grass', icon: '🌿', name: 'Touch Grass', condition: (answers) => score <= 30 },
    { id: 'terminal', icon: '💀', name: 'Terminal', condition: (answers) => score >= 80 },
    { id: 'brainrot_king', icon: '👑', name: 'Brainrot King', condition: (answers) => score >= 90 },
    { id: 'perfect_100', icon: '🏆', name: 'Perfect 100', condition: (answers) => score === 100 }
];

// Recovery plan suggestions based on score
const recoveryPlans = {
    low: [
        { title: 'Keep it up!', description: 'You\'re doing great. Maybe introduce a friend to the outdoors.', duration: 'Ongoing' },
        { title: 'Maintain balance', description: 'Continue limiting screen time and enjoying real-world activities.', duration: 'Daily' }
    ],
    medium: [
        { title: 'Digital Sunset', description: 'No screens after 9 PM. Read a book or talk to humans.', duration: 'Week 1' },
        { title: 'Touch Grass Challenge', description: 'Spend 30 minutes outside daily without your phone.', duration: 'Week 2' },
        { title: 'Meme Detox', description: 'Unfollow 5 meme accounts. Replace with educational content.', duration: 'Week 3' }
    ],
    high: [
        { title: 'Screen Time Lockdown', description: 'Set app timers: 30 min for social media apps.', duration: 'Week 1-2' },
        { title: 'Reality Check', description: 'Write down 3 things you see IRL daily. No phones allowed.', duration: 'Week 2-3' },
        { title: 'Human Interaction', description: 'Have one face-to-face conversation daily without referencing memes.', duration: 'Week 3-4' },
        { title: 'Hobby Revival', description: 'Pick up a hobby that doesn\'t require WiFi.', duration: 'Week 4+' }
    ],
    extreme: [
        { title: 'Emergency Intervention', description: 'Delete TikTok. Right now. We\'ll wait.', duration: 'Immediate' },
        { title: 'Phone Exile', description: 'Leave your phone in another room for 2 hours daily.', duration: 'Week 1' },
        { title: 'Vocabulary Rehab', description: 'Ban one internet slang word from your speech each day.', duration: 'Week 2' },
        { title: 'Nature Therapy', description: 'Visit a park. Look at trees. Remember what grass feels like.', duration: 'Week 3' },
        { title: 'The Final Boss', description: 'Go 24 hours without any social media. You can do this.', duration: 'Week 4' }
    ]
};

// Unlock premium analysis
function unlockPremiumAnalysis() {
    closePremiumModal();
    showSection('premiumAnalysis');
    renderPremiumAnalysis();
    trackEvent('premium_unlocked', { score });
}

// Render the full premium analysis page
function renderPremiumAnalysis() {
    // Main score
    document.getElementById('analysisScore').textContent = score;

    const tier = tiers.find(t => score >= t.min && score <= t.max);
    document.getElementById('analysisTierEmoji').textContent = tier.emoji;
    document.getElementById('analysisTierTitle').textContent = tier.title;

    // Calculate percentile (simulated)
    const percentile = Math.min(99, Math.round(score * 0.95 + Math.random() * 5));
    document.getElementById('percentileText').textContent = `${percentile}%`;

    // Render categories
    renderCategoryBreakdown();

    // Render DNA chart
    renderDNAChart();

    // Render insights
    renderInsights();

    // Render recovery plan
    renderRecoveryPlan();

    // Render badges
    renderBadgesShowcase();

    // Render history
    renderHistory();
}

// Render category breakdown
function renderCategoryBreakdown() {
    const grid = document.getElementById('categoryGrid');

    grid.innerHTML = categories.map(cat => {
        const catScore = answers[cat.questionIndex] || 0;
        const level = catScore <= 25 ? 'low' : catScore <= 50 ? 'medium' : catScore <= 75 ? 'high' : 'extreme';

        return `
            <div class="category-card">
                <div class="category-header">
                    <span class="category-icon">${cat.icon}</span>
                    <span class="category-name">${cat.name}</span>
                </div>
                <div class="category-score">${catScore}%</div>
                <div class="category-bar">
                    <div class="category-bar-fill ${level}" style="width: ${catScore}%"></div>
                </div>
                <p class="category-description">${cat.descriptions[level]}</p>
            </div>
        `;
    }).join('');
}

// Render DNA visualization
function renderDNAChart() {
    const chart = document.getElementById('dnaChart');
    const colors = ['#8b5cf6', '#ec4899', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#6366f1', '#14b8a6', '#f97316', '#a855f7'];

    chart.innerHTML = answers.map((val, i) => {
        const height = Math.max(10, val);
        const color = colors[i % colors.length];
        const label = `Q${i + 1}`;
        return `<div class="dna-bar" style="height: ${height}%; background: ${color};" data-label="${label}"></div>`;
    }).join('');
}

// Generate personalized insights
function renderInsights() {
    const grid = document.getElementById('insightsGrid');
    const insights = [];

    // Highest category
    let maxCat = categories[0];
    let maxScore = answers[0] || 0;
    categories.forEach(cat => {
        if ((answers[cat.questionIndex] || 0) > maxScore) {
            maxScore = answers[cat.questionIndex];
            maxCat = cat;
        }
    });

    insights.push({
        icon: maxCat.icon,
        title: `Peak Brainrot: ${maxCat.name}`,
        description: `Your highest damage is in ${maxCat.name} at ${maxScore}%. This is your primary source of brain rot.`
    });

    // Self-awareness check
    const selfAwareness = answers[9] || 0;
    if (selfAwareness >= 70) {
        insights.push({
            icon: '🪞',
            title: 'High Self-Awareness',
            description: 'You know you have brainrot. Acknowledging the problem is the first step to recovery... or embracing it.'
        });
    }

    // Meme thinking
    const memeThinking = answers[8] || 0;
    if (memeThinking >= 50) {
        insights.push({
            icon: '💭',
            title: 'Meme-Formatted Brain',
            description: `Your thoughts are ${memeThinking}% memes. Your internal monologue probably has background music.`
        });
    }

    // Overall assessment
    if (score >= 70) {
        insights.push({
            icon: '🔥',
            title: 'Critical Condition',
            description: 'Your brain has been thoroughly marinated in internet culture. The algorithm has optimized you.'
        });
    } else if (score >= 40) {
        insights.push({
            icon: '⚠️',
            title: 'Proceed with Caution',
            description: 'You\'re on the edge. One more Skibidi video could push you over.'
        });
    } else {
        insights.push({
            icon: '✅',
            title: 'Relatively Healthy',
            description: 'Your brain still functions somewhat normally. Guard it carefully.'
        });
    }

    grid.innerHTML = insights.map(insight => `
        <div class="insight-card">
            <span class="insight-icon">${insight.icon}</span>
            <div class="insight-content">
                <h3>${insight.title}</h3>
                <p>${insight.description}</p>
            </div>
        </div>
    `).join('');
}

// Render recovery plan based on score
function renderRecoveryPlan() {
    const timeline = document.getElementById('recoveryTimeline');
    let planLevel = 'low';

    if (score >= 80) planLevel = 'extreme';
    else if (score >= 60) planLevel = 'high';
    else if (score >= 40) planLevel = 'medium';

    const plan = recoveryPlans[planLevel];

    timeline.innerHTML = plan.map((step, i) => `
        <div class="recovery-step">
            <div class="step-number">${i + 1}</div>
            <div class="step-content">
                <h3>${step.title}</h3>
                <p>${step.description}</p>
                <span class="step-duration">⏱️ ${step.duration}</span>
            </div>
        </div>
    `).join('');
}

// Render badges showcase
function renderBadgesShowcase() {
    const showcase = document.getElementById('badgesShowcase');

    showcase.innerHTML = allBadges.map(badge => {
        const earned = badge.condition(answers);
        return `
            <div class="showcase-badge ${earned ? 'earned' : 'locked'}">
                <span class="badge-icon">${badge.icon}</span>
                <span class="badge-name">${badge.name}</span>
                <span class="badge-status">${earned ? '✓ Earned' : '🔒 Locked'}</span>
            </div>
        `;
    }).join('');
}

// Render history chart
function renderHistory() {
    const chart = document.getElementById('historyChart');
    const results = JSON.parse(localStorage.getItem('brainrotResults') || '[]');

    if (results.length <= 1) {
        chart.innerHTML = `
            <div class="no-history">
                <span>📊</span>
                Take more quizzes to see your brainrot history!
            </div>
        `;
        return;
    }

    // Show last 5 results
    const recentResults = results.slice(-5);
    const maxScore = Math.max(...recentResults.map(r => r.score));

    chart.innerHTML = recentResults.map((result, i) => {
        const height = (result.score / 100) * 100;
        const date = new Date(result.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        return `<div class="history-bar" style="height: ${height}%;" data-date="${date}" data-score="${result.score}%"></div>`;
    }).join('');
}

// Download PDF Report (simulated)
function downloadPDFReport() {
    showToast('Generating PDF report... (Demo mode)');
    trackEvent('pdf_download', { score });
}

// Share analysis
function shareAnalysis() {
    const tier = tiers.find(t => score >= t.min && score <= t.max);
    const text = `🧠 My Deep Brainrot Analysis:\n\n📊 Overall Score: ${score}%\n🏆 Tier: ${tier.title} ${tier.emoji}\n\nGet your detailed brainrot report:`;

    if (navigator.share) {
        navigator.share({
            title: 'My Brainrot Analysis',
            text: text,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(text + ' ' + window.location.href);
        showToast('Analysis copied to clipboard!');
    }
}

// Wire up the premium modal CTA button
document.querySelector('.modal-cta').addEventListener('click', unlockPremiumAnalysis);

// ========================================
// Initialize
// ========================================
console.log('%c🧠 BRAINROT INDEX™', 'font-size: 24px; font-weight: bold; color: #8b5cf6');
console.log('%cHow cooked is your brain?', 'font-size: 14px; color: #ec4899');

