<script>
/* eslint svelte/no-at-html-tags: "off" */
import DOMPurify from 'dompurify';

const {
	content,
} = $props();
</script>

<div class="html-content">
	{@html DOMPurify.sanitize(
		content,
	)}
</div>
