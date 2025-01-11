/// <reference types="vitest" />

import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        dts({ rollupTypes: true, tsconfigPath: "./tsconfig.app.json" }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/components/index.tsx"),
            name: "SpotlyUI",
            fileName: "spotly-ui",
            formats: ["es", "umd"],
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
    test: {
        environment: "jsdom",
        globals: true,
    },
});
