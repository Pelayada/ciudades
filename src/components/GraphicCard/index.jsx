
import PropTypes from 'prop-types';

import { Bar } from "react-chartjs-2";
import zoomPlugin from 'chartjs-plugin-zoom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
} from 'chart.js'; 

import { useFetchMeteo } from '../../commons/hooks/useFetchMeteo';
import { options } from '../../config/chartOptions';
import './styles.css';

export const GraphicCard = ({ info }) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        zoomPlugin
    );

    const { chartTime, chartMeteo } = useFetchMeteo( info );

    const dataChart = {
            labels: chartTime,
            datasets: [{
                label: 'Temp.',
                data: chartMeteo,
                backgroundColor: 'rgb(100, 0, 255)',
            }],
    };

    return (
        <div className='graphic'>
            <Bar
                data={dataChart}
                options={options} />
        </div>
    )
}

GraphicCard.propTypes = {
    info: PropTypes.object.isRequired
};