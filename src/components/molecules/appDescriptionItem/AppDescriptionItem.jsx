// Baseline & Utils
import React from 'react'
import styles from './appDescriptionItem.module.scss'


// Internal Components


// React Bootstrap Components


const AppDescriptionItem = props => {
    return (
        <div className={styles.appDescriptionItemContainer}>
            <div className={styles.imgContainer}>
                <img className={styles.imgParticularProblem} src={props.imgSrc} alt={props.imgAlt} />
            </div>
            <h4 className={styles.title}>{props.title}</h4>
            <p className={styles.text}>{props.text}</p>
        </div>
    )
}

export default AppDescriptionItem;