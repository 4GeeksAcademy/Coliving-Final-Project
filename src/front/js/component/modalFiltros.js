import React, { useState } from 'react';
import Filtros from './filtros';

const Modal = () => {
    return (
        <>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                Filtros
            </button>


            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Filtros</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <Filtros />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
// const [isOpen, setIsOpen] = useState(false);
// const [title, setTitle] = useState('Título del modal');
// const [message, setMessage] = useState('Mensaje del modal');

// const handleOpen = () => {
//     setIsOpen(true);
// };

// const handleClose = () => {
//     setIsOpen(false);
// };

// return (
//     <div>
//         <button className="btn btn-primary" onClick={handleOpen}>Abrir modal</button>
//         {isOpen && (
//             <div className="modal">
//                 <div className="modal-content">
//                     <h2>{title}</h2>
//                     <p>{message}</p>
//                     <button onClick={handleClose}>Cerrar</button>
//                 </div>
//             </div>
//         )}
//     </div>
