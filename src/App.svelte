<script lang="ts">
  import Home from "./pages/Home.svelte";
  import KeyboardShortcutHelper from "./utils/KeyboardShortcutHelper";
  import { onDestroy, onMount } from "svelte";

  onMount(() => {
    KeyboardShortcutHelper.Start();
  });

  onDestroy(() => {
    KeyboardShortcutHelper.Stop();
  });
</script>

<Home />

<style lang="scss">
  :global(:root) {
    --card-border-radius: 0.35rem;
    --margin-small: 0.25rem;
    --margin-medium: 0.5rem;
    --margin-large: 1rem;

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
</style>
