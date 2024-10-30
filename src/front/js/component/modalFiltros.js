import React, { useState } from 'react';
import Filtros from './filtros';
import "./../../styles/filtros.css";

const Modal = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="container d-flex justify-content-end">
                <button className="m-0 mt-5" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    onClick={() => setIsOpen(true)}>Aplicar filtros <i class="fa-solid fa-caret-down d-flex d-inline-flex"></i></button>
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Filtros</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setIsOpen(false)}></button>
                        </div>
                        <div className="modal-body">
                            <Filtros />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;