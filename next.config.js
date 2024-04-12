// import createNextIntlPlugin from 'next-intl/plugin';

// const withNextIntl = createNextIntlPlugin('./src/i18n.ts'); 

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     // output: "export",
//     images: { unoptimized: true },
// }

// export default withNextIntl(nextConfig);


// @ts-check

// @ts-check

const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const config = {};

module.exports = withNextIntl(config);
