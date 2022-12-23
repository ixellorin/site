
import styles from '../../styles/scrolleritem.module.scss';
import { RefObject } from 'react';
import { Center, VStack } from '@chakra-ui/react';

interface IScrollerItemProps {
    label: string,
    target?: RefObject<HTMLDivElement>,
}

const ScrollerItem = ({label, target }: IScrollerItemProps) => {
    
    return (
            <button className={styles.card} onClick={() => {
                if (target && target.current) {
                    target.current.scrollIntoView({ behavior: "smooth", block: "start"})
                }
            }}>
                <Center>
                    <VStack>
                        <div className={styles.label}>
                            {label}
                        </div>
                    </VStack>
                </Center>
            </button>
    );
};

export default ScrollerItem