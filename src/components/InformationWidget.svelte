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

  .information-widget rect {
    width: 20px;
    height: 20px;
    transform: translate(-10px, -10px);
  }
</style>

<g class="information-widget" transform="translate({x}, {y})">
  <text>{data.merk}</text>
  <text y="16">{data.voertuigsoort}</text>
</g>
