export const getPoliticalInfo = async( code ) => {
    const url = `https://api.zippopotam.us/es/${ code }`;
    const resp = await fetch( url );
    const data = await resp.json();

    return data;
}