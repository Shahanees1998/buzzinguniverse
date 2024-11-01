// App.js
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toastify({data}) {
    const notify = () => toast({data});
    return (
        <>
            <div>
                <button onClick={notify}>Notify!</button>
                <ToastContainer />
            </div>
        </>
    );
}

export default Toastify;
