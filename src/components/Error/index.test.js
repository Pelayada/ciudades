
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { Error } from './index.jsx';
import { useCityContext } from '../../commons/context/PlacesProvider';

jest.mock('../../commons/context/PlacesProvider', () => ({
  useCityContext : jest.fn()
}))

describe( 'Test component Error', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('can render Error with error', () => {
    useCityContext.mockImplementation(() => {
      return {
        error: 'Error al cargar.',
      }
    })
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      ReactDOM.createRoot(container).render(<Error />);
    });
    const errorInput = container.querySelector('.errorInput');
    expect(errorInput.textContent).toBe('Error al cargar.');
  });

  it('can render Error with error with errorFetch', () => {
    useCityContext.mockImplementation(() => {
      return {
        errorFetch: 'Error al cargar.'
      }
    })
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      ReactDOM.createRoot(container).render(<Error />);
    });
    const errorInput = container.querySelector('.errorInput');
    expect(errorInput.textContent).toBe('Error al cargar.');
  });
})
