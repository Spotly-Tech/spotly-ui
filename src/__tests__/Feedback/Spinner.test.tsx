/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Spinner } from "@/components";

import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

describe("Spinner", () => {
    it("renders spinner with unspecified variant", () => {
        render(<Spinner variant="unspecified" />);
        const spinnerElement = screen.getByRole("img");
        expect(spinnerElement).toBeInTheDocument();
    });
    it("renders spinner with specified variant", () => {
        render(<Spinner variant="specified" value={25} />);
        const spinnerElement = screen.getByRole("img");
        expect(spinnerElement).toBeInTheDocument();
        expect(spinnerElement).toHaveAttribute("aria-label", "25%");
    });
    it("renders spinner with specified variant and with label", () => {
        render(<Spinner variant="specified" value={50} withLabel />);
        const spinnerElement = screen.getByRole("img");
        const labelElement = screen.getByText(/50%/);
        expect(spinnerElement).toBeInTheDocument();
        expect(labelElement).toBeInTheDocument();
    });

    it("does not render label when withLabel is false", () => {
        render(<Spinner variant="specified" value={75} withLabel={false} />);
        const spinnerElement = screen.getByRole("img");
        const labelElement = screen.queryByText(/75%/);
        expect(spinnerElement).toBeInTheDocument();
        expect(labelElement).not.toBeInTheDocument();
    });
    it("renders spinner with custom size", () => {
        render(<Spinner variant="unspecified" size="sm" />);
        const spinnerElement = screen.getByRole("img", { hidden: true });
        const svgSpinnerElement = spinnerElement.children[0];
        expect(spinnerElement).toBeInTheDocument();
        expect(svgSpinnerElement.tagName).toBe("svg");
        expect(svgSpinnerElement).toHaveClass("SpotlyUI-spinner--size-sm");
    });
    it("renders spinner with custom color", () => {
        render(<Spinner variant="unspecified" color="primary" />);
        const spinnerElement = screen.getByRole("img", { hidden: true });
        const svgSpinnerElement = spinnerElement.children[0];
        expect(spinnerElement).toBeInTheDocument();
        expect(svgSpinnerElement.tagName).toBe("svg");
        expect(svgSpinnerElement).toHaveClass("SpotlyUI-spinner--color-primary");
    });
    it("renders spinner with custom thickness", () => {
        render(<Spinner variant="unspecified" thickness="thin" />);
        const spinnerElement = screen.getByRole("img", { hidden: true });
        const svgSpinnerElement = spinnerElement.children[0];
        expect(spinnerElement).toBeInTheDocument();
        expect(svgSpinnerElement.tagName).toBe("svg");
        expect(svgSpinnerElement).toHaveClass("SpotlyUI-spinner--thickness-thin");
    });
});
