import React from "react";
import styles from "./header.module.css"

function Header(){
    return(
        <div className={styles.header}>
            <div className={styles.name}>VladSkam</div>
        </div>
    )
}

export default Header