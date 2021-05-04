import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Players and Staff</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__item'>
                        <CardItem
                            src='images/arteta.jpg'
                            text='Mikel Arteta - Manager'
                            label='Spain'
                            path='/team'
                        />
                        <CardItem
                            src='images/auba.jpg'
                            text='Pierre-Emerick Aubameyang - Captain'
                            label='Gabon'
                            path='/team'
                        />
                    </ul>
                    <br></br>
                    <ul className='cards__item'>
                        <CardItem
                            src='images/henry.jpg'
                            text='Thierry Henry - Club Legend'
                            label='France'
                            path='/team'
                        />
                        <CardItem
                            src='images/wenger.jpg'
                            text='Arsene Wenger - Manager Legend'
                            label='France'
                            path='/team'
                        />
                        <CardItem
                            src='images/invincibles.jpg'
                            text='The Invincibles - 2003/04'
                            label='Team'
                            path='/team'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
