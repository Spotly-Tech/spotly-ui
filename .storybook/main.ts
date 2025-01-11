import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    typescript: {
        reactDocgen: "react-docgen-typescript",
    },
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "@storybook/addon-docs",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    viteFinal: async (config) => {
        config.plugins?.push(
            tsconfigPaths({
                projects: [path.resolve(path.dirname(__dirname), "tsconfig.app.json")],
            })
        );
        return config;
    },
};
export default config;
