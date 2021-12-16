import React from 'react';
import Simple from '../MainNav';
import SideBar from '../SideBar';
import styles from './index.module.scss';
import Footer from '../Footer/';

const Layout = ({children}) => {
    return(
        <div className={styles._}>
            <nav>
                <Simple />
            </nav>
            <aside>
                <SideBar />
            </aside>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout