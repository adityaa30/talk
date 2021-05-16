<script>
  import { onMount } from "svelte";
  import { localAudioEnabled, localVideoEnabled } from "../stores/User";
  import Card from "@smui/card";
  import Fab, { Icon } from "@smui/fab";
  import { cDebounceButtonClickDelay } from "../utils/Constants";
  import debounce from "lodash.debounce";

  let video;
  let hasAudioTrack = false,
    hasVideoTrack = false;

  onMount(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    console.log(`%c[Preview] LocalStream:`, "color: LightBlue", stream);
    console.log(`%c[Preview] Tracks:`, "color: LightBlue", stream.getTracks());

    // Start rendering the video in UI
    video.srcObject = stream;

    hasAudioTrack = stream.getAudioTracks().length > 0;
    hasVideoTrack = stream.getVideoTracks().length > 0;
  });

  const toggleVideo = debounce(async () => {
    const stream = video.srcObject;
    console.debug(
      `%c[Preview] toggleVideo: localVideoEnabled=${$localVideoEnabled}, tracks=`,
      "color: LightBlue",
      stream.getTracks()
    );

    // Check if this call is redundant
    if ($localVideoEnabled === stream.getVideoTracks().length > 0) return;

    if ($localVideoEnabled) {
      // Unmute Video -> Get new video track
      const videoStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      console.debug(`%c[Preview] toggleVideo: new VideoStreamTracks=`, "color: LightBlue", videoStream.getTracks());

      stream.addTrack(videoStream.getVideoTracks()[0]);
    } else {
      // Mute Video
      const track = stream.getVideoTracks()[0];
      console.log(`%c[Preview] toggleVideo: Removing track`, "color: LightBlue", track);

      track.enabled = false;
      track.stop();
      stream.removeTrack(track);
    }
  }, cDebounceButtonClickDelay);

  const toggleAudio = debounce(async () => {
    const stream = video.srcObject;
    console.debug(
      `%c[Preview] toggleAudio: localAudioEnabled=${$localAudioEnabled}, tracks=`,
      "color: LightBlue",
      stream.getTracks()
    );

    // Check if this call is redundant
    if ($localAudioEnabled === stream.getAudioTracks().length > 0) return;

    if ($localAudioEnabled) {
      // Unmute Audio -> Get new audio track
      const audioStream = await navigator.mediaDevices.getUserMedia({ video: false, audio: true });
      console.debug(`%c[Preview] toggleAudio: new AudioStreamTracks=`, "color: LightBlue", audioStream.getTracks());

      stream.addTrack(audioStream.getAudioTracks()[0]);
    } else {
      // Mute Audio
      const track = stream.getAudioTracks()[0];
      console.log(`%c[Preview] toggleAudio: Removing track`, "color: LightBlue", track);

      track.enabled = false;
      track.stop();
      stream.removeTrack(track);
    }
  }, cDebounceButtonClickDelay);

  function handleVideoFabClick() {
    localVideoEnabled.set(!$localVideoEnabled);
    toggleVideo();
  }

  function handleAudioFabClick() {
    localAudioEnabled.set(!$localAudioEnabled);
    toggleAudio();
  }
</script>

<Card>
  <div class="container">
    <video autoplay bind:this="{video}" muted playsinline></video>

    <div id="preview-action-buttons-container">
      <Fab
        id="preview-video-toggle-button"
        style="margin: var(--margin-large) var(--margin-medium);"
        enabled="{hasVideoTrack}"
        on:click="{handleVideoFabClick}"
      >
        <Icon class="material-icons">{$localVideoEnabled ? "videocam" : "videocam_off"}</Icon>
      </Fab>
      <Fab
        id="preview-audio-toggle-button"
        style="margin: var(--margin-large) var(--margin-medium);"
        enabled="{hasAudioTrack}"
        on:click="{handleAudioFabClick}"
      >
        <Icon class="material-icons">{$localAudioEnabled ? "mic" : "mic_off"}</Icon>
      </Fab>
    </div>
  </div>
</Card>

<style>
  .container {
    position: relative;
    width: 100%;
    align-self: center;

    background: #212f3d;

    display: inline-block;
    border-radius: var(--card-border-radius);
    overflow: auto;

    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;

    transition: border-color 0.2s, height 0.3s ease-in-out, width 0.5s, height 0.5s;
  }

  video {
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: var(--card-border-radius);

    z-index: 1;
  }

  #preview-action-buttons-container {
    width: 100%;
    position: absolute;
    bottom: 0;

    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;

    z-index: 2;
  }
</style>
