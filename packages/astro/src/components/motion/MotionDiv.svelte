<script lang="ts">
  import { Motion } from 'svelte-motion';
  let { children = null, ...props } = $props();
</script>

<Motion {...props} let:motion let:props>
  <div {...props} use:motion>
    {@render children?.()}
  </div>
</Motion>
