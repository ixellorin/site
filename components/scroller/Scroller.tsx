import { mdiChevronUp } from '@mdi/js';
import { mdiChevronDown } from '@mdi/js';

import ScrollerItem from './ScrollerItem';

import styles from '../../styles/scroller.module.scss';
import { IScrollerSection } from '../../types';
import MDIIcon from '../icons/MDIIcon';
import { Center, VStack } from '@chakra-ui/react';

interface IScrollerProps {
    decrSection: () => void,
    incrSection: () => void,
    sections: IScrollerSection[]
}

const Scroller = ({ sections, decrSection, incrSection }: IScrollerProps) => {
    
    return (
        <VStack alignItems="center" className={styles.scroller} id="scroller" spacing={18}>
            <button onClick={decrSection} className={styles.scrollButton}>
                <Center w={'100%'} height={'100%'}>
                    <MDIIcon icon={mdiChevronUp}
                    boxSize={'24'}
                    className={styles.scrollIcon}/>
                </Center>
            </button>
            {(sections || []).map((section, n) => {
                return(<ScrollerItem label={section.label} target={section.target} key={section.label}/>)
            })}
            <button onClick={incrSection} className={styles.scrollButton}>
                <Center w={'100%'} height={'100%'}>
                    <MDIIcon icon={mdiChevronDown}
                    boxSize={'24'}
                    className={styles.scrollIcon}/>
                </Center>
            </button>
        </VStack>
    )
}

export default Scroller