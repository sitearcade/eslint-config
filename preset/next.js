// export

module.exports = {
  plugins: ['@next/next'],
  
  rules: {
    '@next/next/no-css-tags': 1,
    '@next/next/no-sync-scripts': 1,
    '@next/next/no-html-link-for-pages': 1,
    '@next/next/no-img-element': 1,
    '@next/next/no-unwanted-polyfillio': 1,
    '@next/next/no-page-custom-font': 1,
    '@next/next/no-title-in-document-head': 1,
    '@next/next/google-font-display': 1,
    '@next/next/google-font-preconnect': 1,
    '@next/next/link-passhref': 1,
    '@next/next/no-document-import-in-page': 2,
    '@next/next/no-head-import-in-document': 2,
  },
};
