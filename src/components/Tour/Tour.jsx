import React, { Component } from 'react';
import './Tour.css';

export default class Tour extends Component {
    state = {
        showInfo: false
    };

    handleInfo = () => {
        this.setState ({
            showInfo: !this.state.showInfo
        });
    }

    render() {
        const { id, city, img, name, info } = this.props.tour;
        const { deleteTour } = this.props;
        return (
            <header className='tour'>
                <div className='img--container'>
                    <img className="responsive-image"
                        src={ img }
                        alt=''
                    />
                    <span 
                    className='delete-btn' 
                    onClick= { () => { deleteTour(id) } }>
                        <i className="fas fa-times"/>
                    </span>
                </div>
                <div className='tour-info'>
                    <h3>{ city }</h3>
                    <h4>{ name }</h4>
                    <h5> Info {" "}
                        <span onClick= { this.handleInfo }>
                            <i className="fas fa-caret-square-down" />
                        </span>
                    </h5>
                    { this.state.showInfo && <p>{ info }</p>}
                </div>
            </header>
        );
    }
}
