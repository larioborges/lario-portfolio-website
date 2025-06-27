<script lang="ts">
import Briefcase from 'lucide-svelte/icons/briefcase';
import Star from 'lucide-svelte/icons/star';
import ContentBlock from '@/ui/ContentBlock.svelte';
import SkillTag from '@/ui/SkillTag.svelte';
import TimelineItem from '@/ui/TimelineItem.svelte';

const { showcaseProjects, project, index } = $props();
</script>

<TimelineItem
	title={`👨‍💻 ${project.name}`}
	subtitle={`🌍 ${project.employerName}`}
	subtitleHref={project.employerWebsiteUrl}
	location={project.location}
	locationHref={project.locationGoogleMapsUrl}
	date={project.period}
	isLast={index === showcaseProjects.length - 1}
  {index}
>
	<div class="project-skills">
    {#each project.skills as skill, index (`${skill}-${index}`)}
      <SkillTag {index}>
				{skill}
			</SkillTag>
    {/each}
	</div>

  <ContentBlock
    heading="Job Role"
    content={project.description}
    HeadingIcon={Briefcase}
  />

  <ContentBlock
    heading="Highlights"
    content={project.highlights}
    HeadingIcon={Star}
  />
</TimelineItem>

<style lang="postcss">
  @reference "@/styles/global.css";
  .project-skills {
    @apply flex flex-wrap justify-center gap-2 md:justify-start;
  }
</style>
