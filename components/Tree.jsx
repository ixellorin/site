import NodeCard from './NodeCard';

import { Grid } from '@material-ui/core';
import { useState, useEffect } from 'react';

import styles from './tree.module.scss';

export default function Tree(props) {
    const [description, setDescription] = useState('')

    function handleMouseOver(description) {
        setDescription(description)
    }

    function handleMouseLeave() {
        setDescription('')
    }
    let treeWidth = useTreeSize()
    let offset = useOffset()
    console.log(treeWidth)
    const head = { label: 'Head'};

    return (
        <div className={styles.treeContainer}>
            <Grid container alignContent="center" alignItems="center" justify="center" className={styles.treeContainer}>
                <Grid item>
                    <div className={styles.start}><span>Let's get started!</span></div>
                    <svg id="nodes" width={treeWidth} className={styles.tree}>
                        <line x1="50%" y1="13" x2="50%" y2="95" className={styles.stem}/>
                        <line x1="40" y1="95" x2="100%" y2="95" transform="translate(-20,0)" className={styles.stem}/>
                        {props.nodes.map((node, n) => {
                            if (n == 0) {
                                return <circle key={n} cx="13" cy="95" r="10" className={styles.node} />
                            } else if (n < props.nodes.length - 1) {
                                return <circle key={n} cx={(treeWidth/(props.nodes.length - 1)) * n} cy="95" r="10" className={styles.node} />
                            } else {
                                return <circle key={n} cx="100%" transform="translate(-13,0)" cy="95" r="10" className={styles.node} />
                            }
                        })}
                        <circle cx="50%" cy="13" r="10" className={styles.node}/>
                    </svg>
                </Grid>
                <Grid container justify="space-around" alignItems="center" style={{ width: treeWidth + offset }}>
                    {props.nodes.map((node, n) => {
                        return(<NodeCard key={n} label={node.label} icon={node.icon} handleHover={handleMouseOver} handleLeave={handleMouseLeave} description={node.description}/>)
                    })}
                </Grid>
                <div className={styles.description}>
                    <span>{description}</span>
                </div>
                {/* <div className={styles.promptContainer}>
                    <Icon path={mdiChevronDoubleDown}
                        title="Chevron Double Down"
                        className={styles.prompt} />
                </div> */}
            </Grid>
        </div>
    );
};

// Hook
function useTreeSize() {
    const [treeWidth, setTreeWidth] = useState(0);
    const [offset, setOffset] = useState(0);
  
    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== 'undefined') {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                const ratio = window.innerWidth > 1280 ? .75 : .66;
                setTreeWidth(Math.min(1280, Math.ceil(window.innerWidth * ratio)));
            }
        
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
  
    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== 'undefined') {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                const newOffset = window.innerWidth > 1200 ? 450 : window.innerWidth > 768 ? 260 : 150;
                setOffset(newOffset)
            }
        
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