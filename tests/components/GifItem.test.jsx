import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas del componente GifItem', () => {

    const url = `https://github.com/`;
    const title = 'Este es un titulo';

    test('Debe validar que url y texto alternativo no venga vacio y sea el indicado', () => {
        render(<GifItem url={url} title={title}/>);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe validar que titulo no venga vacio y se muestre el indicado en el <p></p>', () => {
        // const {getAllByAltText} = render(<GifItem url={url} title={title}/>);
        // expect(getAllByAltText('Este es un titulo')).toBeTruthy();
        render(<GifItem url={url} title={title}/>);
        const {textContent} = screen.getByRole('paragraph');
        expect(textContent).toBe(title);
    });

    test('Probando el snapshot', () => {
        const { container } = render(<GifItem url={url} title={title}/>);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imaagen con ell url y el alt indicado', () => { 
        render(<GifItem url={url} title={title}/>);
        // screen.debug();

    });
});