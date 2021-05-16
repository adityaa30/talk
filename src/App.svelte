<script lang="ts">
  import Preview from "./components/Preview.svelte";
  import RoomForm from "./components/RoomForm.svelte";
  import KeyboardShortcutHelper from "./utils/KeyboardShortcutHelper";
  import { onDestroy, onMount } from "svelte";

  onMount(() => {
    KeyboardShortcutHelper.Start();
  });

  onDestroy(() => {
    KeyboardShortcutHelper.Stop();
  });
</script>

<container>
  <div id="room-form-container">
    <RoomForm />
  </div>
  <div id="preview-container">
    <Preview />
  </div>
</container>

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

  container {
    width: 100%;
    height: 100%;
    align-self: center;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-content: baseline;
  }

  #room-form-container {
    order: 1;
    text-align: center;
    transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
    width: 30%;
  }

  #preview-container {
    order: 2;
    text-align: center;
    transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
    width: 60%;
  }

  @media (max-width: 992px) {
    container {
      flex-direction: column;
      justify-content: center;
    }

    #preview-container {
      order: 1;
      width: 80%;
      margin: var(--margin-large);
    }

    #room-form-container {
      order: 2;
      width: 80%;
      height: 25%;
      margin: var(--margin-large);
    }
  }

  @media (max-width: 576px) {
    container {
      justify-content: start;
    }

    #preview-container {
      margin: 2rem var(--margin-large) var(--margin-large);
    }
  }
</style>
