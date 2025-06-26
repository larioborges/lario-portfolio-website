<script lang="ts">
import type { ObserverEventDetails, Options } from 'svelte-inview';
import { inview } from 'svelte-inview';
import { Motion } from 'svelte-motion';
import { cn } from '@/utils';

let isInView = $state(false);
const options: Options = {
	rootMargin: '50px',
	unobserveOnEnter: true,
};

const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
	isInView = detail.inView;
};

const {
	title,
	titleHref = null,
	subtitle,
	subtitleHref = null,
	location,
	locationHref = null,
	date,
	isLast = false,
	index = 0,
	children,
} = $props();
</script>

<div
	use:inview="{options}"
	oninview_change="{handleChange}"
>
	{#if isInView}
		<Motion
			initial={{
				opacity: 0,
				y: 20,
			}}
			transition={{
				duration: 0.3,
				delay: index * 0.1,
			}}
			let:motion
		>
			<div class="relative flex gap-6" use:motion>
				<div class="flex flex-col items-center">
					<Motion
						initial={{
							scale: 0,
						}}
						transition={{
							type: 'spring',
							stiffness: 300,
							damping: 15,
							delay: index * 0.2 + 0.2,
						}}
					>
						<div class="bg-background dark:bg-muted z-10 flex h-[18px] w-[18px] rounded-full border border-yellow-500/50" use:motion></div>
					</Motion>
					{#if !isLast}
						<Motion
							initial={{
								height: 0,
							}}
							transition={{
								duration: 0.8,
								delay: index * 0.2 + 0.3,
							}}
							let:motion
						>
							<div class="w-px grow bg-gradient-to-b from-yellow-500/50 to-green-500/30 dark:from-yellow-500/30 dark:to-yellow-100/10" use:motion></div>
						</Motion>
					{/if}
				</div>
				<div class={cn(
					'pb-8',
					isLast ? 'pb-0' : '',
				)}>
					<Motion
						initial={{
							opacity: 0,
							x: -20,
						}}
						transition={{
							duration: 0.5,
							delay: index * 0.2 + 0.1,
						}}
					>
						<div class="flex flex-col gap-0.5" use:motion>
							<h3 class="mb-2 text-xl font-extrabold">{`📅 ${date}`}</h3>
							<div class="mb-6 pl-3">
								{#if titleHref}
									<a
										href={titleHref}
										target="_blank"
										rel="noreferrer"
									>
										<h3 class="font-medium">{title}</h3>
									</a>
								{:else}
									<h3 class="font-medium">{title}</h3>
								{/if}
								{#if subtitleHref}
									<a
										href={subtitleHref}
										target="_blank"
										rel="noreferrer"
									>
										<p class="text-muted-foreground text-sm">{subtitle}</p>
									</a>
								{:else}
									<p class="text-muted-foreground text-sm">{subtitle}</p>
								{/if}
								{#if locationHref}
									<a
										href={locationHref}
										target="_blank"
										rel="noreferrer"
									>
										<p class="text-muted-foreground text-sm">📍 {location}</p>
									</a>
								{:else}
									<p class="text-muted-foreground text-sm">📍 {location}</p>
								{/if}
								<div>
									<Motion
										initial={{
											opacity: 0,
										}}
										transition={{
											duration: 0.3,
											delay: index * 0.2 + 0.4,
										}}
										let:motion
									>
										<div use:motion>
											{@render children?.()}
										</div>
									</Motion>
								</div>
							</div>
						</div>
					</Motion>
				</div>
			</div>
		</Motion>
	{/if}
</div>
