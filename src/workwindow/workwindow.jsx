import React from "react";
import styles from "./workwindow.module.css"
import { NavLink } from "react-router-dom";

function Workwinwow(props){

    let link = `${props.link}`
    let img = `${props.img}`

    return(
        <div className={styles.window}>
            <NavLink to={link}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.img}><img src={img}/></div>
            </NavLink>
        </div>
    )
}

export default Workwinwow