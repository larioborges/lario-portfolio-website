<script lang="ts">
  import { Motion } from 'svelte-motion';
  let { children, ...props } = $props();
</script>

<Motion let:motion {...props} let:props>
  <span {...props} use:motion>
    {@render children?.()}
  </span>
</Motion>
