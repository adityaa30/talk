<script lang="ts">
  import Preview from "../components/Preview.svelte";
  import RoomForm from "../components/RoomForm.svelte";
  import { createEventDispatcher } from "svelte";
  import { cDispatchJoinRoom } from "../utils/Constants";

  const dispatch = createEventDispatcher();

  function handleJoinRoom() {
    dispatch(cDispatchJoinRoom);
  }
</script>

<container>
  <div id="room-form-container">
    <RoomForm on:join-room="{handleJoinRoom}" />
  </div>
  <div id="preview-container">
    <Preview />
  </div>
</container>

<style lang="scss">
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
    max-height: 90vh;
  }

  @media screen and (orientation: portrait) and (max-width: 992px) {
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

  @media screen and (orientation: portrait) and (max-width: 576px) {
    container {
      justify-content: start;
    }

    #preview-container {
      margin: 2rem var(--margin-large) var(--margin-large);
    }
  }
</style>
