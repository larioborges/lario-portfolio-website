<script lang="ts">
  import { Motion } from 'svelte-motion';
  let { children, ...props } = $props();
</script>

<Motion {...props} let:motion let:props>
  <a {...props} use:motion>
    {@render children?.()}
  </a>
</Motion>
