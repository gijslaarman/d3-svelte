<style>
  button {
    background-color: tomato;
    color: white;
    padding: 0.75rem 1.25rem;
    border: none;
    border-radius: 0.375rem;
    font-size: 1.125rem;
    cursor: pointer;
    margin: 0;
    transition: all 200ms;
  }

  button:hover {
    background-color: indianred;
  }

  button:active {
    box-shadow: inset 4px 5px 2px 0 rgba(0, 0, 0, 0.2);
    background-color: indianred;
  }
</style>

<button on:click>
  <slot />
</button>
