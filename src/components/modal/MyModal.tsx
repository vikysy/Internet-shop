import React, { FC } from 'react';
import cl from './MyModal.module.css';
import close from '../../images/close.svg';

interface MyModalProps {
    visible: boolean;
    setVisible: (bol: boolean) => void;
    children?: React.ReactElement;
}

const MyModal: FC<MyModalProps> = ({children, visible, setVisible}) => {

    const rootClasses= [cl.myModal];
    if(visible) {
        rootClasses.push(cl.active);
    }

    function hideModal() {
        if(visible) {
            setVisible(false);
        }
    }

    return (
        <div className={rootClasses.join(' ')} onClick={hideModal}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                <div className={cl.close} onClick={hideModal}>
                    <img src={close}/>
                </div>
                {children}
            </div>
        </div>
    );
}

export default MyModal;