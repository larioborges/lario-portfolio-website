<style lang="postcss">
@reference "@/styles/global.css";

.tags {
	@apply mt-auto space-y-2;

	> div {
		@apply flex flex-wrap justify-center gap-2 md:justify-center-safe;
	}
}
</style>

<script lang="ts">
import SkillTag from '@/ui/SkillTag.svelte';

const { award } = $props();
</script>

<div class="tags">
	<div>
    {#each award.tags as
    	tag, index
    (`${tag}-${index}`)}
			<SkillTag>
				{tag}
			</SkillTag>
		{/each}
	</div>
</div>
