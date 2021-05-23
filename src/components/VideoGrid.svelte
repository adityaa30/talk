<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  import VideoTile from "./VideoTile.svelte";
  import Store from "../utils/LocalStore";
  import { cName } from "../utils/Constants";
  import { sleep } from "../utils/utils";

  let videos: Array<MediaStream> = [];

  onMount(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: true });
    for (let i = 0; i < 50; ++i) {
      videos.push(stream);
      videos = [...videos];
      await sleep(500);
    }
  });

  onDestroy(() => {
    const stream = videos[0];
    stream.getTracks().forEach((track: MediaStreamTrack) => track.stop());
    videos = [];
  });

  let name = Store.get(cName, "");
</script>

<video-grid transition:fade>
  {#each videos as video}
    <VideoTile name="{name}" source="{video}" />
  {/each}
</video-grid>

<style lang="scss">
  video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    justify-items: center;
    align-items: center;
    gap: var(--margin-large);

    padding: var(--margin-large);
    margin: var(--margin-medium);

    backdrop-filter: blur(5px);
    background-color: hsla(240, 3%, 11%, 0.4);
    box-shadow: inset 0 0 0 0.2px rgb(245 245 245 / 70%), hsla(0, 0%, 0%, 0.3) 2px 5px 19px 7px;
    border-radius: 0.4rem;
  }

  @media (max-width: 576px) {
    video-grid {
      display: flex;
      flex-direction: column;
    }
  }
</style>
