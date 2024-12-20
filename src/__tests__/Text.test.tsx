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
        const children = "Default Text";
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
        const children = "Spotly UI GitHub";
        const href = "https://github.com/Spotly-Tech/spotly-ui";
        const { getByText } = render(
            <Text as="a" href={href}>
                {children}
            </Text>
        );
        const textElement = getByText(children);
        expect(textElement.tagName).toBe("A");
        expect(textElement).toHaveAttribute("href", "https://github.com/Spotly-Tech/spotly-ui");
    });
    it("renders span element with xs size", () => {
        const children = "Spotly UI GitHub";
        const { getByText } = render(<Text size="xs">{children}</Text>);
        const textElement = getByText(children);
		expect(textElement).toHaveClass("SpotlyUI-text--size-xs")
    });
});
