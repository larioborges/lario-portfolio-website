<script lang="ts">
  import { Motion } from 'svelte-motion';
  let { children, ...props } = $props();
</script>

<Motion {...props} let:motion let:props>
  <li {...props} use:motion>
    {@render children?.()}
  </li>
</Motion>
