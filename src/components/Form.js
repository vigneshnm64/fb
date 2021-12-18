import React, { useState } from 'react'
import styles from './style.module.css';
import Footer from './Footer';

const Form=() => {
    const [userValues, setUserValues] = useState({
        firstName: '',
        surname: '',
        email: '',
        password: '',
        day: 1,
        month: 'Jan',
        year: '1995',
        gender: null
    })
    return (
        <>
            <div className={styles.form}>
                <form>
                <div className={styles.name}>
                    <input 
                        type="text" 
                        className={styles.firstname} 
                        placeholder='First name' 
                        value={userValues.firstName} 
                        onChange={(e) => setUserValues(prevState => ({
                            ...prevState,
                            firstName: e.target.value
                        }))}
                        // prevState  => ...prevState
                    />
                    <input type="text" 
                        className={styles.firstname} 
                        placeholder='Surname'
                        value={userValues.surname}
                        onChange={(e) => setUserValues(prevState => ({
                            ...prevState,
                            surname: e.target.value
                        }))} 
                    />
                </div>
                <div className={styles.nameTwo}>
                    <input 
                        type="text" 
                        className={styles.mobile} 
                        placeholder='Mobile number or email address'
                        value={userValues.email}
                        onChange={(e) => setUserValues(prevState => ({
                            ...prevState,
                            email: e.target.value
                        }))} 
                    />
                </div>
                <div className={styles.nameTwo}>
                    <input 
                        type="password" 
                        className={styles.mobile} 
                        placeholder='New password'
                        value={userValues.password}
                        onChange={(e) => setUserValues(prevState => ({
                            ...prevState,
                            password: e.target.value
                        }))} 
                    />
                </div>

                <div style={{ paddingLeft: '5px', fontSize: '12px' }}>Date of birth ?</div>
                {/* Dropdown */}
                <div className={styles.dropdown}>
                    <select className={styles.selection} onChange={(e) => setUserValues(prevState => ({
                        ...prevState,
                        day: e.target.value
                    }))}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>

                    <select 
                        className={styles.selection}
                        onChange={(e) => setUserValues(prevState => ({
                            ...prevState,
                            month: e.target.value
                        }))}
                    >
                        <option>Jan</option>
                        <option>Feb</option>
                        <option>Mar</option>
                        <option>Sep</option>
                        <option>Oct</option>
                        <option>Nov</option>
                    </select>

                    <select 
                        className={styles.selection}
                        onChange={(e) => setUserValues(prevState => ({
                            ...prevState,
                            year: e.target.value
                        }))}
                    >
                        <option>1995</option>
                        <option>1996</option>
                        <option>1997</option>
                        <option>1998</option>
                        <option>1999</option>
                        <option>2000</option>
                    </select>
                </div>

                {/* Gender */}
                <div style={{ paddingLeft: '5px', fontSize: '12px' }}>Gender ?</div>
                <div style={{paddingLeft: '5px', paddingRight: '5px', display: 'flex', justifyContent: 'space-between'}}>
                    <div className={styles.female}>
                        <label>Female</label>
                        <input 
                            type="radio" 
                            name='gender' 
                            value="female"
                            onChange={(e) => setUserValues(prevState => ({
                                ...prevState,
                                gender: e.target.value
                            }))} 
                        />
                    </div>
                    <div className={styles.female}>
                        <label>Male</label>
                        <input 
                            type="radio" 
                            name='gender' 
                            value="male"
                            onChange={(e) => setUserValues(prevState => ({
                                ...prevState,
                                gender: e.target.value
                            }))} 
                        />
                    </div>
                    <div className={styles.female}>
                        <label>Other</label>
                        <input 
                            type="radio" 
                            name='gender' 
                            value="other"
                            onChange={(e) => setUserValues(prevState => ({
                                ...prevState,
                                gender: e.target.value
                            }))} 
                        />
                    </div>
                </div>
                </form>
            </div>
            <Footer data={userValues} />
        </>
    )
}

export default Form
