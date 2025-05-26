<script lang="ts">
  import { Motion } from 'svelte-motion';
  let { children, ...props } = $props();
</script>

<Motion {...props} let:motion let:props>
  <p {...props} use:motion>
    {@render children?.()}
  </p>
</Motion>
