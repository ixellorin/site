export default function SkillRating(props) {
    const max = 5
    const rating = 3
    const items = []

    for (let i = 0; i < max; i++) {
        items.push(
            <div className={i < rating ? `${styles.filled} ${styles.rating}` : styles.rating }/>
        )
    }

    return (<>
    </>)
}