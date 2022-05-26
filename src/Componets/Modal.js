import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Modal = ( { modalClose, modalOpen } ) => {
    return (
        <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button onClick={modalClose} type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title" id="myModalLabel">Update User</h4>
                    </div>
                    <div className="modal-body"></div>
                    <div className="modal-footer"></div>
                </div>
            </div>
        </div>
    )
}

export default Modal