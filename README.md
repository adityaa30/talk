![Check Commit](https://github.com/adityaa30/talk/actions/workflows/commit.yml/badge.svg)
![Build & Deploy](https://github.com/adityaa30/talk/actions/workflows/deploy.yml/badge.svg)

# Talk 🎙📽💬

Flexible Collaboration App. Talk allows groups to do all the below fun in just **one** web app.

1. Play online games like [skribbl.io](https://skribbl.io/) & [Mafia](https://mafia.gg/)
2. Share [Google Docs](https://www.google.com/docs/about/) while doing an assignment or taking an interview
3. Watch YouTube movies without sacrificing any audio or video quality over a smart collaboration & synchronization API
4. Much more!

Demo Live at: [https://adityaa30.github.io/talk/](https://adityaa30.github.io/talk/)

## Setup Guide 🎬

```bash
# Clone this repository ⬇️
https://github.com/adityaa30/talk/tree/main

# Install dependencies ⚙️
npm install 

# Start the development server 💥
npm run dev

# Go to http://localhost:5000/ 🕸
```

## Scripts Available 🛠

#### 🪛 `npm run validate`

Used [`svelte-check`](https://www.npmjs.com/package/svelte-check) to check the svelte files for type errors, unused css,
and more. Refer [sveltejs/language-tools](https://github.com/sveltejs/language-tools#svelte-check)

#### 🪛 `npm run format`

Uses [`prettier`](https://prettier.io/)
with [`prettier-plugin-svelte`](https://github.com/sveltejs/prettier-plugin-svelte)
to format Svelte components & typescript files.

- `npm run format:svelte`: Format all `*.svelte` files
- `npm run format:ts`: Format all `*.ts` files

#### 🪛 `npm run deploy`

Publishes [`public`](/public) folder along with build files to `gh-pages` branch
on [GitHub](https://github.com/adityaa30/talk/tree/gh-pages).

- `npm run predeploy` - Validate, formats & builds the project. Automatically executed before `npm run deploy`

#### 🪛 `npm run prepare`

Builds style into a CSS file which in linked in the [`public/index.html`](/public/index.html)

- `npm run smui-theme-light` - Builds light theme css files in `public/build/smui.css`
- `npm run smui-theme-dark` - Builds dark theme css files in `public/build/smui-dark.css`

#### 🪛 `npm run build`

Creates an optimised version of the app. You can run the newly built app with `npm run start`. This
uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app
will work when you deploy to platforms like [Heroku](https://heroku.com).

#### 🪛 `npm run dev`

Starts a devlopment server hosted on `http://localhost:5000` which watches for changes in files in [`src`][/src]
directory and rebuilds & hot-reloads webpage on change.

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
    - [x] Basic UI / Components
    - Left Card (Width=`30%`)
        - https://developers.google.com/web/updates/2018/07/css-scroll-snap
        - [x] [Room Form](/src/components/RoomForm.svelte)
    - Right Card (Width=`60%`)
        - [x] [Preview](/src/components/Preview.svelte)

2. Conference Page
    - [ ] Left Pane (Width=`75%`)
        - [ ] Collaboration
        - [ ] Screen-Share
    - [ ] Right Pane (Width=`20%`)
        - [ ] Top (Height=`40%`) - Dominant Speaker Tile
        - [ ] Bottom (Height=`60%`) - Carousel with horizontal movement
            - Main Container view component
            - [ ] Remaining speakers 2 x N grid vertical scrollable - sorted according to the active speaker
            - [ ] Speaker List (names with avatars)
            - [ ] Chat
            - Other items (TBD 💭)
    - [x] Macbook Style auto-hiding dock
        - [ ] Mute / Unmute Buttons
        - [ ] End Call Button
        - [ ] Settings Button
        - [ ] Start Collaboration Button - Shows a dropdown with list of supported apps
        - [ ] Icons Pack

3. Collaboration
    - [ ] Any item settable to all the users (anyone first-come-first-serve can set)
    - [ ] Vote to remove (50% + majority kick)
    - Host -> Person who starts a collaboration
    - [ ] A host is fixed and will be shown to everyone, in the case host leaves the call, a new host will be decided
      based on an election. (Election criteria TBD 💬)
    - [ ] Pin a participant's video (stand-up, small-concerts, etc)

4. Other Features
    - [x] [KeyboardShortcuts](/src/utils/KeyboardShortcutHelper.ts) API
    - [x] [LocalStore](/src/utils/LocalStore.ts) API
    - [ ] Utils to fetch 100ms auth-token and create-room
    - [ ] Read room-id from url
    - [ ] Mobile Responsive Design (Portrait + Landscape)
    - [ ] Animations + Transitions
    - [ ] Integrate [LogRocket](https://logrocket.com/)
   
5. Design Ideas
   - [ ] Animating Border loader (for Preview, VideoTiles)