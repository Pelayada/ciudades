
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { ChangeLanguage } from './index.jsx';
import { useCityContext } from '../../commons/context/PlacesProvider';

jest.mock('../../commons/context/PlacesProvider', () => ({
  useCityContext : jest.fn()
}))

describe( 'Test component ChangeLanguage', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('can render ChangeLanguage button ES', () => {
    useCityContext.mockImplementation(() => {
      return {
        setLanguage: () => { return 'ES' },
      }
    })
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      ReactDOM.createRoot(container).render(<ChangeLanguage />, container);
    });

    const buttonLanguage = container.querySelector(".buttonLanguage");
    const firstButton = buttonLanguage.querySelectorAll('button')[0];

    act(() => {
      firstButton.dispatchEvent(
        new MouseEvent(
          "click", 
          { bubbles: true, target: { textContent: 'ES'} }
      ));
    });
    expect(useCityContext).toHaveBeenCalledTimes(1);
  });

  it('can render ChangeLanguage button EN', () => {
    useCityContext.mockImplementation(() => {
      return {
        setLanguage: () => { return 'EN' },
      }
    })
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      ReactDOM.createRoot(container).render(<ChangeLanguage />, container);
    });

    const buttonLanguage = container.querySelector(".buttonLanguage");
    const secondButton = buttonLanguage.querySelectorAll('button')[1];

    act(() => {
      secondButton.dispatchEvent(
        new MouseEvent(
          "click", 
          { bubbles: true, target: { textContent: 'EN'} }
      ));
    });
    expect(useCityContext).toHaveBeenCalledTimes(1);
  });
})
