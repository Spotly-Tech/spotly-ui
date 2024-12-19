export default {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "header-case": [2, "always", "sentence-case"],
        "type-enum": [
            2,
            "always",
            [
                "Build",
                "Chore",
                "CI",
                "Docs",
                "Feat",
                "Fix",
                "Perf",
                "Refactor",
                "Revert",
                "Style",
                "Test",
            ],
        ],
        "type-case": [2, "always", "sentence-case"],
        "scope-case": [2, "always", ["sentence-case"]],
        "subject-case": [2, "always", ["sentence-case"]],
        "body-case": [2, "always", "sentence-case"],
    },
    parserPreset: "./parser-preset.js",
};
