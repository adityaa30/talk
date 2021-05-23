<script>
  import Dock from "../components/Dock.svelte";
  import VideoGrid from "../components/Participants.svelte";

  let showParticipants = false;
</script>

{#if showParticipants}
  <VideoGrid />
{/if}

<Dock
  on:dock-participants="{() => {
    showParticipants = !showParticipants;
  }}"
/>
