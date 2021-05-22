<script>
  import Dock from "../components/Dock.svelte";
</script>

<div id="dock">
  <Dock />
</div>

<style lang="scss">
  #dock {
    position: fixed;
    margin-bottom: 0.3rem;
    bottom: 0;
    left: 0;
    z-index: 9900;
    width: 100%;
    height: 5.2rem;
    padding: 0.4rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
  }
</style>
