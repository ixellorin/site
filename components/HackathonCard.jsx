import Image from 'next/image';
import { Grid } from '@material-ui/core';
import styles from './hackathoncard.module.scss';

export default function HackathonCard (props) {

    return (
        <div className={styles["hackathon-card"]}>
            <div className={styles["hackathon-card__img"]}>
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
    );
};