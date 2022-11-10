
export const updatePlace = (e, setPlaceRecord) => {
    const infoEvent = e.target.innerText;
    const tagEvent = e.target.localName;
    const parentTag = e.target.parentElement.childNodes[0].innerText

    if (tagEvent === 'span') setPlaceRecord(infoEvent);
    if (tagEvent === 'p') setPlaceRecord(parentTag);
}