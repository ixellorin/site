import Icon from '@mdi/react';
import { Grid } from '@material-ui/core';

import { mdiChevronUp } from '@mdi/js';
import { mdiChevronDown } from '@mdi/js';

import ScrollerItem from './ScrollerItem';


import styles from './scroller.module.scss';

export default function Scroller(props) {
    
    return (
        <div className={styles.scroller}>
            <Grid container direction="column" alignItems="center">
                <Icon path={mdiChevronUp}
                size={2.5}
                title="Chevron Up"
                className={styles.scrollIcon}/>
                {(props.sections || []).map((section, n) => {
                    return(<ScrollerItem icon={section.icon} label={section.label} target={section.target} />)
                })}
                <Icon path={mdiChevronDown}
                size={2.5}
                title="Chevron Down"
                className={styles.scrollIcon}/>
            </Grid>
        </div>
        )
}