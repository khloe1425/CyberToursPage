import React, { useEffect, useState } from 'react'
import { deleteTour, getAllTour } from '../actions/tourAction'
import Header from '../components/Header'
import Item from '../components/Item'

export default function Home() {
    const [tourList, setTourList] = useState([]);
    const updateTourList = (id) => {
        let newTour = deleteTour(tourList, id);
        setTourList(newTour)
    }
    useEffect(async () => {
        let data = await getAllTour();
        setTourList(data);
        return () => {
        }
    }, [])
    return (
        <div className='container'>
            <Header />
            <div className="row justify-content-center">
                <div className="col-12 col-lg-6">
                    {tourList.map((item, index) => {
                        return (
                            <div key={item.id}>
                                <Item name={item.name} price={item.price} des={item.info} img={item.image} idTour={item.id}  deleteTour={updateTourList} />
                            </div>
                        )
                    })}

                </div>
            </div>

        </div>
    )
}
