/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import "@testing-library/jest-dom";

import React from "react";

import { render, screen } from "@testing-library/react";

import { ShinyText } from "@/components/Typography/ShinyText";

describe("ShinyText", () => {
    it("renders correctly", () => {
        render(<ShinyText>ShinyText</ShinyText>);
        const shinyText = screen.getByText("ShinyText");
        expect(shinyText).toBeInTheDocument();
    });
    it("renders correctly with custom className", () => {
        render(<ShinyText className="custom-class">ShinyText</ShinyText>);
        const shinyText = screen.getByText("ShinyText");
        expect(shinyText).toHaveClass("custom-class");
    });
    it("renders correctly with custom color", () => {
        render(<ShinyText color="rgb(255,0,0)">ShinyText</ShinyText>);
        const shinyText = screen.getByText("ShinyText");
        expect(shinyText).toHaveStyle({ color: "rgb(255,0,0)" });
    });
    it("renders correctly with custom speed", () => {
        render(<ShinyText speed={10}>ShinyText</ShinyText>);
        const shinyText = screen.getByText("ShinyText");
        expect(shinyText).toHaveStyle({ animationDuration: "10s" });
    });
    it("renders sizes correctly", () => {
        render(<ShinyText size="xl">ShinyText</ShinyText>);
        const shinyText = screen.getByText("ShinyText");
        expect(shinyText).toHaveClass("SpotlyUI-shiny-text--size-xl");
    });
    it("renders correctly with custom weight", () => {
        render(<ShinyText weight="bold">ShinyText</ShinyText>);
        const shinyText = screen.getByText("ShinyText");
        expect(shinyText).toHaveClass("SpotlyUI-shiny-text--weight-bold");
    });
    it("renders correctly with custom align", () => {
        render(<ShinyText align="center">ShinyText</ShinyText>);
        const shinyText = screen.getByText("ShinyText");
        expect(shinyText).toHaveClass("SpotlyUI-shiny-text--align-center");
    });
    it("renders correctly with italic style", () => {
        render(<ShinyText italic>ShinyText</ShinyText>);
        const shinyText = screen.getByText("ShinyText");
        expect(shinyText).toHaveClass("SpotlyUI-shiny-text--italic");
    });
    it("renders correctly with underline style", () => {
        render(<ShinyText underline>ShinyText</ShinyText>);
        const shinyText = screen.getByText("ShinyText");
        expect(shinyText).toHaveClass("SpotlyUI-shiny-text--underline");
    });
    it("renders correctly with disabled style", () => {
        render(<ShinyText disabled>ShinyText</ShinyText>);
        const shinyText = screen.getByText("ShinyText");
        expect(shinyText).toHaveClass("SpotlyUI-shiny-text--disabled");
    });
    it("renders correctly as different HTML tag", () => {
        render(<ShinyText as="h1">ShinyText</ShinyText>);
        const shinyText = screen.getByText("ShinyText");
        expect(shinyText).toHaveClass("SpotlyUI-shiny-text");
        expect(shinyText.tagName).toBe("H1");
    });
    it("renders correctly with passed ref", () => {
        const ref = React.createRef<HTMLSpanElement>();
        render(<ShinyText ref={ref}>ShinyText</ShinyText>);
        const shinyText = screen.getByText("ShinyText");
        expect(ref.current).toBe(shinyText);
    });
});
