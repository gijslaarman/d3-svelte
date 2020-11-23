<script>
  export let title;
  export let description;
</script>

<style>
  header {
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header > * {
    flex: 1 0;
  }

  .right-side {
    text-align: right;
  }
</style>

<header>
  <div class="left-side">
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
  <div class="right-side">
    <slot />
  </div>
</header>
