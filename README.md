# XOLUMS CLAN ✦ Syndicate Showcase (Heads: Eya & Yuu)

A cyber-gothic **Clan Hierarchy Showcase** built for **XOLUMS**. Features **Eya & Yuu as the Supreme Clan Heads / Founders**, along with **Hall of Fame** and **Members** sections, real-time Discord presence via **Lanyard WebSocket**, 3D mouse parallax tilt cards, animated starfield nebula background, spinning vinyl Spotify widgets, and a floating **Audio Player & Changer HUD** with `Addicted To You.mp3` as the default track.

---

## 🏛️ Clan Hierarchy Structure

1. **👑 CLAN HEADS (`#page-heads`)**:
   - **Eya** (Founder / Clan Head) & **Yuu** (Founder / Clan Head)
   - 3D parallax tilt cards, anime character banners, live Discord avatar with decoration presets, glowing presence orbs, live bio, Spotify widget with spinning vinyl, current game activity, and Copy ID / Mention buttons.
   - Connected by the central **LEADERS** insignia shield.
2. **🏆 HALL OF FAME (`#page-fame`)**:
   - Elite legends and honored syndicate members.
   - Glowing circular avatar rings with interactive Discord hover popups.
3. **⚔️ MEMBERS (`#page-members`)**:
   - Active clan roster & vanguard members with real-time status sync.

---

## 🎵 Music Player & Track Changer

- **Default Track**: Plays `Addicted To You.mp3` automatically on splash enter.
- **Floating HUD**: Play/pause, live equalizer waveforms, draggable seekbar, and volume slider.
- **Music Modal (Click 💽 disc icon)**:
  - Select preset tracks.
  - Enter custom audio stream URLs.
  - Upload local MP3/WAV files directly from your computer.

---

## ⚙️ Customization Guide

Open [`script.js`](file:///C:/Users/kyllj/.gemini/antigravity/scratch/xolums-showcase/script.js) to edit the Clan Heads, Hall of Fame, Members, or playlist:

```javascript
const CONFIG = {
  // 1) CLAN HEADS (LEADERS: EYA & YUU)
  heads: {
    eya: {
      discordId: "1485470671126659233", // Eya's Discord ID
      name: "Eya",
      tag: "@eya",
      role: "Clan Head",
      badge: "Founder",
      bio: "Reigning supreme with Yuu ✦ Clan Head",
      banner: "https://i.pinimg.com/736x/c3/7d/01/c37d01791fb5750df074198736daa5bb.jpg",
      color: "#ff7ebb",
    },
    yuu: {
      discordId: "1496377821076127774", // Yuu's Discord ID
      name: "Yuu",
      tag: "@yuu",
      role: "Clan Head",
      badge: "Founder",
      bio: "Commanding the Syndicate with Eya ✦ Clan Head",
      banner: "https://i.pinimg.com/736x/36/74/4a/36744aed24a1e4825445d5321e251e4c.jpg",
      color: "#7eb4ff",
    },
  },

  // 2) HALL OF FAME
  hallOfFame: [
    { discordId: "806491799626711060", fallbackName: "Syndicate Elite 1" },
    // Add more here...
  ],

  // 3) MEMBERS
  members: [
    { discordId: "1498547153897914382", fallbackName: "Vanguard 1" },
    // Add more here...
  ],

  // 4) PLAYLIST
  playlist: [
    {
      title: "Addicted To You",
      artist: "Local Track",
      src: "Addicted To You.mp3",
    },
  ],
};
```

---

## 🚀 How to Run

Double-click [`index.html`](file:///C:/Users/kyllj/.gemini/antigravity/scratch/xolums-showcase/index.html) to open in your browser!
