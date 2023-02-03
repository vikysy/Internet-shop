import React, { FC, useState } from 'react';
import MyModal from '../../modal/MyModal';
import cl from './Seminar.module.css'
import SeminarFour from './seminarTsx/SeminarFour';
import SeminarOne from './seminarTsx/SeminarOne';
import SeminarThree from './seminarTsx/SeminarThree';
import SeminarTwo from './seminarTsx/SeminarTwo';

interface SeminarProps{
    id: number;
    h5: string;
    h3: string;
    p: string;
    button: string;
}

const Seminar: FC<SeminarProps> = ({id, h5, h3, p, button}) => {

    const [visible, setVisible] = useState(false);
    const modalTsxSeminar = [<SeminarOne />, <SeminarTwo />, <SeminarThree />, <SeminarFour />]; 

    return (
        <div className={cl.seminar}>
            <h5>{h5}</h5>
            <h3>{h3}</h3>
            <p>{p}</p>
            <button onClick={() => setVisible(true)}>{button}</button>
            <div className={cl.modal}>
                <MyModal visible={visible} setVisible={setVisible}>
                    {modalTsxSeminar[id - 1]}
                </MyModal>
            </div>
        </div>
    )
}

export default Seminar;