<script lang="ts">
  import Preview from "./components/Preview.svelte";
  import RoomForm from "./components/RoomForm.svelte";
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
    --margin-small: 0.2rem;
    --margin-medium: 0.35rem;
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
    text-align: center;
    transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
    width: 30%;
  }

  #preview-container {
    text-align: center;
    transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
    width: 60%;
  }

</style>
