
import { Grid } from '@material-ui/core';
import styles from './scrolleritem.module.scss';

export default function ScrollerSection(props) {
    const icon = props.icon

    return (
            <button className={styles.card}>
                {icon}
                <div className={styles.label}>
                    {props.label}
                </div>
            </button>
    );
};