const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    env: {
        //API: isProd ? 'https://us-central1-test-1-600e1.cloudfunctions.net' : 'http://localhost:5001/test-1-600e1/us-central1',
        API: 'http://localhost:5001/test-1-600e1/us-central1',
        MEDIUM_AUTHOR: '@carboleda',
        NAVBAR_OPTIONS: [
            { name: 'Home', url: '/', icon: 'home' },
            { name: 'Blog', url: '/blog', icon: 'blog' },
            { name: 'Sobre mí', url: '/about', icon: 'user' },
        ],
    },
    pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
    generateBuildId: async () => {
        const version = require('./package.json').version;
        return `me-blog-v${version}`;
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // Important: return the modified config
        config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
        return config;
    },
    webpackDevMiddleware: config => {
        // Perform customizations to webpack dev middleware config
        // Important: return the modified config
        return config
    },
};