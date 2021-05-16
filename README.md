# Talk 🎙📽💬

Flexible Collaboration App. 

Live at: [https://adityaa30.github.io/talk/](https://adityaa30.github.io/talk/)

## Setup Guide 🎬

```bash
# Clone this repository
https://github.com/adityaa30/talk/tree/main

# Install dependencies
npm install 

# Start the development server
npm run dev
```

## Development Plan 👩‍💻🧑‍💻

### Tech Stack 💻

- Language - [Svelte](https://svelte.dev/)
- Styling - [SCSS](https://sass-lang.com/) + [Svelte Material UI](https://sveltematerialui.com/)

### Pages 📜

1. Create / Join Room
2. Conference
3. Settings Modal

### Features 👾🛸

1. Create / Join Form
    - Simple yet elegant form
    - Left Card (Width=`30%`)
        - https://developers.google.com/web/updates/2018/07/css-scroll-snap
        - [Room Form](/src/components/RoomForm.svelte)
    - Right Card (Width=`60%`)
        - [Preview](/src/components/Preview.svelte)

2. Conference Page
    - Left Pane (Width=`75%`)
        - Collaboration
        - Screen-Share
    - Right Pane (Width=`20%`)
        - Top (Height=`40%`) - Dominant Speaker Tile
        - Bottom (Height=`60%`) - Carousel with horizontal movement
            - Remaining speakers 2 x N grid vertical scrollable - sorted according to the active speaker
            - Speaker List (names with avatars)
            - Chat
            - Other items
    - Macbook Style auto-hiding dock
        - Mute / Unmute Buttons
        - End Call Button
        - Settings Button
        - Start Collaboration Button

3. Collaboration
    - Any item settable to all the users (anyone first-come-first-serve can set)
    - Vote to remove (50% + majority kick)
    - Host -> Person who starts a collaboration
    - A host is fixed and will be shown to everyone, in the case host leaves the call, a new host will be decided based
      on an election. (Election criteria TBD)