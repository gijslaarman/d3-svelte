<script>
  import Header from "./components/Header.svelte";
  import Button from "./components/Button.svelte";
  import Graph from "./components/Graph.svelte";
  import getRandomData from "../scripts/get-data";

  let data = getRandomData();
  let width;

  // Handler for button
  async function getNewData(event) {
    data = await getRandomData();

    // Uncomment to see vehicles data
    console.log("** getting new data **");
    console.table(data.vehicles);
    return data;
  }
</script>

<style>
</style>

<Header title="Car data" description="Something that resembles a description">
  {#await data}
    <Button>Fetching data...</Button>
  {:then data}
    <Button on:click={getNewData}>{data.randomNumber} Fetch new data</Button>
  {/await}
</Header>

<main bind:clientWidth={width}>
  {#await data}
    Fetching data.
  {:then data}
    <Graph data={data.vehicles} {width} height={480} />
  {/await}
</main>
