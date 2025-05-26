<script lang="ts">
	import { personalInfo } from '../data';
	import MotionP from './motion/MotionP.svelte';
	import MotionDiv from './motion/MotionDiv.svelte';
	import MotionSpan from './motion/MotionSpan.svelte';
</script>

<footer class="border-t border-yellow-500/10 py-6 bg-gradient-to-b from-background to-muted/20 backdrop-blur-sm">
	<div class="container max-w-4xl mx-auto px-6 md:px-4">
		<MotionDiv
			class="flex flex-col md:flex-row justify-between items-center"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
		>
			<MotionP class="text-sm text-muted-foreground text-center md:text-left" whileHover={{ scale: 1.01 }}>
				&copy; {new Date().getFullYear()}
				{personalInfo.name}. All rights reserved. ✨
			</MotionP>
			<MotionP
				class="text-sm text-muted-foreground mt-2 md:mt-0 text-center md:text-left"
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
					transition={{ duration: 0.5 }}
				>
					💻
				</MotionSpan>&nbsp; and&nbsp;
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
			<a href="https://www.flaticon.com/free-icons/nerd" title="nerd icons">
				Nerd icons created by Smashicons - Flaticon
			</a>
		</MotionDiv>
	</div>
</footer>
