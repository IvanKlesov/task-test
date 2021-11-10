import { useFetching } from '../../../hooks/useFetching';
import React, { useEffect, useState } from 'react';
import styles from './Select.module.css';
import AddressService from '../../../API/Api';
import Loader from '../Loader/Loader';

export const Select = () => {
    
    const [streets, setStreet] = useState([]);


    const [fetchStreet, isStreetLoading, streetError] = useFetching(async() => {
        const response = await AddressService.getStreet();
        setStreet(response.data);
    }) 

    useEffect(() => {
        fetchStreet();
    },[])

    return (
        <>
            {isStreetLoading
                ? <Loader />
                : <select className={styles.select}>
                        {streets.map(street => 
                            <option key={street.id} value={street.id}>
                                {street.name}                           
                            </option>
                        )}
                  </select>
            }
        </>
    )
};