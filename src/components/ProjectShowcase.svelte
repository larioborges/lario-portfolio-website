<script lang="ts">
import TimelineItem from '@/ui/TimelineItem.svelte';
import {
	Briefcase, Star,
} from 'lucide-svelte';
import MotionWrapper from '@/components/motion/MotionWrapper.svelte';
import SkillTag from '@/ui/SkillTag.svelte';
import MotionDiv from '@/components/motion/MotionDiv.svelte';
import MotionSpan from '@/components/motion/MotionSpan.svelte';
	import HtmlElement from './ui/HtmlElement.svelte';

const {
	showcaseProjects,
} = $props();
</script>

<section
	id="projects"
	class="from-muted/20 to-background bg-gradient-to-b py-12"
>
	<div class="container mx-auto max-w-4xl px-6 md:px-4">
		<MotionWrapper>
			<h2
				class="mb-8 flex items-center text-center text-2xl font-bold md:inline-block md:text-left"
			>
				<MotionSpan
					class="mr-2 inline-block"
					initial={{
						rotate: 0,
					}}
					whileInView={{
						rotate: [0, -10, 10, -5, 5, 0],
					}}
					transition={{
						duration: 0.5,
						delay: 0.2,
					}}
					viewport={{
						once: true,
					}}
				>
					💼
				</MotionSpan>&nbsp; Project Showcase
			</h2>
		</MotionWrapper>
		<div class="mb-8">
			{#each showcaseProjects as project, index (`${project.title}-${project.period}`)}
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
					<div class="flex flex-wrap justify-center gap-2 md:justify-start">
						{#each project.skills as skill, index (`${skill}-${project.title}`)}
							<SkillTag {index}>
								{skill}
							</SkillTag>
						{/each}
					</div>
					<MotionDiv
						class="bg-background/80 dark:bg-card/10 mt-3 rounded-lg border border-yellow-500/20 p-4 shadow-sm backdrop-blur-sm backdrop-filter dark:border-yellow-500/10"
						initial={{
							opacity: 0,
							y: 20,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.5,
							delay: 0.2,
						}}
						viewport={{
							once: true,
						}}
					>
						<div class="mb-3 flex items-center">
							<div
								class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500/10"
							>
								<Briefcase class="h-4 w-4 text-yellow-500" />
							</div>
							<h4 class="text-sm font-medium">Job Role</h4>
						</div>
						<div class="ml-4 list-none space-y-2 text-sm">
							<HtmlElement content={project.description} />
						</div>
					</MotionDiv>
					<MotionDiv
						class="bg-background/80 dark:bg-card/10 mt-3 rounded-lg border border-yellow-500/20 p-4 shadow-sm backdrop-blur-sm backdrop-filter dark:border-yellow-500/10"
						initial={{
							opacity: 0,
							y: 20,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.5,
							delay: 0.2,
						}}
						viewport={{
							once: true,
						}}
					>
						<div class="mb-3 flex items-center">
							<div
								class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500/10"
							>
								<Star class="h-4 w-4 text-yellow-500" />
							</div>
							<h4 class="text-sm font-medium">Highlights</h4>
						</div>
						<HtmlElement content={project.highlights} />
					</MotionDiv>
				</TimelineItem>
			{/each}
		</div>
	</div>
</section>
