import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en componente GifGrid', () => {

    const category = 'Hunter x Hunter';

    test('Debe de mostrar loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category));

    });

    test('Debe mostrar items cuando se cargan los imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 1,
                title: 'Genei Ryodan',
                url: 'https://hxh.cl/chrolloxhisoka/'
            },
            {
                id: 2,
                title: 'Zoldycks',
                url: 'https://hxh.cl/SilvaZoldyck/'
            },
            {
                id: 3,
                title: 'Gon',
                url: 'https://hxh.cl/GonvsPitou/'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(3);

    });

})