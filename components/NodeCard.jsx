
import { Grid } from '@material-ui/core';
import styles from './nodecard.module.scss';

export default function NodeCard(props) {
    const icon = props.icon

    return (
        <Grid item className={styles.cardContainer} onMouseEnter={() => props.handleHover(props.description)} onMouseLeave={() => props.handleLeave(props.description)} onClick={() => {
            if (props.target && props.target.current) {
                props.target.current.scrollIntoView({ behavior: "smooth", alignToTop: true})
            }
        }}>
            <button className={styles.card}>
                <div className={styles.container}>
                    {icon}
                    <div className={styles.label}>
                        {props.label}
                    </div>    
                </div>
            </button>                
        </Grid>
    );
};