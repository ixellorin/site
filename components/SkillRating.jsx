import styles from './skillrating.module.scss';

export default function SkillRating(props) {
    
    const items = []

    for (let i = 0; i < (props.max || 5); i++) {
        let className = i < (props.rating || 0) ? `${styles.filled} ${styles.rating}` : styles.rating
        if (props.legend) {
            className = className.concat(` ${styles.legend}`)
        }
        items.push(
            <div className={className}/>
        )
    }

    return (
        <div className={ props.legend ? `${styles.skillrating} ${styles.legend}` : styles.skillrating}>
            <div className={ props.legend ? `${styles.label} ${styles.legend}` : styles.label }>
                {props.label}
            </div>
            <div className={ props.legend ? `${styles.rate} ${styles.legend}` : styles.rate}>
                {items}
            </div>
        </div>
    )
}