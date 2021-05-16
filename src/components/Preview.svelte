<script>
  import debounce from "lodash.debounce";
  import { onDestroy, onMount } from "svelte";
  import { localAudioEnabled, localVideoEnabled } from "../stores/User";
  import Card from "@smui/card";
  import Fab, { Icon } from "@smui/fab";
  import {
    cDebounceButtonClickDelay,
    cKeyboardShortCutLocalVideoMute,
    cKeyboardShortCutLocalAudioMute
  } from "../utils/Constants";
  import KeyboardShortcutHelper from "../utils/KeyboardShortcutHelper";

  let video;
  let hasAudioTrack = false;
  let hasVideoTrack = false;

  onMount(async () => {
    if ($localAudioEnabled || $localVideoEnabled) {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: $localVideoEnabled,
        audio: $localAudioEnabled
      });

      console.debug(`%c[Preview] LocalStream:`, "color: Green", stream);
      console.debug(`%c[Preview] Tracks:`, "color: Green", stream.getTracks());

      // Start rendering the video in UI
      video.srcObject = stream;

      hasAudioTrack = stream.getAudioTracks().length > 0;
      hasVideoTrack = stream.getVideoTracks().length > 0;
    } else {
      // Initialize any empty media-stream
      video.srcObject = new MediaStream();
    }

    KeyboardShortcutHelper.addOnKeyClickListener(cKeyboardShortCutLocalVideoMute, toggleVideo);
    KeyboardShortcutHelper.addOnKeyClickListener(cKeyboardShortCutLocalAudioMute, toggleAudio);
  });

  onDestroy(() => {
    KeyboardShortcutHelper.removeOnKeyClickListener(cKeyboardShortCutLocalVideoMute, toggleVideo);
    KeyboardShortcutHelper.removeOnKeyClickListener(cKeyboardShortCutLocalAudioMute, toggleAudio);
  });

  const toggleVideoTrack = debounce(async () => {
    const stream = video.srcObject;
    console.debug(
      `%c[Preview] toggleVideo: localVideoEnabled=${$localVideoEnabled}, tracks=`,
      "color: GreenYellow",
      stream.getTracks()
    );

    // Check if this call is redundant
    if ($localVideoEnabled === stream.getVideoTracks().length > 0) return;

    if ($localVideoEnabled) {
      // Unmute Video -> Get new video track
      const videoStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      console.debug(`%c[Preview] toggleVideo: new VideoStreamTracks=`, "color: GreenYellow", videoStream.getTracks());

      stream.addTrack(videoStream.getVideoTracks()[0]);
    } else {
      // Mute Video
      const track = stream.getVideoTracks()[0];
      console.debug(`%c[Preview] toggleVideo: Removing track`, "color: GreenYellow", track);

      track.enabled = false;
      track.stop();
      stream.removeTrack(track);
    }
  }, cDebounceButtonClickDelay);

  const toggleAudioTrack = debounce(async () => {
    const stream = video.srcObject;
    console.debug(
      `%c[Preview] toggleAudio: localAudioEnabled=${$localAudioEnabled}, tracks=`,
      "color: GreenYellow",
      stream.getTracks()
    );

    // Check if this call is redundant
    if ($localAudioEnabled === stream.getAudioTracks().length > 0) return;

    if ($localAudioEnabled) {
      // Unmute Audio -> Get new audio track
      const audioStream = await navigator.mediaDevices.getUserMedia({ video: false, audio: true });
      console.debug(`%c[Preview] toggleAudio: new AudioStreamTracks=`, "color: GreenYellow", audioStream.getTracks());

      stream.addTrack(audioStream.getAudioTracks()[0]);
    } else {
      // Mute Audio
      const track = stream.getAudioTracks()[0];
      console.log(`%c[Preview] toggleAudio: Removing track`, "color: GreenYellow", track);

      track.enabled = false;
      track.stop();
      stream.removeTrack(track);
    }
  }, cDebounceButtonClickDelay);

  function toggleVideo() {
    localVideoEnabled.set(!$localVideoEnabled);
    toggleVideoTrack();
  }

  function toggleAudio() {
    localAudioEnabled.set(!$localAudioEnabled);
    toggleAudioTrack();
  }
</script>

<Card>
  <div class="container">
    <video autoplay bind:this="{video}" muted playsinline></video>

    <div id="preview-action-buttons-container">
      <fab-wrapper data-tooltip="{cKeyboardShortCutLocalVideoMute}">
        <Fab
          id="preview-video-toggle-button"
          style="margin: var(--margin-large) var(--margin-medium);"
          enabled="{hasVideoTrack}"
          on:click="{toggleVideo}"
        >
          <Icon class="material-icons">{$localVideoEnabled ? "videocam" : "videocam_off"}</Icon>
        </Fab>
      </fab-wrapper>

      <fab-wrapper data-tooltip="{cKeyboardShortCutLocalAudioMute}">
        <Fab
          id="preview-audio-toggle-button"
          style="margin: var(--margin-large) var(--margin-medium);"
          enabled="{hasAudioTrack}"
          on:click="{toggleAudio}"
        >
          <Icon class="material-icons">{$localAudioEnabled ? "mic" : "mic_off"}</Icon>
        </Fab>
      </fab-wrapper>
    </div>
  </div>
</Card>

<style lang="scss">
  @import "src/theme/tooltip";

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
