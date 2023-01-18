import autoprefixer from 'autoprefixer';

export default {
  base: 'https://tverdohleboff.github.io/digiency/',
  mode: 'production',
  build: {
    outDir: 'docs',
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
};
