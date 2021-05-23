<script lang="ts">
  import Home from "./pages/Home.svelte";
  import Meeting from "./pages/Meeting.svelte";

  import KeyboardShortcutHelper from "./utils/KeyboardShortcutHelper";
  import { Page } from "./typings/Page";
  import { onDestroy, onMount } from "svelte";
  import Footer from "./components/Footer.svelte";

  onMount(() => {
    KeyboardShortcutHelper.Start();
  });

  onDestroy(() => {
    KeyboardShortcutHelper.Stop();
  });

  let page = Page.Home;

  function handleJoinRoom() {
    page = Page.Meeting;
  }
</script>

<app-container>
  <div style="flex-grow: 1">
    {#if page === Page.Meeting}
      <Meeting />
    {:else}
      <Home on:join-room="{handleJoinRoom}" />
    {/if}
  </div>
  <Footer />
</app-container>

<style lang="scss">
  :global(:root) {
    --card-border-radius: 0.35rem;
    --margin-small: 0.25rem;
    --margin-medium: 0.5rem;
    --margin-large: 1rem;

    --video-tile-initials-radius: 2rem;
    --dock-height: 4rem;

    // Extra small devices (portrait phones, less than 576px)
    --very-small-device-width-limit: 576px;

    // Small devices (landscape phones, between 576px and 768px)
    --small-device-width-limit: 768px;

    // Medium devices (tablets, 768px and up)
    --medium-device-width-limit: 992px;

    // Large devices (desktops, 768px and 992px)
    --large-device-width-limit: 1200px;

    // Extra large devices (large desktops, 1200px and up)
    // No media query since this is the default here
  }

  app-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  }
</style>
