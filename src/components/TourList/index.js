import React, { Component } from 'react';
import './TourList.css';
import Tour from '../Tour/Tour';
import { tourData } from '../DataBase/tourData';


export default class TourList extends Component {
    state = {
        tours: tourData
    };

    deleteTour = id => {
        const { tours } = this.state;
        const deleteBtn = tours.filter(tour => tour.id !== id);
        this.setState ({
            tours: deleteBtn
        });
    }
    render() {
        const { tours } = this.state;

        return (
            <section className='tour--list__container'>
                { tours.map(tour =>{
                    return (
                        <Tour key={ tour.id } tour = { tour } deleteTour = { this.deleteTour }/>
                    )
                })}
            </section>
        );
    }
}
