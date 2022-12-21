
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { Navbar } from './index.jsx';
import { useChangeText } from '../../commons/hooks/useChangeText';
import { ChangeLanguage } from "../ChangeLanguage";

jest.mock('../ChangeLanguage', () => ({
  ChangeLanguage : jest.fn()
}))

jest.mock('../../commons/hooks/useChangeText', () => ({
  useChangeText : jest.fn()
}))

describe( 'Test component Navbar', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('can render title Navbar', () => {
    useChangeText.mockImplementation(() => {
      return 'Ciudades';
    })
    ChangeLanguage.mockImplementation(() => {
      <div id='testComponent'></div>
    })
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      ReactDOM.createRoot(container).render(
        <Router>
          <Navbar />
        </Router>);
    });
    const titleMenu = container.querySelector('.titleMenu');
    expect(titleMenu.textContent).toBe('Ciudades');
  });

  it('can render logo Navbar', () => {
    ChangeLanguage.mockImplementation(() => {
      <div id='testComponent'></div>
    })
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      ReactDOM.createRoot(container).render(
        <Router>
          <Navbar />
        </Router>);
    });
    const img = container.querySelector('img');
    expect(img.getAttribute("src")).toEqual('logo.png');
  });
})