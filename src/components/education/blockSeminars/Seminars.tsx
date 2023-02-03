import React from 'react';
import Seminar from './Seminar';
import cl from './Seminars.module.css';
import seminars from './APIseminars';

const Seminars = () => {
    return (
        <div className={cl.myContainer}>
            <div className="container">
                <div className={cl.seminars}>
                    {seminars.map(seminar => <Seminar
                        key={seminar.id} 
                        id={seminar.id}
                        h5={seminar.h5}
                        h3={seminar.h3}
                        p={seminar.p}
                        button={seminar.button}
                    />)}
                </div>
            </div>
        </div>
    )
}

export default Seminars;