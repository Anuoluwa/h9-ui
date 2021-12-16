import React from 'react';
import styles from './index.module.scss';

const AuthHero = ({caption}) => {
    return(
        <div className={styles.auth_hero}>
            <div className={styles.hero_content}>
                <h1>{caption} <br/> as an <span>Admin</span></h1> 
                <p>Manage your discount, and validate vouchers from <br/> your specialized dashboard</p>
            </div>
        </div>
    )
}

export default AuthHero