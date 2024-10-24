import { fireEvent, render } from "@testing-library/react";
import CheckboxWithLabel from "@/Components/CheckboxWithLabel";

it("CheckboxWithLabel changes the text after click", () => {
  const { getByLabelText } = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  expect(getByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));

  expect(getByLabelText(/on/i)).toBeTruthy();
});
