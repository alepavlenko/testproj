import React from 'react';
import style from './DownNavbar.module.css'

const DownNavbar = (stateSelected) => {
    console.log('asdasd' ,  stateSelected)


    // const removeSelected = (state) => {
    //
    //
    //     const localWarehouses = JSON.parse(localStorage.getItem('warehouses'))
    //     state.forEach((statehouses) => {
    //         localWarehouses.forEach(wareHose)
    //         if (statehouses.id === wareHose.userid) {
    //             localStorage.removeItem()
    //         }
    //     })
    // обнуление стейта
    // }
    return (
        <div className={style.downBar}>
            <div>
            Selected
            </div>
            <button>CLICK</button>
        </div>
    );
};

export default DownNavbar;