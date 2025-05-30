<script>
/* eslint svelte/no-at-html-tags: "off" */
import DOMPurify from 'dompurify';

const {
	content,
} = $props();
</script>

{@html DOMPurify.sanitize(
	content,
)}
