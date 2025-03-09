/**
 * Copyright (c) Spotly Tech
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextInput } from "@/components";

import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { FaSearch } from "react-icons/fa";

describe("TextInput", () => {
    it("renders default input with placeholder", () => {
        render(<TextInput placeholder="Default TextInput" />);
        const inputElement = screen.getByPlaceholderText("Default TextInput");
        expect(inputElement).toBeInTheDocument();
    });
    it("renders input with default color", () => {
        render(<TextInput placeholder="Default Color" color="default" />);
        const inputElement = screen.getByPlaceholderText("Default Color");
        expect(inputElement).toHaveClass("SpotlyUI-input--color-default");
    });
    it("renders input with primary color", () => {
        render(<TextInput placeholder="Primary Color" color="primary" />);
        const inputElement = screen.getByPlaceholderText("Primary Color");
        expect(inputElement).toHaveClass("SpotlyUI-input--color-primary");
    });
    it("renders input with secondary color", () => {
        render(<TextInput placeholder="Secondary Color" color="secondary" />);
        const inputElement = screen.getByPlaceholderText("Secondary Color");
        expect(inputElement).toHaveClass("SpotlyUI-input--color-secondary");
    });
    it("renders input with success color", () => {
        render(<TextInput placeholder="Success Color" color="success" />);
        const inputElement = screen.getByPlaceholderText("Success Color");
        expect(inputElement).toHaveClass("SpotlyUI-input--color-success");
    });
    it("renders input with danger color", () => {
        render(<TextInput placeholder="Danger Color" color="danger" />);
        const inputElement = screen.getByPlaceholderText("Danger Color");
        expect(inputElement).toHaveClass("SpotlyUI-input--color-danger");
    });
    it("renders with small size", () => {
        render(<TextInput placeholder="Small TextInput" inputSize="sm" />);
        const inputElement = screen.getByPlaceholderText("Small TextInput");
        expect(inputElement).toHaveClass("SpotlyUI-input--size-sm");
    });
    it("renders with medium size", () => {
        render(<TextInput placeholder="Medium TextInput" inputSize="md" />);
        const inputElement = screen.getByPlaceholderText("Medium TextInput");
        expect(inputElement).toHaveClass("SpotlyUI-input--size-md");
    });
    it("renders with large size", () => {
        render(<TextInput placeholder="Large TextInput" inputSize="lg" />);
        const inputElement = screen.getByPlaceholderText("Large TextInput");
        expect(inputElement).toHaveClass("SpotlyUI-input--size-lg");
    });
    it("renders disabled input", () => {
        render(<TextInput placeholder="Disabled TextInput" disabled />);
        const inputElement = screen.getByPlaceholderText("Disabled TextInput");
        expect(inputElement).toBeDisabled();
        expect(inputElement).toHaveClass("SpotlyUI-input--disabled");
    });
    it("renders input without icon related classes", () => {
        render(<TextInput placeholder="TextInput without Icon" />);
        const inputElement = screen.getByPlaceholderText("TextInput without Icon");
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).not.toHaveClass("SpotlyUI-input-wrapper--with-icon");
        expect(inputElement).not.toHaveClass("SpotlyUI-input-wrapper--icon-start");
        expect(inputElement).not.toHaveClass("SpotlyUI-input-wrapper--icon-end");
    });
    it("renders input with icon at the start", () => {
        render(
            <TextInput
                placeholder="TextInput with Icon"
                withIcon
                icon={<FaSearch title="icon" />}
            />
        );
        const inputElement = screen.getByPlaceholderText("TextInput with Icon");
        const inputWrapper = inputElement.parentElement;
        const iconElement = screen.getByTitle("icon");
        const iconWrapper = iconElement.closest("span");
        expect(inputElement).toBeInTheDocument();
        expect(iconElement).toBeInTheDocument();
        expect(inputWrapper).toHaveClass("SpotlyUI-input-wrapper--with-icon");
        expect(inputWrapper).toHaveClass("SpotlyUI-input-wrapper--icon-start");
        expect(iconWrapper).toHaveClass("SpotlyUI-input__icon");
        expect(iconWrapper).toHaveClass("SpotlyUI-input__icon--color-default");
    });
    it("renders input with icon at the end", () => {
        render(
            <TextInput
                placeholder="TextInput with Icon"
                withIcon
                icon={<FaSearch title="icon" />}
                iconPosition="end"
                color="primary"
            />
        );
        const inputElement = screen.getByPlaceholderText("TextInput with Icon");
        const inputWrapper = inputElement.parentElement;
        const iconElement = screen.getByTitle("icon");
        const iconWrapper = iconElement.closest("span");
        expect(inputElement).toBeInTheDocument();
        expect(iconElement).toBeInTheDocument();
        expect(inputWrapper).toHaveClass("SpotlyUI-input-wrapper--with-icon");
        expect(inputWrapper).toHaveClass("SpotlyUI-input-wrapper--icon-end");
        expect(iconWrapper).toHaveClass("SpotlyUI-input__icon");
        expect(iconWrapper).toHaveClass("SpotlyUI-input__icon--color-primary");
    });
});
