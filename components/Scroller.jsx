import Icon from '@mdi/react';
import { Grid } from '@material-ui/core';

import { mdiChevronUp } from '@mdi/js';
import { mdiChevronDown } from '@mdi/js';

import ScrollerSection from './ScrollerItem';


import AccountIcon from './icons/AccountIcon';
import CameraIcon from './icons/CameraIcon';
import ComputerIcon from './icons/ComputerIcon';
import LayersIcon from './icons/LayersIcon';


import styles from './scroller.module.scss';

export default function Scroller(props) {
    const nodes = [
      { label: 'About', icon: <AccountIcon className={styles.scrollIcon} />, description: "Read a little more about myself, my goals and my passions." },
      { label: 'Experience', icon: <ComputerIcon className={styles.scrollIcon} />, description: "A summary of skills, previous work experience and other industry-related events such as hackathons; an online resume of sorts." },
      { label: 'Projects', icon: <LayersIcon className={styles.scrollIcon} />, description: "Library of small projects with links to source code and/or live examples, including those from hackathons." },
      { label: 'Photography', icon: <CameraIcon className={styles.scrollIcon} />, description: "Gallery of some of my photographs; practice makes progress." },
    ];
    
    return (
        <div className={styles.scroller}>
            <Grid container direction="column" alignItems="center">
                <Icon path={mdiChevronUp}
                size={2.5}
                title="Chevron Up"
                className={styles.scrollIcon}/>
                {nodes.map((node, n) => {
                    return(<ScrollerSection icon={node.icon} label={node.label} />)
                })}
                <Icon path={mdiChevronDown}
                size={2.5}
                title="Chevron Down"
                className={styles.scrollIcon}/>
            </Grid>
        </div>
        )
}