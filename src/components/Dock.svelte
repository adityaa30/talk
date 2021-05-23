<script lang="ts">
  import DockItem from "./DockItem.svelte";
  import { createEventDispatcher } from "svelte";
  import {
    cKeyboardShortCutHangup,
    cKeyboardShortCutToggleMicrophone,
    cKeyboardShortCutToggleCamera,
    cKeyboardShortCutSettings,
    cAssetsPathMic,
    cAssetsPathCallEnd,
    cAssetsPathCamera,
    cAssetsPathSettings,
    cAssetsPathVideoGrid,
    cKeyboardShortShowEveryone,
    cDispatchDockParticipants
  } from "../utils/Constants";

  const dispatch = createEventDispatcher();

  const apps: Array<{
    src: string;
    title: string;
    shortcut: Array<string>;
    task: () => void | null;
  }> = [
    {
      src: cAssetsPathMic,
      title: "Microphone",
      shortcut: cKeyboardShortCutToggleMicrophone,
      task: null
    },
    {
      src: cAssetsPathCallEnd,
      title: "Hangup",
      shortcut: cKeyboardShortCutHangup,
      task: null
    },
    {
      src: cAssetsPathCamera,
      title: "Camera",
      shortcut: cKeyboardShortCutToggleCamera,
      task: null
    },
    {
      src: cAssetsPathVideoGrid,
      title: "Show Everyone",
      shortcut: cKeyboardShortShowEveryone,
      task: () => dispatch(cDispatchDockParticipants)
    },
    {
      src: cAssetsPathSettings,
      title: "Settings",
      shortcut: cKeyboardShortCutSettings,
      task: null
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
      <DockItem mouseX="{mouseX}" {...app} on:click="{() => app.task && app.task()}" />
    {/each}
  </div>
</section>

<style lang="scss">
  .dock-container {
    width: 100%;
    height: var(--dock-height);

    position: fixed;
    left: 0;
    bottom: 0;

    z-index: 5;

    padding: 0.4rem;
    margin-bottom: var(--margin-medium);
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
