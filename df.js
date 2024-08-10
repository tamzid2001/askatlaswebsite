const dfMessenger = document.querySelector('df-messenger');
const payload = [
  {
    "type": "info",
    "title": "Welcome to Atlas AI – Your Ultimate Exploration Companion! 🌏✨",
    "subtitle": `Discover the World with Atlas AI 🌍✈️

Dive into an adventure with Atlas AI! Our app transforms your device into a gateway to the globe, offering immersive 3D tours, personalized journeys, live updates, and interactive learning. Explore from oceans deep to mountains high, all tailored to your interests.

Why wait? Start your journey today!

Download Now & Explore!`,
    "image": {
      "rawUrl": "https://askatlas.org/background-img/icon.png"
    },
  }
];
// "anchor": {
//       "href": "https://example.com",
//       "target": "_blank"
//     }
dfMessenger.renderCustomCard(payload);
		const dfMessengerChatBubble = document.querySelector('df-messenger-chat-bubble');
dfMessengerChatBubble.openMinChat({
  anchor: 'top-left'
});
