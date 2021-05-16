<style>
  .container {
    position: relative;
    width: 100%;
    min-width: 640px;
    min-height: 480px;
    align-self: center;

    background: #212f3d;

    display: inline-block;
    border-radius: var(--card-border-radius);
    box-sizing: border-box;
    overflow: auto;

    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

    transition: border-color 0.2s, height 0.3s ease-in-out, width 0.5s, height 0.5s;
  }

  video {
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: var(--card-border-radius);
  }
</style>

<script>
  import { onMount } from "svelte";
  import Card from "@smui/card";

  let video;

  onMount(async () => {
    video.srcObject = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
  });
</script>

<div class="container">
  <Card>
    <video autoplay bind:this="{video}" muted playsinline></video>
  </Card>
</div>
