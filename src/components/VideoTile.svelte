<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { getNameInitials, hasVideoTrack, isInViewport } from "../utils/utils";

  export let height: string = "200px";
  export let borderColor: string = "#ffffff00"; // transparent

  /* Works with only the video-track, audio-track if present if muted */
  export let source: MediaStream;
  export let name: string;

  const initials = getNameInitials(name);

  let video: HTMLVideoElement;
  let isVideoVisible = false;

  function handleOnScrollEvent() {
    if (video === null) return;
    if (isInViewport(video)) {
      if (video.srcObject === null) {
        video.srcObject = source;
        isVideoVisible = true;
      }
    } else {
      if (video.srcObject !== null) {
        video.srcObject = null;
        isVideoVisible = false;
      }
    }
  }

  onMount(() => {
    video.srcObject = source;
    isVideoVisible = hasVideoTrack(source) && isInViewport(video);
    document.addEventListener("scroll", handleOnScrollEvent);
  });

  onDestroy(() => {
    video.srcObject = null;
    isVideoVisible = false;
    document.removeEventListener("scroll", handleOnScrollEvent);
  });
</script>

<div class="video-tile-container" style="height: {height}; border-color: {borderColor};">
  <video bind:this="{video}" autoplay muted></video>
  <div class="circle" style="{isVideoVisible ? 'display: none;' : ''}">
    <div class="initials">{initials}</div>
  </div>
</div>

<style lang="scss">
  .video-tile-container {
    width: 100%;
    align-self: center;
    text-align: center;
    margin: var(--margin-medium);

    position: relative;
    display: inline-block;
    border-radius: var(--card-border-radius);
    border-width: 0.2rem;
    border-style: solid;
    overflow: hidden;

    background: #212f3d;

    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

    transition: border-color 0.2s, height 0.3s ease-in-out, width 0.5s, height 0.5s;
  }

  .video-tile-container:hover {
    border-color: #007dcf !important;
  }

  video {
    height: 100%;
    border-radius: var(--card-border-radius);
    margin: 0;
  }

  .circle {
    height: calc(var(--video-tile-initials-radius) * 2);
    width: calc(var(--video-tile-initials-radius) * 2);
    background-color: #007dcf;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;

    position: absolute;
    top: calc(50% - var(--video-tile-initials-radius));
    left: calc(50% - var(--video-tile-initials-radius));

    display: table;
  }

  .initials {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    font-weight: bolder;
    font-size: var(--video-tile-initials-radius);
  }
</style>
