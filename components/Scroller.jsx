import Icon from '@mdi/react';
import { Grid } from '@material-ui/core';

import { mdiChevronUp } from '@mdi/js';
import { mdiChevronDown } from '@mdi/js';

import ScrollerItem from './ScrollerItem';

import { useEffect } from 'react';

import styles from './scroller.module.scss';

export default function Scroller(props) {


    useEffect(() => {
        document.getElementById('scroller').style.transform = `scale(${(window.outerHeight - 98) / 979})`;
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleResize = (event) => {
        console.log((document.getElementById('scroller').offsetHeight))
        document.getElementById('scroller').style.transform = `scale(${(event.target.outerHeight - 98) / 979})`;
        // document.getElementById('scroller').style.top = `${(event.target.outerHeight - document.getElementById('scroller').offsetHeight) / 2}px`;
    }
    
    return (
        <div className={styles.scroller} id="scroller">
            <Grid container direction="column" alignItems="center">
                <button onClick={props.decrSection} className={styles.scrollButton}>
                    <Icon path={mdiChevronUp}
                    size={2.5}
                    title="Previous Section"
                    className={styles.scrollIcon}/>
                </button>
                {(props.sections || []).map((section, n) => {
                    return(<ScrollerItem icon={section.icon} label={section.label} target={section.target} />)
                })}
                <button onClick={props.incrSection} className={styles.scrollButton}>
                    <Icon path={mdiChevronDown}
                    size={2.5}
                    title="Chevron Down"
                    className={styles.scrollIcon}
                    onClick={props.incrSection}/>
                </button>
            </Grid>
        </div>
        )
}