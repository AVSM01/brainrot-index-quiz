/**
 * AI MARKETING AUTOMATION - Brainrot Index™
 * 
 * This script generates viral social media content automatically.
 * Run it to get ready-to-post content for different platforms.
 * 
 * Usage: node marketing-generator.js
 */

// ============================================
// VIRAL CONTENT TEMPLATES
// ============================================

const viralTemplates = {
    twitter: [
        "I just took the Brainrot Index quiz and I'm {SCORE}% cooked 💀\n\nApparently I'm \"{TIER}\" level brainrot\n\nHow rotted is YOUR brain? 🧠🔥\n{URL}",
        "pov: you take a quiz to see how brainrotted you are\n\nme: {SCORE}%\n\nthe algorithm: 👁️👄👁️\n\n{URL}",
        "be honest... what's your brainrot score? 🤔\n\nmine was {SCORE}% ({TIER}) and i'm not okay\n\n{URL}",
        "\"just one more TikTok\"\n\n*3 hours later*\n\n*takes brainrot quiz*\n\n*scores {SCORE}%*\n\n{URL}",
        "my brainrot quiz results:\n\n🚽 Skibidi Knowledge: HIGH\n🐺 Sigma Mindset: TERMINAL\n🌽 Ohio Brain: ***CRITICAL***\n\noverall: {SCORE}%\n\n{URL}"
    ],

    tiktok: [
        "POV: you're about to find out how cooked your brain really is 🧠💀 #brainrot #skibidi #fypシ",
        "taking the brainrot index quiz because i need to know how far gone i am 🫠 #chronicallyonline #brainrotquiz",
        "when the quiz says you're {SCORE}% brainrotted and you're not even surprised 💀 #brainrot #quiz",
        "rating how terminally online i am with the brainrot index 🔥 spoiler: it's bad #brainrot #skibiditoilet"
    ],

    reddit: {
        title: "I made a quiz that calculates your 'brainrot level' based on how much internet culture you've absorbed",
        body: `Hey everyone!

I built this quiz that analyzes how much your brain has been "rotted" by internet culture. It tests your knowledge of:

- 🚽 Skibidi Toilet lore
- 🐺 Sigma grindset
- 🌽 Ohio memes  
- 💬 Gen Z slang (rizz, no cap, etc.)
- And more...

At the end you get a brainrot score from 0-100% and a tier (Normie → Terminal Brainrot).

There's also a "Deep Analysis" that shows you exactly which categories are doing the most damage to your brain.

Try it out and share your score! I'm curious if anyone can get 100% 💀

{URL}

Built with vanilla HTML/CSS/JS. Would love feedback!`
    },

    instagram: [
        "my brain: 📉\nmy brainrot score: 📈\n\n{SCORE}% and counting 🧠🔥\n\nlink in bio to take the quiz!\n\n#brainrot #quiz #chronicallyonline #skibidi #sigma #genz #memes",
        "tell me your brainrot score without telling me your brainrot score 👀\n\nmine was {SCORE}%... i need to go outside\n\n#brainrotquiz #terminalonline #foryou #viral"
    ],

    discord: [
        "yo just found this brainrot quiz that tells you how cooked your brain is 💀\ni got {SCORE}% which is apparently \"{TIER}\"\n\nlink: {URL}\n\ndrop your scores below 👇",
        "brainrot check 🧠\n{URL}\n\nwhat did everyone get? i'm {SCORE}% rotted apparently lmao"
    ]
};

// ============================================
// HASHTAG SETS
// ============================================

const hashtagSets = {
    tiktok: [
        "#brainrot #skibidi #fyp #fypシ #viral #quiz #chronicallyonline #meme #genz #ohio #sigma",
        "#brainrotquiz #skibiditoilet #terminalonline #foryoupage #trending #internet #memes",
        "#quiz #personalitytest #brainrot #chronicallyonline #relatable #funny #gen #alpha"
    ],
    instagram: [
        "#brainrot #quiz #chronicallyonline #skibidi #sigma #genz #memes #viral #explore #fyp",
        "#brainrotquiz #internetculture #personality #trending #funny #relatable #follow"
    ],
    twitter: [
        "#brainrot #skibidi #quiz",
        "#chronicallyonline #genz",
        "" // Twitter often better without hashtags
    ]
};

// ============================================
// CONTENT GENERATOR CLASS
// ============================================

class AIMarketingGenerator {
    constructor(siteUrl) {
        this.url = siteUrl;
        this.demoScores = [42, 69, 78, 85, 93]; // Sample scores for content
        this.tiers = {
            0: 'NORMIE',
            21: 'MILDLY ROTTED',
            41: 'CHRONICALLY ONLINE',
            61: 'CERTIFIED BRAINROT',
            81: 'TERMINAL BRAINROT'
        };
    }

    getTier(score) {
        if (score >= 81) return 'TERMINAL BRAINROT';
        if (score >= 61) return 'CERTIFIED BRAINROT';
        if (score >= 41) return 'CHRONICALLY ONLINE';
        if (score >= 21) return 'MILDLY ROTTED';
        return 'NORMIE';
    }

    replacePlaceholders(template, score) {
        return template
            .replace(/{SCORE}/g, score)
            .replace(/{TIER}/g, this.getTier(score))
            .replace(/{URL}/g, this.url);
    }

    generateTwitterPosts(count = 5) {
        console.log('\n📱 TWITTER/X POSTS:\n' + '='.repeat(50));
        const posts = [];
        for (let i = 0; i < count; i++) {
            const template = viralTemplates.twitter[i % viralTemplates.twitter.length];
            const score = this.demoScores[i % this.demoScores.length];
            const post = this.replacePlaceholders(template, score);
            posts.push(post);
            console.log(`\n[Post ${i + 1}]\n${post}\n`);
        }
        return posts;
    }

    generateTikTokCaptions(count = 4) {
        console.log('\n🎵 TIKTOK CAPTIONS:\n' + '='.repeat(50));
        const captions = [];
        for (let i = 0; i < count; i++) {
            const template = viralTemplates.tiktok[i % viralTemplates.tiktok.length];
            const score = this.demoScores[i % this.demoScores.length];
            let caption = this.replacePlaceholders(template, score);
            caption += '\n\n' + hashtagSets.tiktok[i % hashtagSets.tiktok.length];
            captions.push(caption);
            console.log(`\n[Caption ${i + 1}]\n${caption}\n`);
        }
        return captions;
    }

    generateRedditPost() {
        console.log('\n🔴 REDDIT POST:\n' + '='.repeat(50));
        const post = {
            title: viralTemplates.reddit.title,
            body: this.replacePlaceholders(viralTemplates.reddit.body, 69),
            subreddits: ['r/webdev', 'r/SideProject', 'r/InternetIsBeautiful', 'r/GenZ', 'r/memes']
        };
        console.log(`\nTitle: ${post.title}`);
        console.log(`\nBody:\n${post.body}`);
        console.log(`\nSuggested Subreddits: ${post.subreddits.join(', ')}`);
        return post;
    }

    generateInstagramPosts(count = 3) {
        console.log('\n📸 INSTAGRAM CAPTIONS:\n' + '='.repeat(50));
        const posts = [];
        for (let i = 0; i < count; i++) {
            const template = viralTemplates.instagram[i % viralTemplates.instagram.length];
            const score = this.demoScores[i % this.demoScores.length];
            const post = this.replacePlaceholders(template, score);
            posts.push(post);
            console.log(`\n[Post ${i + 1}]\n${post}\n`);
        }
        return posts;
    }

    generateDiscordMessages(count = 2) {
        console.log('\n💬 DISCORD MESSAGES:\n' + '='.repeat(50));
        const messages = [];
        for (let i = 0; i < count; i++) {
            const template = viralTemplates.discord[i % viralTemplates.discord.length];
            const score = this.demoScores[i % this.demoScores.length];
            const message = this.replacePlaceholders(template, score);
            messages.push(message);
            console.log(`\n[Message ${i + 1}]\n${message}\n`);
        }
        return messages;
    }

    generatePostingSchedule() {
        console.log('\n📅 7-DAY POSTING SCHEDULE:\n' + '='.repeat(50));
        const schedule = [
            { day: 'Monday', platform: 'Twitter', time: '6:00 PM', content: 'Launch announcement tweet' },
            { day: 'Tuesday', platform: 'TikTok', time: '7:00 PM', content: 'Screen recording taking quiz' },
            { day: 'Wednesday', platform: 'Reddit', time: '10:00 AM', content: 'Post to r/SideProject' },
            { day: 'Thursday', platform: 'Instagram', time: '5:00 PM', content: 'Carousel showing results tiers' },
            { day: 'Friday', platform: 'Twitter', time: '8:00 PM', content: 'Poll: What tier are you?' },
            { day: 'Saturday', platform: 'Discord', time: '3:00 PM', content: 'Share in meme servers' },
            { day: 'Sunday', platform: 'TikTok', time: '6:00 PM', content: 'Duet/react to other scores' },
        ];

        schedule.forEach(item => {
            console.log(`${item.day}: ${item.platform} @ ${item.time}`);
            console.log(`   └─ ${item.content}\n`);
        });

        return schedule;
    }

    generateAllContent() {
        console.log('\n' + '🚀'.repeat(25));
        console.log('\n   AI MARKETING CONTENT GENERATOR - BRAINROT INDEX™\n');
        console.log('🚀'.repeat(25) + '\n');
        console.log(`Site URL: ${this.url}\n`);

        this.generateTwitterPosts();
        this.generateTikTokCaptions();
        this.generateRedditPost();
        this.generateInstagramPosts();
        this.generateDiscordMessages();
        this.generatePostingSchedule();

        console.log('\n' + '='.repeat(50));
        console.log('✅ All marketing content generated!');
        console.log('Copy and paste these to your social media accounts.');
        console.log('='.repeat(50) + '\n');
    }
}

// ============================================
// RUN GENERATOR
// ============================================

// Update this URL after deploying to Vercel!
const SITE_URL = 'https://brainrot-index.vercel.app';

const generator = new AIMarketingGenerator(SITE_URL);
generator.generateAllContent();

// Export for use in other scripts
if (typeof module !== 'undefined') {
    module.exports = { AIMarketingGenerator, viralTemplates, hashtagSets };
}
