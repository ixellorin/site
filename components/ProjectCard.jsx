import Image from 'next/image';
import { Grid } from '@material-ui/core';
import styles from './hackathoncard.module.scss';

export default function HackathonCard (props) {

    return (
        <Grid item sm={12} md={4}>
            <div className={styles.container}>
                <div className={styles.profile}>
                    {props.project.icon}
                </div>
                <div className={styles.text}>
                    <span className={styles.title}>{props.project.title}</span><br/>
                    <span>{props.project.languages}</span><br/>
                    {/* <p className={styles.description}>{props.project.description}</p> */}
                    <span className={styles.description}>{props.project.description}</span>
                </div>
            </div>
        </Grid>
    );
};