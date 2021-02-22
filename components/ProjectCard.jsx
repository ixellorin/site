import Image from 'next/image';
import { Grid } from '@material-ui/core';
import styles from './projectcard.module.scss';

export default function ProjectCard (props) {

    return (
        <Grid item sm={12} md={4}>
            <div className={styles.container}>
                <div className={styles.profile}>
                    {props.project.icon}
                </div>
                <div className={styles.text}>
                    <span className={styles.title}>{props.project.title}</span><br/>
                    <span>{props.project.languages}</span><br/>
                    <div className={styles.description}>{props.project.description}</div>
                </div>
            </div>
        </Grid>
    );
};