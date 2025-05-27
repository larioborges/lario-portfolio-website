<script lang="ts">
	import { personalInfo } from '../data';
	import MotionP from './motion/MotionP.svelte';
	import MotionDiv from './motion/MotionDiv.svelte';
	import MotionSpan from './motion/MotionSpan.svelte';
</script>

<footer class="from-background to-muted/20 border-t border-yellow-500/10 bg-gradient-to-b py-6 backdrop-blur-sm">
	<div class="container mx-auto max-w-4xl px-6 md:px-4">
		<MotionDiv
			class="flex flex-col items-center justify-between md:flex-row"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
		>
			<MotionP
				class="text-muted-foreground text-center text-sm md:text-left"
				whileHover={{ scale: 1.01 }}
			>
				&copy; {new Date().getFullYear()}
				{personalInfo.name}. All rights reserved. ✨
			</MotionP>
			<MotionP
				class="text-muted-foreground mt-2 text-center text-sm md:mt-0 md:text-left"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.2, duration: 0.5 }}
				viewport={{ once: true }}
				whileHover={{ scale: 1.01 }}
			>
				Built with&nbsp;
				<MotionSpan
					class="inline-block"
					initial={{ rotate: 0 }}
					whileHover={{ rotate: 360 }}
					transition={{ duration: 0.5 }}>💻</MotionSpan
				>&nbsp; and&nbsp;
				<MotionSpan
					class="inline-block"
					animate={{
						scale: [1, 1.2, 1],
					}}
					transition={{
						repeat: Infinity,
						repeatType: 'reverse',
						duration: 1.5,
					}}
				>
					❤️
				</MotionSpan>
			</MotionP>
		</MotionDiv>
		<MotionDiv>
			<a
				href="https://www.flaticon.com/free-icons/nerd"
				title="nerd icons"
			>
				Nerd icons created by Smashicons - Flaticon
			</a>
		</MotionDiv>
	</div>
</footer>
