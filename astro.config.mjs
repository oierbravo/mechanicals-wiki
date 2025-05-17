// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Mechanicals Wiki',
			social: {
				github: 'https://github.com/oierbravo/mechanicals-wiki',
			},
			sidebar: [
				{
					label: 'Mods',
					autogenerate: { directory: 'mods' },

				},
				{
					label: 'Examples',
					autogenerate: { directory: 'examples' },

				},
			],
		}),
	],
});
