import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  test("Debe cambiar el valor de la caja de texto", () => {
    render(<AddCategory categories={[]} setCategories={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Luffy" } });

    expect(input.value).toBe("Luffy");

    // screen.debug();
  });

  test("Debe de llamar setCategories si el input tiene un valor", () => {
    const inputValue = "Luffy";
    const setCategories = jest.fn();
    const categories = [];

    render(
      <AddCategory categories={categories} setCategories={setCategories} />
    );
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    /*  expect(setCategories).toHaveBeenCalledWith(() => [
      inputValue,
      ...categories,
    ]); */
  });

  test("No debe llamar el setCategories si el input está vacío", () => {
    const setCategories = jest.fn();
    const categories = [];

    render(
      <AddCategory categories={categories} setCategories={setCategories} />
    );
    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(setCategories).not.toHaveBeenCalled();
  });
});
