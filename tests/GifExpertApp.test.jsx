import { render, screen, waitFor } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en la app GifExpertApp', () => {

    test('Debe coincidir con el snapshot', () => {

        const { container } = render(<GifExpertApp/>);
        expect(container).toMatchSnapshot();

    });

    test('Debe venir el input vacio', () => {

        render(<GifExpertApp/>);
        const textbox = screen.getByRole('textbox');
        expect(textbox.value).toBeFalsy();

    });

    test('Debe venir el card-grid vacio', () => {

        const { container } = render(<GifExpertApp/>);
        const card_grid = container.getElementsByClassName('card-grid');
        expect(card_grid.length).toBe(1);
        expect(card_grid[0].hasChildNodes()).toBeFalsy();

    });

    test('Debe renderizar los gifs', async() => {

        const { container } = render(<GifExpertApp/>);
        const card_grid = container.getElementsByClassName('card-grid');
        await waitFor(
            () => expect(card_grid[0].childNodes.length).toBeGreaterThan(0)
        );
        expect(card_grid[0].hasChildNodes()).toBeTruthy();

    });

});