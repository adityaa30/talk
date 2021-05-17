<script>
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import Button, { Label } from "@smui/button";
  import Card, { Actions, Content } from "@smui/card";
  import { name, roomId } from "../stores/User";
  import { createEventDispatcher } from "svelte";
  import { cDispatchJoinRoom } from "../utils/Constants";

  const dispatch = createEventDispatcher();

  let room = $roomId;

  function handleFormSubmit(e) {
    e.preventDefault();
    name.set($name);
    roomId.set(room);
    console.log(`%c[RoomForm] Join Room roomId=${room}, name=${name}`, "color: LightBlue");

    dispatch(cDispatchJoinRoom);
  }

  function handleCreateRoom() {
    console.log(`%c[RoomForm] Create Room room=${room}, name=${name}`, "color: LightBlue");
  }
</script>

<form on:submit="{handleFormSubmit}">
  <Card>
    <Content>
      <text-field-container>
        <Textfield style="width: 100%;" variant="outlined" bind:value="{$name}" label="Name" required>
          <Icon class="material-icons" slot="leadingIcon">account_circle</Icon>
        </Textfield>
      </text-field-container>

      <text-field-container>
        <Textfield style="width: 100%;" variant="outlined" bind:value="{room}" label="Room" required>
          <Icon class="material-icons" slot="leadingIcon">celebration</Icon>
        </Textfield>
      </text-field-container>
    </Content>

    <Actions>
      <Button variant="raised" type="submit" on:click="{handleFormSubmit}">
        <Label>Join</Label>
      </Button>
      <Button variant="raised" type="button" on:click="{handleCreateRoom}">
        <Label>Create</Label>
      </Button>
    </Actions>
  </Card>
</form>

<style>
  form {
    width: 100%;
  }

  text-field-container {
    width: 100%;
    display: inline-block;
    margin: var(--margin-large) 0 0 0;
  }
</style>
