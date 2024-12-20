/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import "@testing-library/jest-dom";

import { Text } from "@/components";
import { render } from "@testing-library/react";

describe("Text", () => {
    it("renders as a <span> by default", () => {
        const children = "Span Text";
        const { getByText } = render(<Text>{children}</Text>);
        const textElement = getByText(children);
        expect(textElement.tagName).toBe("SPAN");
    });
    it("renders with default classes", () => {
        const children = "Default Text";
        const { getByText } = render(<Text>{children}</Text>);
        const textElement = getByText(children);

        expect(textElement).toHaveClass(
            "SpotlyUI-text SpotlyUI-text--color-default SpotlyUI-text--size-base SpotlyUI-text--weight-normal SpotlyUI-text--align-left"
        );
    });
    it("renders <a> element with children and link to github repo", () => {
        const children = "<a> Element Text";
        const href = "https://github.com/Spotly-Tech/spotly-ui";
        const { getByText } = render(
            <Text as="a" href={href}>
                {children}
            </Text>
        );
        const textElement = getByText(children);
        expect(textElement.tagName).toBe("A");
        expect(textElement).toHaveAttribute(
            "href",
            "https://github.com/Spotly-Tech/spotly-ui"
        );
    });
    it("renders span element with default color", () => {
        const children = "Default Color Text";
        const { getByText } = render(<Text>{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--color-default");
    });
    it("renders span element with default-gradient color", () => {
        const children = "Default Gradient Text";
        const { getByText } = render(<Text color="default-gradient">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--color-default-gradient");
    });
    it("renders span element with primary color", () => {
        const children = "Primary Color Text";
        const { getByText } = render(<Text color="primary">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--color-primary");
    });
    it("renders span element with secondary color", () => {
        const children = "Secondary Color Text";
        const { getByText } = render(<Text color="secondary">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--color-secondary");
    });
    it("renders span element with danger color", () => {
        const children = "Danger Color Text";
        const { getByText } = render(<Text color="danger">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--color-danger");
    });
    it("renders span element with warning color", () => {
        const children = "Warning Color Text";
        const { getByText } = render(<Text color="warning">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--color-warning");
    });
    it("renders span element with info color", () => {
        const children = "Info Color Text";
        const { getByText } = render(<Text color="info">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--color-info");
    });
    it("renders span element with default emphasis", () => {
        const children = "Default Emphasis Text";
        const { getByText } = render(<Text>{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).not.toHaveClass("SpotlyUI-text--emphasis-default");
    });
    it("renders span element with high emphasis", () => {
        const children = "High Emphasis Text";
        const { getByText } = render(<Text emphasis="high">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--emphasis-high");
    });
    it("renders span element with medium emphasis", () => {
        const children = "Medium Emphasis Text";
        const { getByText } = render(<Text emphasis="medium">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--emphasis-medium");
    });
    it("renders span element with low emphasis", () => {
        const children = "Low Emphasis Text";
        const { getByText } = render(<Text emphasis="low">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--emphasis-low");
    });
    it("renders span element with low-bold emphasis", () => {
        const children = "Low-Bold Emphasis Text";
        const { getByText } = render(<Text emphasis="low-bold">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--emphasis-low-bold");
    });
    it("renders span element with 2xs size", () => {
        const children = "2xs size";
        const { getByText } = render(<Text size="2xs">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--size-2xs");
    });
    it("renders span element with xs size", () => {
        const children = "xs size";
        const { getByText } = render(<Text size="xs">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--size-xs");
    });
    it("renders span element with sm size", () => {
        const children = "sm size";
        const { getByText } = render(<Text size="sm">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--size-sm");
    });
    it("renders span element with base size", () => {
        const children = "base size";
        const { getByText } = render(<Text size="base">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--size-base");
    });
    it("renders span element with lg size", () => {
        const children = "lg size";
        const { getByText } = render(<Text size="lg">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--size-lg");
    });
    it("renders span element with xl size", () => {
        const children = "xl size";
        const { getByText } = render(<Text size="xl">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--size-xl");
    });
    it("renders span element with 2xl size", () => {
        const children = "2xl size";
        const { getByText } = render(<Text size="2xl">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--size-2xl");
    });
    it("renders span element with 3xl size", () => {
        const children = "3xl size";
        const { getByText } = render(<Text size="3xl">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--size-3xl");
    });
    it("renders span element with thin weight", () => {
        const children = "thin weight";
        const { getByText } = render(<Text weight="thin">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--weight-thin");
    });
    it("renders span element with normal weight", () => {
        const children = "normal weight";
        const { getByText } = render(<Text weight="normal">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--weight-normal");
    });
    it("renders span element with medium weight", () => {
        const children = "medium weight";
        const { getByText } = render(<Text weight="medium">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--weight-medium");
    });
    it("renders span element with semibold weight", () => {
        const children = "semibold weight";
        const { getByText } = render(<Text weight="semibold">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--weight-semibold");
    });
    it("renders span element with bold weight", () => {
        const children = "bold weight";
        const { getByText } = render(<Text weight="bold">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--weight-bold");
    });
    it("renders span element with black weight", () => {
        const children = "black weight";
        const { getByText } = render(<Text weight="black">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--weight-black");
    });
    it("renders span element with left alignment", () => {
        const children = "left alignment";
        const { getByText } = render(<Text align="left">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--align-left");
    });
    it("renders span element with center alignment", () => {
        const children = "center alignment";
        const { getByText } = render(<Text align="center">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--align-center");
    });
    it("renders span element with right alignment", () => {
        const children = "right alignment";
        const { getByText } = render(<Text align="right">{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--align-right");
    });
    it("renders span element with italic styling", () => {
        const children = "italic styling";
        const { getByText } = render(<Text italic>{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--italic");
    });
    it("renders span element with underline styling", () => {
        const children = "underline styling";
        const { getByText } = render(<Text underline>{children}</Text>);
        const textElement = getByText(children);
        expect(textElement).toHaveClass("SpotlyUI-text--underline");
    });
});
