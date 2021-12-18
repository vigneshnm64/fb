import React from 'react'
import styles from "./style.module.css"
import ReactDOM from 'react-dom';

function Footer({ data }) {
    const submitForm = () => {
        if (data.firstName && data.surname && data.email && data.password && data.day && data.month && data.year && data.gender) {
            alert('Form is submitted');
        } else {
            alert('All fields are mandatory');
        }
    }
    return (
        
        <div className={styles.footer}>
            <div style={{ fontSize: '10px', paddingLeft: '5px', paddingRight: '5px', color: 'grey' }}>
            By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time
            </div>

            {/* Button */}
            <div className={styles.signUp} onClick={submitForm}>Sign up</div>
        </div>
    )
}

export default Footer
