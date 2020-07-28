// Baseline & Utils
import React from 'react'
import styles from './title.module.scss'

const Title = props => {
    return (
        <h1 className={styles.text}>{props.text}</h1>
    )
}

export default Title;