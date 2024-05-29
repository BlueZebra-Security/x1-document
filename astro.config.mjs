import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://bluezebra-security.github.io',
	base: 'x1-document',
	title: 'BlueZebra X1',
	output: 'static',
	build: {
		assets: 'astro'
	},
	integrations: [
		starlight({
			title: 'BlueZebra X1',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Products',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Overview', link: '/guides/example/' },
						{
							label: 'Access Control',
							items: [
								{ label: 'Installation', link: '/constellations/andromeda/' },
								{ label: 'Operation', link: '/constellations/orion/' },
							],
						},
						{
							label: 'Lock Devices',
							items: [
								{ label: 'Overview', link: '/door/overview' },
								{
									label: 'Door Lock', items: [
										{ label: 'Installation', link: '/constellations/andromeda/' },
										{ label: 'Operation', link: '/constellations/orion/' },
									],
								},
								{
									label: 'Flap Barrier Gate', items: [
										{ label: 'Installation', link: '/constellations/andromeda/' },
										{ label: 'Operation', link: '/constellations/orion/' },
									],
								},
								{
									label: 'Locker', items: [
										{ label: 'Installation', link: '/constellations/andromeda/' },
										{ label: 'Operation', link: '/constellations/orion/' },
									],
								},
							]
						},
						{
							label: 'Input Devices',
							items: [
								{ label: 'Overview', link: '/guides/example/' },
								{
									label: 'NFC / RFID / Passcode', items: [
										{ label: 'Installation', link: '/constellations/andromeda/' },
										{ label: 'Operation', link: '/constellations/orion/' },
									],
								},
								{
									label: 'FaceScan', items: [
										{ label: 'Installation', link: '/constellations/andromeda/' },
										{ label: 'Operation', link: '/constellations/orion/' },
									],
								},
								{
									label: 'Fingerprint', items: [
										{ label: 'Installation', link: '/constellations/andromeda/' },
										{ label: 'Operation', link: '/constellations/orion/' },
									],
								},
								{
									label: 'QRCode scan', items: [
										{ label: 'Installation', link: '/constellations/andromeda/' },
										{ label: 'Operation', link: '/constellations/orion/' },
									],
								},
							]
						},
						{
							label: 'Manager Room',
							items: [
								{ label: 'Installation', link: '/constellations/andromeda/' },
								{ label: 'User Guide', link: '/constellations/orion/' },
							],
						},
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'X1 SDK', link: '/constellations/orion/' },
					],
					// autogenerate: { directory: 'reference' },
				},
				{
					label: 'Download',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Manager Room', link: '/download/manager/' },
						{ label: 'SDK', link: '/download/sdk/' },
						{ label: 'User Guide', link: '/download/guide/' },
						{ label: 'Datasheet', link: '/download/datasheet/' },
					],
				},
			],
		}),
	],
});
