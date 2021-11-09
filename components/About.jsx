import React from 'react';
import Image from 'next/image';
import { Grid } from '@material-ui/core';
import styles from './about.module.scss';

function About(props, ref) {

    return (
        <div className={styles.about} id="about" ref={ref}>
            <Grid container alignContent="center" alignItems="center" justify="space-between" className={styles.writeupGrid}>
                <Grid item justify="flex-start" xs={12} lg={4}>
                    <div className={styles.profile}>
                        <Image src="/images/profile.jpg"
                        layout='fill'
                        alt="Cio Ellorin"/>
                    </div>
                    <div className={styles.name}>
                        CIO ELLORIN
                    </div>
                </Grid>
                <Grid item justify="flex-start" xs={12} lg={7}>
                    <div className="align-left">
                        <h1>About Me</h1>
                        <br/>
                        <p>
                            Hi! My name is Cio and I'm a <b>Full-stack Software Developer</b> currently based in <b>Vancouver</b>. I have a passion for <b>frontend development</b> and creating products that enables clients to achieve their goals in a fulfilling, seamless and enjoyable experience! I bring a teamwork-focused and end user-driven work ethic, with <b>4 years of industry experience</b> from Vancouver to Kyoto, and in organizations of all sizes.
                        </p>
                        <p>
                            Recently, I've started diving into <b>UI/UX design</b> in order to gain experience with complete product lifecycles. In my spare time, you can find me hiking, taking my camera for a walk, playing sports, or gaming!
                        </p>
                        <br/>
                        <h1>My Story</h1>
                        <br/>
                        <p>
                            I had my first programming experience in my high school IT class, and I immediately knew that I want to build software as a career! I applied to the University of British Columbia's Faculty of Science, and, in my first year, declared my Major in Computer Science.
                        </p>
                        <p>
                            I spent six years there, gaining 24 months of industry experience through the Computer Science Co-Op program. I worked in Vancouver for <b>VISIER</b>, then moved on to join <b>Access to Media Education Society</b>, a non-profit organization that engages youth with digital mediums. My final co-op placement landed me in Japan, developing software for social robotics research; I even got to be in a National Geographic docuseries!!
                        </p>
                        <p>
                            Currently, I'm a Full-stack Software Developer on KPMG Vancouver's Data Analytics (Lighthouse) Team, as well as serving as its UI/UX Designer, engaging with clients and providing data-driven solutions.
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default React.forwardRef(About)