import type { NextConfig } from 'next';
import type { RuleSetRule } from 'webpack';

const nextConfig: NextConfig = {
  images: {
    domains: ['files.stripe.com'],
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule: RuleSetRule): rule is RuleSetRule & { test: RegExp } =>
        typeof rule === 'object' && rule?.test instanceof RegExp && rule.test.test('.svg'),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
