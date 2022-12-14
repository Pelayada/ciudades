
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import App from './App.js';
import { PlacesProvider } from '../../commons/context/PlacesProvider';
import { Routes } from '../../routes/Routes';

jest.mock('../../commons/context/PlacesProvider', () => ({
  PlacesProvider : jest.fn()
}))
jest.mock('../../routes/Routes', () => ({
  Routes : jest.fn()
}))

describe( 'Test component App', () => {
    let container;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });
    
    afterEach(() => {
      document.body.removeChild(container);
      container = null;
    });
    
    it('can render Loading', () => {
      PlacesProvider.mockImplementation(() => {
          <div id='testProvider'></div>
      })
      Routes.mockImplementation(() => {
        <div id='testRoutes'></div>
      })
      // eslint-disable-next-line testing-library/no-unnecessary-act
      act(() => {
          ReactDOM.createRoot(container).render(<App />);
      });
      expect(container).not.toBeNull();
    });
})