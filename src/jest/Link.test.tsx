import { render, fireEvent } from "@testing-library/react";
import Link from "@/Components/Link";

it("changes the class when hovered", () => {
  const { getByText } = render(
    <Link page="http://www.facebook.com">Facebook</Link>
  );

  const linkElement = getByText(/facebook/i);

  expect(linkElement).toHaveClass("normal");

  fireEvent.mouseEnter(linkElement);

  expect(linkElement).toHaveClass("hovered");

  fireEvent.mouseLeave(linkElement);

  expect(linkElement).toHaveClass("normal");
});
