import React from "react";
import styles from "./contact.module.css"

function Contact(){
    return(
        <div>
            <div className={styles.name}>Contact</div>
            <div>
                <div>Telegram: @skam</div>
                <div>+123 345678</div>
            </div>
        </div>
    )
}

export default Contact