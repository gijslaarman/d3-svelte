<script>
  export let data;
  export let x;
  export let y;
</script>

<style>
  .information-widget {
    display: block;
    background-color: white;
    padding: 1rem;
    border-radius: 0.375rem;
    border: 1px solid #cecece;
  }
</style>

<g class="information-widget" transform="translate({x}, {y})">
  <text>{data.merk}</text>
  <text y="16">{data.voertuigsoort}</text>
</g>
