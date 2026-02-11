/**
 * OpenSource 2025 AeroX
 * Code by itsfizys
 * AeroX Development
 * 
 * Kali Billi Bot Configuration
 * Update these URLs to configure your bot's support server and invite links
 */

const CONFIG = {
  // Bot invite link - users will be redirected here when clicking "Invite Kali Billi"
  botInviteUrl: "https://discord.com/oauth2/authorize?client_id=1457700323199291436&scope=applications.commands%20bot&permissions=8",
  
  // Support server invite link - users will be redirected here for support
  supportServerUrl: "https://discord.gg/veluxmc",
  
  // Bot name (for display)
  botName: "Black Cat",
  
  // Bot description
  botDescription: "Your Cute Discord Companion - Fun, moderation, and AI chat for your Discord server."
};

// Export for use in browsers
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}
