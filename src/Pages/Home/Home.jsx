import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { gifThrunk } from '../../store/thrunks/gif';

const HomePage = () => {

    const gifAssets = useSelector((state) => state.gifs.assets)
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(gifThrunk())
    }, [])


    const renderGifs = gifAssets.map((el) => (
        <img src={el.images.original.url} alt="" key={el.id} />
    ))

    


    

    

    return (
        <div className='wrapper'>
            {
                gifAssets && (renderGifs)
            }
        </div>
    )
}


export default HomePage