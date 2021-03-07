
import { Grid } from '@material-ui/core';
import styles from './scrolleritem.module.scss';
import { useState, useEffect } from 'react';

export default function ScrollerItem(props) {
    const icon = props.icon
    
    return (
            <button className={styles.card} onClick={() => {
                if (props.target && props.target.current) {
                    props.target.current.scrollIntoView({ behavior: "smooth", alignToTop: true})
                }
            }}>
                {icon}
                <div className={styles.label}>
                    {props.label}
                </div>
            </button>
    );
};