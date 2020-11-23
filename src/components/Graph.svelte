<script>
  import { scaleLinear } from "d3-scale";
  import * as d3 from "d3";
  import InformationWidget from "./InformationWidget.svelte";

  // Exports
  export let data;
  export let width;
  export let height;

  // Variables
  let value = "aantal_zitplaatsen";
  let label = "kenteken";
  let widgetActive = false;
  let widgetData = {};
  const padding = { top: 20, right: 20, bottom: 30, left: 40 };

  // Reactive variables
  $: bars = data.map((d) => {
    const dValue = d[value];

    // If value is undefined return 0
    const format = {
      label: d[label],
      value: dValue == undefined ? 0 : +dValue,
    };

    return format;
  });

  $: correctedWidth = width - 60;

  $: xScale = scaleLinear()
    .domain([0, bars.length])
    .range([padding.left, width - padding.right]);

  $: yScale = scaleLinear()
    .domain([0, d3.max(bars, (d) => d.value)])
    .range([height - padding.bottom, padding.top]);

  $: yTicks = function () {
    const [startPoint, highestPoint] = yScale.domain();
    const ticks = [];

    for (let i = startPoint; i <= highestPoint; i++) {
      ticks.push(i);
    }

    return ticks;
  };

  $: innerWidth = width - (padding.left + padding.right);
  $: barWidth = innerWidth / bars.length;

  // Methods
  function showInformation(event) {
    const index = this.getAttribute("data-index");
    const thisItemsData = data[index];
    const [x, y] = d3.pointer(event);

    // Set data.
    widgetData = { thisItemsData, x, y };
    widgetActive = true;
  }
</script>

<style>
  .tick {
    font-family: Helvetica, Arial;
    font-size: 0.725em;
    font-weight: 200;
  }

  .tick line {
    stroke: #e2e2e2;
    stroke-dasharray: 2;
  }

  .tick text {
    fill: #aaa;
    text-anchor: start;
  }

  .tick.tick-0 line {
    stroke-dasharray: 0;
  }

  .x-axis .tick text {
    text-anchor: middle;
  }

  .bar-data {
    fill: tomato;
    stroke: none;
    opacity: 0.75;
    transition: all 200ms;
  }

  .bar-container {
    opacity: 0;
    fill: black;
    cursor: pointer;
    transition: all 200ms;
  }

  .bar-container:hover {
    opacity: 0.1;
  }
</style>

<h3>Selected value: {value}</h3>
<p>Click a bar to see more information</p>

<svg
  width={correctedWidth + padding.left + padding.right}
  height={height + padding.top + padding.bottom}>
  <!-- y axis -->
  <g class="axis y-axis">
    {#each yTicks() as tick}
      <g class="tick tick-{tick}" transform="translate(0, {yScale(tick)})">
        <line x2="100%" />
        <text y="-4">{tick}</text>
      </g>
    {/each}
  </g>

  <!-- x axis -->
  <g class="axis x-axis">
    {#each bars as { label }, i}
      <g class="tick" transform="translate({xScale(i)},{height})">
        <text x={barWidth / 2} y="-4">{label}</text>
      </g>
    {/each}
  </g>

  <g class="bars">
    {#each bars as { value }, i}
      <!-- Bars for data -->
      <rect
        class="bar-data"
        x={xScale(i) + 2}
        y={yScale(value)}
        width={barWidth - 4}
        height={height - padding.bottom - yScale(value)} />

      <!-- Bars for clickable -->
      <rect
        class="bar-container"
        width={barWidth - 4}
        x={xScale(i) + 2}
        height={height - padding.bottom}
        data-index={i}
        on:click={showInformation} />
    {/each}
  </g>

  {#if widgetActive}
    <InformationWidget
      data={widgetData.thisItemsData}
      x={widgetData.x}
      y={widgetData.y} />
  {/if}
</svg>
