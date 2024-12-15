/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import "@testing-library/jest-dom";

import { Button } from "@/components";
import { render } from "@testing-library/react";

describe("Button", () => {
    it("renders button with children", () => {
        const children = "Click Me";
        const { getByText } = render(<Button>{children}</Button>);
        const buttonElement = getByText(children);
        expect(buttonElement).toBeInTheDocument();
    });
    it("renders ghost button with children", () => {
        const variant = "ghost";
        const children = "Ghost Button";

        const { getByText } = render(<Button variant={variant}>{children}</Button>);

        const buttonElement = getByText(children);

        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass(`SpotlyUI-btn--${variant}`);
        expect(getByText(children)).toBeInTheDocument();
    });
    it("renders solid button with children", () => {
        const variant = "solid";
        const children = "Solid Button";

        const { getByText } = render(<Button variant={variant}>{children}</Button>);

        const buttonElement = getByText(children);

        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass(`SpotlyUI-btn--${variant}`);
        expect(getByText(children)).toBeInTheDocument();
    });
    it("renders outlined button with children", () => {
        const variant = "outlined";
        const children = "Outlined Button";
        const { getByText } = render(<Button variant={variant}>{children}</Button>);
        const buttonElement = getByText(children);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass(`SpotlyUI-btn--${variant}`);
    });
    it("renders button with primary color", () => {
        const color = "primary";
        const children = "Primary Button";
        const { getByText } = render(<Button color={color}>{children}</Button>);
        const buttonElement = getByText(children);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass(`SpotlyUI-btn--${color}`);
    });
    it("renders button with secondary color", () => {
        const color = "secondary";
        const children = "Secondary Button";
        const { getByText } = render(<Button color={color}>{children}</Button>);
        const buttonElement = getByText(children);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass(`SpotlyUI-btn--${color}`);
    });
    it("renders button with danger color", () => {
        const color = "danger";
        const children = "Danger Button";
        const { getByText } = render(<Button color={color}>{children}</Button>);
        const buttonElement = getByText(children);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass(`SpotlyUI-btn--${color}`);
    });
    it("renders small button", () => {
        const size = "small";
        const children = "Small Button";
        const { getByText } = render(<Button size={size}>{children}</Button>);
        const buttonElement = getByText(children);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass(`SpotlyUI-btn--${size}`);
    });
    it("renders large button", () => {
        const size = "large";
        const children = "Large Button";
        const { getByText } = render(<Button size={size}>{children}</Button>);
        const buttonElement = getByText(children);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass(`SpotlyUI-btn--${size}`);
    });
    it("renders fullwidth button", () => {
        const size = "fullwidth";
        const children = "Fullwidth Button";
        const { getByText } = render(<Button size={size}>{children}</Button>);
        const buttonElement = getByText(children);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass(`SpotlyUI-btn--${size}`);
    });
    it("renders disabled button", () => {
        const children = "Disabled Button";
        const { getByText } = render(<Button disabled>{children}</Button>);
        const buttonElement = getByText(children);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass("SpotlyUI-btn--disabled");
        expect(buttonElement).toBeDisabled();
    });
    it("renders loading button", () => {
        const loadingText = "Loading";
        const { getByText } = render(<Button isLoading loadingText={loadingText} />);
        const buttonElement = getByText(loadingText);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass("SpotlyUI-btn--loading");
    });
    it("renders icon-only button", () => {
        const icon = <span>❤</span>;
        const { container } = render(<Button btnType="icon" icon={icon} />);
        const iconElement = container.querySelector(".SpotlyUI-icon");
        expect(iconElement).toBeInTheDocument();
    });
    it("renders button with icon at the start", () => {
        const icon = <span>❤</span>;
        const { container } = render(
            <Button btnType="with-icon" icon={icon} iconPosition="start">
                Search
            </Button>
        );
        const startIcon = container.querySelector(".SpotlyUI-btn__startIcon");
        expect(startIcon).toBeInTheDocument();
    });
    it("renders button with icon at the end", () => {
        const icon = <span>❤</span>;
        const { container } = render(
            <Button btnType="with-icon" icon={icon} iconPosition="end">
                Search
            </Button>
        );
        const endIcon = container.querySelector(".SpotlyUI-btn__endIcon");
        expect(endIcon).toBeInTheDocument();
    });
    it("renders square-shaped button", () => {
        const shape = "square";
        const children = "Square Button";
        const { getByText } = render(<Button shape={shape}>{children}</Button>);
        const buttonElement = getByText(children);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass(`SpotlyUI-btn--${shape}`);
    });
});
