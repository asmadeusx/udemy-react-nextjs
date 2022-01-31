module.exports = {
  images: {
    domains: ["courses-top.ru"],
  },
  webpack(config, options) {
    config.module.rules.push({
      loader: "@svgr/webpack",
      // issuer: {
      //   and: [/\.(js|ts)x?$/]
      // },
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [{ removeViewBox: false }],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
};
