<script lang="ts">
  import { interpolate } from "popmotion";
  import { spring } from "svelte/motion";
  import { isMobile, toShortCutString } from "../utils/utils";
  import { createEventDispatcher, onDestroy, onMount } from "svelte";
  import KeyboardShortcutHelper from "../utils/KeyboardShortcutHelper";
  import { cDispatchClick } from "../utils/Constants";

  export let src: string;
  export let title: string;
  export let shortcut: Array<string>;
  export let greyed = false;
  export let mouseX: number | null;

  const tooltip = toShortCutString(shortcut, title);

  const dispatch = createEventDispatcher();

  function handleDockItemClick() {
    dispatch(cDispatchClick);
    console.log("Clicked: ", title);
  }

  onMount(() => {
    KeyboardShortcutHelper.addOnShortcutClickListener(shortcut, handleDockItemClick);
  });

  onDestroy(() => {
    KeyboardShortcutHelper.removeOnShortcutClickListener(handleDockItemClick);
  });

  let el: HTMLImageElement;

  const baseWidth = 57.6;
  const distanceLimit = baseWidth * 6;
  const beyondTheDistanceLimit = distanceLimit + 1;
  const distanceInput = [
    -distanceLimit,
    -distanceLimit / 1.25,
    -distanceLimit / 2,
    0,
    distanceLimit / 2,
    distanceLimit / 1.25,
    distanceLimit
  ];
  const widthOutput = [
    baseWidth,
    baseWidth * 1.1,
    baseWidth * 1.618,
    baseWidth * 2.618,
    baseWidth * 1.618,
    baseWidth * 1.1,
    baseWidth
  ];

  let distance = beyondTheDistanceLimit;

  const widthPX = spring(baseWidth, {
    damping: 0.38,
    stiffness: 0.1
  });

  $: $widthPX = interpolate(distanceInput, widthOutput)(distance);

  let width: string;
  $: width = `${$widthPX / 16}rem`;

  function animate(mouseX: number | null) {
    if (el && mouseX !== null) {
      const rect = el.getBoundingClientRect();

      // get the x coordinate of the img DOMElement's center
      // the left x coordinate plus the half of the width
      const imgCenterX = rect.left + rect.width / 2;

      // difference between the x coordinate value of the mouse pointer
      // and the img center x coordinate value
      distance = mouseX - imgCenterX;
      return;
    }

    distance = beyondTheDistanceLimit;
  }

  $: requestAnimationFrame(() => !isMobile() && animate(mouseX));
</script>

<section>
  <button data-tooltip="{tooltip}" on:click="{handleDockItemClick}" class="{greyed ? 'greyed' : ''}">
    <img bind:this="{el}" src="{src}" alt="{title} Icon" style="width: {width};" />
  </button>
</section>

<style lang="scss">
  @import "src/theme/tooltip.scss";

  button {
    color: inherit;
    text-decoration: none;
    vertical-align: middle;
    border: 0;
    border-radius: 0;
    outline: 0;
    margin: 0;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    user-select: none;
    appearance: none;
    background-color: transparent;

    &:not(:disabled) {
      cursor: pointer;
    }
  }

  .greyed {
    opacity: 0.4;
    background: #000;
  }
</style>
