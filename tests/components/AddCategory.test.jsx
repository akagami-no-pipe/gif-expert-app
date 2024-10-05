import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en componente addCategory', () => {

    const inputValue = 'Full Metal Alchemist';

    test('debe cambiar el valor del input de texto', () => {

        render(<AddCategory onNewCategory={ () => {}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: {value: inputValue}});
        expect(input.value).toBe(inputValue);

    });

    test('No debe retornar nada si el input viene vacio', () => {

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();

    });

    test('Debe llamar al onNewCategory si el input tiene un valor', () => {

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: {value: inputValue} });
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        
    });

});