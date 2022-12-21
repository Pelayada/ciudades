
import { updatePlace } from './updatePlace.js';
import { useCityContext } from '../context/PlacesProvider';

jest.mock('../../commons/context/PlacesProvider', () => ({
    useCityContext : jest.fn()
}))

const setPlaceRecord = jest.fn();

describe('Test updatePlace', () => {
    it('return with p', () => {
        useCityContext.mockImplementation(() => {
            return {
                setPlaceRecord: () => { return 'La Arena (Soto Del Barco) (Asturias)' },
            }
        })
        const event = {
            target: {
                innerText: 'La Arena (Soto Del Barco) (Asturias)',
                localName: 'p',
                parentElement: {
                    childNodes: [
                        {
                            innerText: '33125'
                        }
                    ]
                }
            }
        }
        updatePlace( event, setPlaceRecord )
        // expect(useCityContext).toHaveBeenCalledTimes(1);
    })

    it('return with span', () => {
        const event = {
            target: {
                innerText: 'La Arena (Soto Del Barco) (Asturias)',
                localName: 'span',
                parentElement: {
                    childNodes: [
                        {
                            innerText: '33125'
                        }
                    ]
                }
            }
        }
        const func = () => { return ''}
        const result = updatePlace( event, func )

        useCityContext.mockImplementation(() => {
            return {
                setPlaceRecord: () => { return '33125' },
            }
        })

    })
})