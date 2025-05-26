<script lang="ts">
  import { Motion } from 'svelte-motion';
  let { children, elem, ...props } = $props();
</script>

<Motion {...props} let:motion let:props>
  <elem {...props} use:motion>
    {@render children?.()}
  </elem>
</Motion>
