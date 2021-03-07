
import { Grid } from '@material-ui/core';
import styles from './scrolleritem.module.scss';
import { useState, useEffect } from 'react';

export default function ScrollerItem(props) {
    const icon = props.section.icon
    
    return (
            <button className={styles.card} onClick={() => {
                if (props.section.target && props.section.target.current) {
                    props.section.target.current.scrollIntoView({ behavior: "smooth", alignToTop: true})
                }
            }}>
                {icon}
                <div className={styles.label}>
                    {props.section.label}
                </div>
            </button>
    );
};