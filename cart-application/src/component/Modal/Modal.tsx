import React from 'react';
import "./modal.css"

interface OnmodalProps {
    onModal: (boolean:boolean) => void
    message: any
}

const Modal = ({ message, onModal }: OnmodalProps) => {

    return (
        <div className="back">


            <div className="ModalDiv">

                <div className="Modalchild">

                    <h4 className="ModalH4" >{message}</h4>
                    <div className="ModalButtons" >
                        <button onClick={() => onModal(true)}>Yes</button>
                        <button onClick={() => onModal(false)}>No</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Modal;