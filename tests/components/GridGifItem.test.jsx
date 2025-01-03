import { render, screen } from "@testing-library/react";
import { GridGifItem } from "../../src/components/GridGifItem";

describe("Pruebas en <GridGifItem />", () => {
  const title = "Luffy",
    url = "https://one-punch.com/saitama.jpg";

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<GridGifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
    // screen.debug();
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("Debe mostrar el titulo en el componente", () => {
    render(<GridGifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
