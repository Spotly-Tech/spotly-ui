export const spinner = (spinSpeed) => ({
    unspecified: {
        rotate: [0, 360],
        transition: {
            repeat: Infinity,
            duration: spinSpeed,
            ease: "linear",
        },
    },
    specified: {
        transition: {
            duration: spinSpeed,
        },
    },
});
