// @ts-check
import { defineConfig } from 'astro/config';
import { withZephyr } from "zephyr-astro-integration";
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [withZephyr()],
  adapter: vercel()
});