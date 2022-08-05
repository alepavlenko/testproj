import React from 'react';
import styles from './BarItem.module.css'

const BarItem = () => {
    return (
        <>
            <div className={styles.storageItem}>
                <div className={styles.baritem}>Home</div>
                <div className={styles.baritem}>Service</div>
                <div className={styles.baritem}>Clients</div>
                <div className={styles.baritem}>Contact</div>
            </div>
            <div className={styles.baritemBuffer}></div>
        </>
    );
};

export default BarItem;