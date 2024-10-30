import React, { useState } from 'react';
import Filtros from './filtros';
// import { BtnFiltros } from './filtros';
import "./../../styles/filtros.css";




const Modal = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>

            <button type="button" className="btn btn-danger ms-5 btn-filtros" data-bs-toggle="modal" data-bs-target="#exampleModal"
                onClick={() => setIsOpen(true)}
            >
                Aplicar filtros <i class="fa-solid fa-caret-down d-flex d-inline-flex"></i>
            </button>

            <div className="modal fade modal-xl" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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


