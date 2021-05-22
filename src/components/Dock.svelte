<script lang="ts">
  import DockItem from "./DockItem.svelte";
  import {
    cKeyboardShortCutHangup,
    cKeyboardShortCutToggleMicrophone,
    cKeyboardShortCutToggleCamera,
    cKeyboardShortCutSettings
  } from "../utils/Constants";

  const apps: Array<{
    src: string;
    title: string;
    shortcut: Array<string>;
  }> = [
    {
      src: "/assets/mic.svg",
      title: "Microphone",
      shortcut: cKeyboardShortCutToggleMicrophone
    },
    {
      src: "/assets/call_end.svg",
      title: "Hangup",
      shortcut: cKeyboardShortCutHangup
    },
    {
      src: "/assets/videocam.svg",
      title: "Camera",
      shortcut: cKeyboardShortCutToggleCamera
    },
    {
      src: "/assets/settings.svg",
      title: "Settings",
      shortcut: cKeyboardShortCutSettings
    }
  ];
  let mouseX: number | null = null;
</script>

<section class="dock-container">
  <div
    class="dock-item-container"
    on:mousemove="{(event) => (mouseX = event.x)}"
    on:mouseleave="{() => (mouseX = null)}"
  >
    {#each apps as app}
      <DockItem mouseX="{mouseX}" {...app} />
    {/each}
  </div>
</section>

<style lang="scss">
  .dock-container {
    margin-bottom: 0.5rem;
    left: 0;
    bottom: 0;
    z-index: 9900;
    position: fixed;
    width: 100%;
    height: 4rem;
    padding: 0.4rem;
    display: flex;
    justify-content: center;
  }

  .dock-item-container {
    backdrop-filter: blur(5px);
    background-color: hsla(240, 3%, 11%, 0.4);
    box-shadow: inset 0 0 0 0.2px rgb(245 245 245 / 70%), hsla(0, 0%, 0%, 0.3) 2px 5px 19px 7px;
    padding: 0.3rem;
    border-radius: 1.2rem;
    height: 100%;
    display: flex;
    align-items: flex-end;
  }
</style>
