import { useState, useEffect } from 'react';

export const useDebouncedValue = ( input: string = '', time: number = 1500 ) => {
    
    const [debouncedValue, setDebouncedValue] = useState(input);

    useEffect(() => {
        
        const timeout = setTimeout( () => {
            setDebouncedValue( input );
        }, time )

        return () => {
            clearTimeout( timeout );
        }
    }, [input])

    return debouncedValue;
}