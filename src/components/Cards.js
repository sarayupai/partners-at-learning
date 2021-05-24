import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check Out These Education and Enrichment Materials!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                            src='../images/img-2.jpg'
                            text='List of Virtual Activities'
                            label='Activities'
                            path={process.env.PUBLIC_URL + '/activities'}
                        />
                        <CardItem 
                            src='../images/img-3.jpg'
                            text='Collection of Multimedia Resources'
                            label='Resources'
                            path={process.env.PUBLIC_URL + '/resources'}
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
