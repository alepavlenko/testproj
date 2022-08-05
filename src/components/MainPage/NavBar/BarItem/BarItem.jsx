import React from 'react';

import styles from './BarItem.module.css'

const BarItem = () => {
    const arrayBar = ['Home', 'Service', 'Clients', 'Contact',];
    return (
        <>
            <div className={styles.storageItem}>
                {arrayBar.map((temp) => <div className="styles.baritem">{temp}</div>)}
            </div>
            <div className={styles.baritemBuffer}></div>
        </>
    );
};

export default BarItem;