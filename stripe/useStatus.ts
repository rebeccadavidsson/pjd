import { useState, useEffect } from 'react';
import getProduct from './getProduct';

export default function useStatus(user: any) {
    const [status, setStatus] = useState<boolean>(false);

    useEffect(() => {
        if (user) {
            const checkStatus = async function () {
                setStatus(await getProduct());
            }
            checkStatus();
        }
    }, [user])

    return status;
}
