import "@testing-library/jest-dom";

import { FlipText } from "@/components";
import { render, screen } from "@testing-library/react";


/**
 * Keep in mind that `letters.length` is not returning 4 as length but 8 
 * because we have two sets of letters, one for the disappearing letters 
 * and one for the appearing letters.
 */

describe("FlipText", () => {
    it("splits text into individual letters", () => {
        render(<FlipText>Test</FlipText>);
        const letters = screen.getAllByText(/T|e|s|t/);
        expect(letters).toHaveLength(letters.length);
    });
    it("applies default props correctly", () => {
        render(<FlipText>Test</FlipText>);
        const letters = screen.getAllByText(/T|e|s|t/);
        letters.forEach((letter) => {
            expect(letter).toHaveClass(
                "SpotlyUI-flip-text__letter SpotlyUI-flip-text--color-default SpotlyUI-flip-text--size-base SpotlyUI-flip-text--weight-normal"
            );
        });
    });

    it("applies custom props correctly", () => {
        render(
            <FlipText color="primary" size="lg" weight="bold">
                Test
            </FlipText>
        );
        const letters = screen.getAllByText(/T|e|s|t/);
        letters.forEach((letter) => {
            expect(letter).toHaveClass(
                "SpotlyUI-flip-text__letter SpotlyUI-flip-text--color-primary SpotlyUI-flip-text--size-lg SpotlyUI-flip-text--weight-bold"
            );
        });
    });
});
