import React from 'react';
import './Modal_Warn.scss';

const ModalWarn = ({ info } ) => {
    return (
        <div className="mdal_warn">
            <div className="mdal_warn_container">
                <div className="header">
                    <p className={`${info.type}`}>{info.title}</p>
                </div>
                <div className="body">
                    <p>{info.text}</p>
                </div>
                <div className="footer">
                    <button onClick={info.ok} className="btn new">OK</button>
                    {/* <button onClick={info.close} className="btn cancel">CANCEL</button> */}
                </div>
            </div>
        </div>
    );
}

export default ModalWarn;
