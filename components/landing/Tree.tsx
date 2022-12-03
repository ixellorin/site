import NodeCard from './NodeCard';
import { useState, useEffect } from 'react';

import styles from '../../styles/tree.module.scss';
import { IScrollerSection } from '../../types';
import { Box, Heading, Hide, HStack, Show, Text, VStack, Wrap } from '@chakra-ui/react';

interface ITreeProps {
    nodes: IScrollerSection[]
}

const Tree = ({ nodes }: ITreeProps): JSX.Element => {
    const [description, setDescription] = useState('')

    function handleMouseOver(description: string) {
        setDescription(description)
    }

    function handleMouseLeave() {
        setDescription('')
    }
    let treeWidth = useTreeSize();
    let offset = useOffset();
    const head = { label: 'Head'};

    return (
        <Box id="nodes"
        h={'100vh'}
        w={'100%'}
        textAlign={'center'}>
            <VStack
            alignContent="center"
            alignItems="center"
            justify="center"
            h={'100%'}
            spacing={10}>
                <VStack>
                    <Heading><span>Let&apos;s get started!</span></Heading>
                    <Box pt={14}>
                        <Show above={'md'}>
                            <svg id="nodes" width={treeWidth} className={styles.tree}>
                                <line x1="50%" y1="13" x2="50%" y2="95" className={styles.stem}/>
                                <line x1="40" y1="95" x2="100%" y2="95" transform="translate(-20,0)" className={styles.stem}/>
                                {nodes.map((node, n) => {
                                    if (n == 0) {
                                        return <circle key={n} cx="13" cy="95" r="10" className={styles.node} />
                                    } else if (n < nodes.length - 1) {
                                        return <circle key={n} cx={(treeWidth/(nodes.length - 1)) * n} cy="95" r="10" className={styles.node} />
                                    } else {
                                        return <circle key={n} cx="100%" transform="translate(-13,0)" cy="95" r="10" className={styles.node} />
                                    }
                                })}
                                <circle cx="50%" cy="13" r="10" className={styles.node}/>
                            </svg>
                        </Show>
                    </Box>
                </VStack>
                <Show above={'md'}>
                    <HStack justify="space-around" alignItems="center" w={treeWidth + offset} px={8}>
                        {nodes.map((node, n) => {
                            return(<NodeCard useAutoWidth={true} key={n} label={node.label} icon={node.icon} handleHover={handleMouseOver} handleLeave={handleMouseLeave} description={node.description} target={node.target}/>)
                        })}
                    </HStack>
                </Show>
                <Hide above={'md'}>
                    <Wrap justify="space-around" alignItems="center"  w={treeWidth + offset}>
                        {nodes.map((node, n) => {
                            return(<NodeCard key={n} label={node.label} icon={node.icon} handleHover={handleMouseOver} handleLeave={handleMouseLeave} description={node.description} target={node.target}/>)
                        })}
                    </Wrap>
                </Hide>
                <Show above={'md'}>
                    <Box minHeight={'50px'}>
                        <Heading size={'md'}>{description}</Heading>
                    </Box>
                </Show>
            </VStack>
        </Box>
    );
};

// Hook
function useTreeSize() {
    const [treeWidth, setTreeWidth] = useState(0);
    const [offset, setOffset] = useState(0);

    // Handler to call on window resize
    function handleResize() {
        // Set window width/height to state
        const ratio = window.innerWidth > 1280 ? .75 : .66;
        setTreeWidth(Math.min(1280, Math.ceil(window.innerWidth * ratio)));
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
    return treeWidth;
}

function useOffset() {
    const [offset, setOffset] = useState(0);

    function handleResize() {
        // Set window width/height to state
        const newOffset = window.innerWidth > 1200 ? 450 : window.innerWidth > 768 ? 260 : 150;
        setOffset(newOffset)
    }
  
    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== 'undefined') {
            // Handler to call on window resize
        
            // Add event listener
            window.addEventListener("resize", handleResize);
        
            // Call handler right away so state gets updated with initial window size
            handleResize();
        
            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return offset;
  }

  export default Tree