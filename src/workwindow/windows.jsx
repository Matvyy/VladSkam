import React from "react";
import Workwinwow from "./workwindow";
import styles from "./windows.module.css"

function Windows(){

   let infoOfWork =[
    {name: 'офис', img: 'https://www.pngmart.com/files/5/Work-PNG-HD.png', link: 'office'},
    {name: 'сварщик', img: 'https://www.pngall.com/wp-content/uploads/5/Welder-PNG-Image.png', link: 'welder'}, 
    {name: 'сварщик', img: 'https://www.pngall.com/wp-content/uploads/5/Welder-PNG-Image.png', link: 'welder'},
    {name: 'сварщик', img: 'https://www.pngall.com/wp-content/uploads/5/Welder-PNG-Image.png', link: 'welder'},
    {name: 'сварщик', img: 'https://www.pngall.com/wp-content/uploads/5/Welder-PNG-Image.png', link: 'welder'},
  ]

   let workList = infoOfWork
        .map((work)=>{
            return(<Workwinwow name={work.name} img={work.img} link={work.link}/>)
        }
        )

    return(
        <div className={styles.windows}>
            {workList}
        </div>
    )
}

export default Windows