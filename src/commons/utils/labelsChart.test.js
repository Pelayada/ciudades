
import { labelsChart } from './labelsChart.js';

describe('Test labelsChart', () => {
    it('return dataMeteo and time', () => {
        const newInfo = {
            time: [
                "2022-12-09T00:00",
                "2022-12-09T01:00",
                "2022-12-09T02:00",
            ],
            temperature_2m: [
                11.4,
                11.4,
                11.2,
            ]
        }
        const result = labelsChart( newInfo );
        expect(result).toEqual({
            dataMeteo: [
                11.4,
                11.4,
                11.2,
            ],
            time: [
                "00:00 (11 ºC)",
                "01:00 (11 ºC)",
                "02:00 (11 ºC)",
            ],
        });
    })

    it('return nothing', () => {
        const newInfo = null;        
        const result = labelsChart( newInfo );
        expect(result).toBe('');
    })
})