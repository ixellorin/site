
import Image from 'next/image';
import { Box, Center, Spacer, VStack, useMediaQuery } from '@chakra-ui/react';
import { RefObject, useEffect, useState } from 'react';
import styles from '../../styles/nodecard.module.scss';

interface INodeCardProps {
    description: string,
    icon: string,
    label: string,
    target?: RefObject<HTMLDivElement>,
    handleHover: (description: string) => void,
    handleLeave: ()=> void,
    useAutoWidth?: boolean
}


const NodeCard = ({ description, icon, label, target, handleHover, handleLeave, useAutoWidth=false }: INodeCardProps) => {
    const [width, setWidth] = useState(300);
    const windowWidth = useWindowSize();
    
    useEffect(() => {
        setWidth(useAutoWidth ? Math.min(300, ((windowWidth / 4) - 14)) : 300)
        
    }, [windowWidth, useAutoWidth])

    return (
        <Box w={width}
        h={width}
        onMouseEnter={() => handleHover(description)}
        onMouseLeave={() => handleLeave()}
        onClick={() => {
            if (target && target.current) {
                target.current.scrollIntoView({ behavior: "smooth", block: "start"})
            }
        }}>
            <Center w={width} h={width} className={styles.card}>
                <VStack w={'100%'} h={'100%'} className={styles.container} align={'center'}>
                    <Spacer />
                    <Image src={icon}
                    width={width*.4} height={width*.4}
                    alt={label}></Image>
                    <Box className={styles.label} pt={4}>
                        {label}
                    </Box>    
                    <Spacer />
                </VStack>
            </Center>         
        </Box>
    );
};

  
function useWindowSize() {
    const [windowWidth, setWindowWith] = useState(0);

    // Handler to call on window resize
    function handleResize() {
        // Set window width/height to state
        setWindowWith(window.innerWidth);
    }
  
    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== 'undefined') {
        
            // Add event listener
            window.addEventListener("resize", handleResize);
        
            // Call handler right away so state gets updated with initial window size
            handleResize();
        
            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowWidth;
}

export default NodeCard