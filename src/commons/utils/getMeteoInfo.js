export const getMeteoInfo = async( info ) => {
    const { longitude, latitude } = info;
    const temp = 'temperature_2m';
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=${temp}`;

    const res = await fetch( url )
    const { hourly } = await res.json()

    return hourly;
}