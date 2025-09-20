import React from 'react';

const TechnologyIcon = ({ name, className = "w-8 h-8" }) => {
  const iconMap = {
    // Web Development Technologies
    "React & Next.js": "react",
    "TypeScript": "typescript", 
    "Tailwind CSS": "tailwindcss",
    "Node.js": "nodedotjs",
    "MongoDB": "mongodb",
    "PostgreSQL": "postgresql",
    "Vercel": "vercel",
    "Netlify": "netlify",
    "WordPress": "wordpress",
    "Shopify": "shopify",
    
    // AI Tools
    "OpenAI GPT": "openai",
    "ChatGPT": "openai",
    "Claude AI": "claude",
    "Google AI": "google",
    "Microsoft Copilot": "githubcopilot",
    "HubSpot AI": "hubspot",
    "Salesforce Einstein": "salesforce",
    "Zapier": "zapier",
    "Make.com": "make",
    "Pipedream": "zapier", // Using zapier as fallback since pipedream not found
    
    // Additional Technologies
    "WooCommerce": "wordpress", // Using wordpress as fallback
    "PHP": "php",
    "CSS3": "css",
    "JavaScript": "javascript",
    "React": "react",
    "Next.js": "react", // Using react as fallback
    "GSAP": "greensock",
    "Google Maps API": "google",
    "Property API": "apifox", // Using apifox as API icon
    "HIPAA Compliance": "securityscorecard", // Using securityscorecard as security icon
    
    // Marketing Platforms
    "Google Ads": "googleads",
    "Facebook Ads": "facebook",
    "Instagram Ads": "instagram",
    "LinkedIn Ads": "linkedin", // Will use generic if not found
    "Twitter Ads": "twitter", // Will use generic if not found
    "TikTok Ads": "tiktok",
    "YouTube Ads": "youtube",
    "Google Analytics": "googleanalytics",
    "Facebook Pixel": "facebook", // Using facebook as fallback
    "Google Tag Manager": "googletagmanager"
  };

  const iconName = iconMap[name] || name.toLowerCase().replace(/\s+/g, '');
  const iconPath = `/src/assets/simple-icons-develop/icons/${iconName}.svg`;

  return (
    <img 
      src={iconPath} 
      alt={name}
      className={className}
      onError={(e) => {
        // Fallback to text if icon doesn't load
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'inline';
      }}
    />
  );
};

export default TechnologyIcon;
