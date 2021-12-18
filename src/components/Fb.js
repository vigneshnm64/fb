import React from 'react';
import styles from './style.module.css'
import Header from './Header';
import Form from './Form';
import Footer from './Footer';

const Fb = () => {
    return (
        <div className={styles.main}>
            <Header />
            <hr />
            <Form />
        </div>
    )
}

export default Fb
