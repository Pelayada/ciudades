
export const options = {
    plugins: {
        zoom: {
            pan: {
                enabled: true,
                mode: 'x'
            },
            zoom: {
                pinch: {
                    enabled: true       // Enable pinch zooming
                },
                wheel: {
                    enabled: true       // Enable wheel zooming
                },
                mode: 'x',
            }
        }
    },
};