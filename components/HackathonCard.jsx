import Image from 'next/image';
import { Grid } from '@material-ui/core';
import styles from './hackathoncard.module.scss';

export default function HackathonCard (props) {

    return (
        <Grid item sm={12} md={4}>
            <div className={styles.container}>
                <div className={styles.profile}>
                    <Image src={props.hackathon.img}
                    height={props.hackathon.imgHeight}
                    width={props.hackathon.imgWidth}
                    alt={props.hackathon.title}/>
                </div>
                <div className={styles.text}>
                    <span className={styles.title}>{props.hackathon.name}</span><br/>
                    <span>{props.hackathon.role}</span>
                </div>
            </div>
        </Grid>
    );
};