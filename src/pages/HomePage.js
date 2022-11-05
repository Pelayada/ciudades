
import { useState } from 'react';
import { AddPostalCode } from '../components/AddPostalCode';
import { PoliticalInformation } from '../components/PoliticalInformation';

export const HomePage = () => {

  const [ postalCode, setPostalCode ] = useState('');

  const onAddPostalCode = ( newCode ) => {
    console.group('newCode', newCode)

    setPostalCode(newCode);
  } 
  console.group('postalCode', postalCode)
  return (
    <>
        <AddPostalCode 
            onNewCode={ (value) => onAddPostalCode(value) }
        />

        <PoliticalInformation postalCode={ postalCode } />

    </>
  )
}
