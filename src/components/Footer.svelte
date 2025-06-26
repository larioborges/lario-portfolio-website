<script lang="ts">
import {
	Motion,
} from 'svelte-motion';

const {
	name,
} = $props();
</script>

<style lang="postcss">
	@reference "@/styles/global.css";

	footer {
		@apply from-background to-muted/20 border-t border-yellow-500/10 bg-gradient-to-b py-6 backdrop-blur-sm;

		> div {
			@apply container mx-auto max-w-4xl px-6 md:px-4;
		}
	}

	.footer-content {
		@apply flex flex-col items-center justify-between md:flex-row;
	}

	.footer-text {
		@apply text-muted-foreground text-center text-sm md:text-left;
	}

	.built-by {
		@apply mt-2 md:mt-0;
	}
</style>

<footer>
	<div>
		<!--
		whileInView={{
			opacity: 1,
			y: 0,
		}}
		viewport={{
			once: true,
		}}
		-->
		<Motion
			initial={{
				opacity: 0,
				y: 20,
			}}
			transition={{
				duration: 0.5,
			}}
			let:motion
		>
			<div
				class="footer-content"
				use:motion
			>
				<Motion
					whileHover={{
						scale: 1.01,
					}}
				>
					<p class="footer-text" use:motion>
						&copy; {new Date()
							.getFullYear()}&nbsp;
						{name}. All rights reserved.
					</p>
				</Motion>
				<!--
				whileInView={{
					opacity: 1,
				}}
				viewport={{
					once: true,
				}}
				-->
				<Motion
					initial={{
						opacity: 0,
					}}
					transition={{
						delay: 0.2,
						duration: 0.5,
					}}
					let:motion
				>
					<p class="footer-text built-by" use:motion>
						Built using <a href="https://astro.build/" target="_blank">Astro</a>, <a href="https://svelte.dev/" target="_blank">Svelte</a>, <a href="https://tailwindcss.com" target="_blank">Tailwind</a> & <a href="https://www.contentful.com/" target="_blank">Contentful</a>. View
						<a href="https://github.com/larioborges/lario-portfolio-website" target="_blank">this repo</a>.
					</p>
				</Motion>
			</div>
		</Motion>
	</div>
</footer>
