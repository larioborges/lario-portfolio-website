<script lang="ts">
	import ThemeToggle from './ui/ThemeToggle.svelte';
	import { personalInfo } from '../data';
	import { Menu, X } from 'lucide-svelte';
	import { AnimatePresence } from 'svelte-motion';
	import MotionA from './motion/MotionA.svelte';
	import MotionDiv from './motion/MotionDiv.svelte';
	import MotionButton from './motion/MotionButton.svelte';

	let isMenuOpen = $state(false);
	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	const navLinks = [
		{
			name: '💼 Experience',
			href: '#experience',
		},
		{
			name: '🛠️ Skills',
			href: '#skills',
		},
		{
			name: '🚀 Projects',
			href: '#projects',
		},
		{
			name: '🏆 Awards',
			href: '#awards',
		},
		{
			name: '🎓 Education',
			href: '#education',
		},
	];
</script>

<header
	class="top-0 sticky z-50 w-full backdrop-blur-md backdrop-filter bg-background/70 dark:bg-background/40 border-b border-border/40 supports-[backdrop-filter]:bg-background/60"
>
	<div class="container max-w-4xl mx-auto p-4 flex justify-between items-center">
		<MotionA class="flex items-center text-lg font-medium" href="/" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
			<img width="50px" alt="South Africa" src="/images/south-africa.webp" class="inline-block dark:hidden align-middle mr-2.5" />
			<img width="35px" alt="Luigi Cap" src="/images/luigi-cap.webp" class="dark:inline-block hidden align-middle mr-2.5" />
			{personalInfo.name}
		</MotionA>

		<nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
			{#each navLinks as { name, href }, index (name)}
				<MotionA
					{href}
					class="transition-colors hover:text-foreground/80 text-foreground/60"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2, delay: index * 0.1 }}
					whileHover={{ y: -2 }}
				>
					{name}
				</MotionA>
			{/each}
		</nav>

		<div class="flex items-center space-x-2">
			<ThemeToggle />

			<MotionButton class="md:hidden p-2 text-foreground" onclick={toggleMenu} aria-label="Toggle menu" whileTap={{ scale: 0.95 }}>
				{#if isMenuOpen}
					<X size={24} />
				{:else}
					<Menu size={24} />
				{/if}
			</MotionButton>
		</div>
	</div>

	<AnimatePresence>
		{#if isMenuOpen}
			<MotionDiv
				class="md:hidden py-4 px-4 border-t border-border/10 backdrop-blur-md backdrop-filter bg-background/80 dark:bg-background/40"
				initial={{ opacity: 0, height: 0 }}
				animate={{ opacity: 1, height: 'auto' }}
				exit={{ opacity: 0, height: 0 }}
				transition={{ duration: 0.3 }}
			>
				<nav class="flex flex-col space-y-4 text-sm font-medium">
					{#each navLinks as { name, href }, index (name)}
						<MotionA
							{href}
							class="transition-colors hover:text-foreground/80 text-foreground/60 py-2"
							onclick={toggleMenu}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.2, delay: index * 0.1 }}
						>
							{name}
						</MotionA>
					{/each}
				</nav>
			</MotionDiv>
		{/if}
	</AnimatePresence>
</header>
