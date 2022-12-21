
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { GraphicCardManual } from './index.jsx';
import { useFetchMeteo } from '../../commons/hooks/useFetchMeteo';

jest.mock('../../commons/hooks/useFetchMeteo', () => ({
  useFetchMeteo : jest.fn()
}))

describe( 'Test component GraphicCardManual', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('can render GraphicCardManual', () => {
    useFetchMeteo.mockImplementation(() => {
      return {
        chartTime: ['00:00 (7 ºC) ', '01:00 (6 ºC) ', '02:00 (6 ºC) ', '03:00 (7 ºC)'],
        chartMeteo: [11.4, 11.4, 11.2, 11.4,]
      }
    })

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      ReactDOM.createRoot(container).render(<GraphicCardManual />);
    });
    const labelTime = container.querySelector('.labelTime');
    expect(labelTime.textContent).toBe('00:00 (7 ºC) 01:00 (6 ºC) 02:00 (6 ºC) 03:00 (7 ºC)');
  });
})
