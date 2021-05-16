<style>
  form {
    width: 100%;
  }

  text-field-container {
    width: 100%;
    display: inline-block;
    margin: var(--margin-small) 0;
  }
</style>

<script>
  import Textfield from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import Button, { Label } from "@smui/button";
  import Card, { Actions, Content } from "@smui/card";

  let name = "";
  let room = "";
</script>

<form>
  <Card>
    <Content>
      <text-field-container>
        <Textfield style="width: 100%;" variant="outlined" bind:value="{name}" label="Name">
          <Icon class="material-icons" slot="leadingIcon">account_circle</Icon>
        </Textfield>
      </text-field-container>

      <text-field-container>
        <Textfield style="width: 100%;" variant="outlined" bind:value="{room}" label="Room">
          <Icon class="material-icons" slot="leadingIcon">celebration</Icon>
        </Textfield>
      </text-field-container>
    </Content>

    <Actions>
      <Button variant="raised" type="submit">
        <Label>Join</Label>
      </Button>
      <Button variant="raised" type="button">
        <Label>Create</Label>
      </Button>
    </Actions>
  </Card>
</form>
