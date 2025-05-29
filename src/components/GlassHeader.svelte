<script lang="ts">
	import ThemeToggle from '@/ui/ThemeToggle.svelte';
	import { Menu, X } from 'lucide-svelte';
	import { AnimatePresence } from 'svelte-motion';
	import MotionA from '@/motion/MotionA.svelte';
	import MotionDiv from '@/motion/MotionDiv.svelte';
	import MotionButton from '@/motion/MotionButton.svelte';
	import southAfrica from '@/images/south-africa.webp';
	import luigiCap from '@/images/luigi-cap.webp';

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

	const { name } = $props();
</script>

<header
	class="bg-background/70 dark:bg-background/40 border-border/40 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur-md backdrop-filter"
>
	<div
		class="container mx-auto flex max-w-4xl items-center justify-between p-4"
	>
		<MotionA
			class="flex items-center text-lg font-medium"
			href="/"
			whileHover={{
				scale: 1.05,
			}}
			whileTap={{
				scale: 0.95,
			}}
		>
			<img
				width="50px"
				alt="South Africa"
				src={southAfrica.src}
				class="mr-2.5 inline-block align-middle dark:hidden"
			/>
			<img
				width="35px"
				alt="Luigi Cap"
				src={luigiCap.src}
				class="mr-2.5 hidden align-middle dark:inline-block"
			/>
			{name}
		</MotionA>

		<nav class="hidden items-center space-x-6 text-sm font-medium md:flex">
			{#each navLinks as { name, href }, index (name)}
				<MotionA
					{href}
					class="hover:text-foreground/80 text-foreground/60 transition-colors"
					initial={{
						opacity: 0,
						y: -10,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						duration: 0.2,
						delay: index * 0.1,
					}}
					whileHover={{
						y: -2,
					}}
				>
					{name}
				</MotionA>
			{/each}
		</nav>

		<div class="flex items-center space-x-2">
			<ThemeToggle />

			<MotionButton
				class="text-foreground p-2 md:hidden"
				onclick={toggleMenu}
				aria-label="Toggle menu"
				whileTap={{
					scale: 0.95,
				}}
			>
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
				class="border-border/10 bg-background/80 dark:bg-background/40 border-t px-4 py-4 backdrop-blur-md backdrop-filter md:hidden"
				initial={{
					opacity: 0,
					height: 0,
				}}
				animate={{
					opacity: 1,
					height: 'auto',
				}}
				exit={{
					opacity: 0,
					height: 0,
				}}
				transition={{
					duration: 0.3,
				}}
			>
				<nav class="flex flex-col space-y-4 text-sm font-medium">
					{#each navLinks as { name, href }, index (name)}
						<MotionA
							{href}
							class="hover:text-foreground/80 text-foreground/60 py-2 transition-colors"
							onclick={toggleMenu}
							initial={{
								opacity: 0,
								x: -20,
							}}
							animate={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								duration: 0.2,
								delay: index * 0.1,
							}}
						>
							{name}
						</MotionA>
					{/each}
				</nav>
			</MotionDiv>
		{/if}
	</AnimatePresence>
</header>
