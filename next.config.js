const webpack = require("webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Optional: Enables reading mapbox token from environment variable
    config.plugins.push(
      new webpack.EnvironmentPlugin({
        MapboxAccessToken: process.env.MAPBOX_TOKEN,
      })
    );
    return config;
  },
};

module.exports = nextConfig;
