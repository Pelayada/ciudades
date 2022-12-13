
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { GeneralCard } from './index.jsx';

jest.mock('../../commons/hooks/useFetchMeteo', () => ({
  useFetchMeteo : jest.fn()
}))

describe( 'Test component GeneralCard', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('can render title GeneralCard', () => {
   
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      ReactDOM.createRoot(container).render(<GeneralCard title='Información' />);
    });
    const headerCard = container.querySelector('.headerCard h2');
    expect(headerCard.textContent).toBe('Información');
  });

  it('can render button GeneralCard', () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      ReactDOM.createRoot(container).render(<GeneralCard />);
    });
    const button = container.querySelector("button");
    expect(button.innerHTML).toBe("_");
  
    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
  
    expect(button.innerHTML).toBe("▢");
  });
})