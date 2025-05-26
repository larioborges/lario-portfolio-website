<script lang="ts">
  import { Motion } from 'svelte-motion';
  let { children, ...props } = $props();
</script>

<Motion {...props} let:motion let:props>
  <h1 {...props} use:motion>
    {@render children?.()}
  </h1>
</Motion>
