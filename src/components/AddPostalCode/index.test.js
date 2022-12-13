
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { AddPostalCode } from './index.jsx';
import { useChangeText } from '../../commons/hooks/useChangeText';
import { useInput } from '../../commons/hooks/useInput';
import { Error } from "../Error";

jest.mock('../Error', () => ({
  Error : jest.fn()
}))

jest.mock('../../commons/hooks/useChangeText', () => ({
  useChangeText : jest.fn()
}))

jest.mock('../../commons/hooks/useInput', () => ({
  useInput : jest.fn()
}))

describe( 'Test component AddPostalCode', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('can render AddPostalCode with info', () => {
    useChangeText.mockImplementation(() => {
      return 'Buscar';
    })
    Error.mockImplementation(() => {
      <div id='testComponent'></div>
    })
    useInput.mockImplementation(() => {
      return {
        onInputChange: () => {},
        onSubmit: () => {},
        inputValue: () => {}
      };
    })
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      ReactDOM.createRoot(container).render(<AddPostalCode isLoading={false} />);
    });
    expect(
      container.querySelector('.inputSubmit').getAttribute("value")
    ).toEqual("Buscar");
  });
})