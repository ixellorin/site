import React, { ReactElement } from 'react';
import { Box, Center, Heading, HStack, Image, Show, Text, VStack } from '@chakra-ui/react';

const About = (_props: any, ref: React.LegacyRef<HTMLDivElement> | undefined): ReactElement => {

    return (
            <HStack alignContent="center" alignItems="center" w={'100%'} id="about" ref={ref} py={'10%'} spacing={[10, 10, 10, 24, 48]}>
                <Show above="lg">
                    <Center>
                        <VStack>
                            <Image src="/images/profile.jpg"
                            maxBlockSize={'400px'}
                            borderRadius={'full'}
                            alt="Cio Ellorin"/>
                            <Heading>
                                CIO ELLORIN
                            </Heading>
                        </VStack>
                    </Center>
                </Show>
                <Box textAlign={'left'}>
                    <Heading>About Me</Heading>
                    <br/>
                    <Text>
                        Hi! My name is <b>Cio</b> and I&apos;m a <b>Full-stack Software Developer</b> currently based in <b>Vancouver</b>. I have a passion for <b>frontend development</b> and creating products that help clients achieve their goals in a fulfilling, seamless and enjoyable experience! I bring a <b>teamwork-focused</b> and end user-driven work ethic, with <b>4 years of industry experience</b> from Vancouver to Kyoto, and in organizations of all sizes.
                    </Text>
                    <br/>
                    <Text>
                        My current goal is to gain more dev experience and <b>become a team lead</b>. In my spare time, you can find me hiking, taking my camera for a walk, playing sports, or gaming!
                    </Text>
                    <br/>
                    <Heading>My Story</Heading>
                    <br/>
                    <Text>
                        I had my <b>first programming experience in my high school</b> IT class, and I immediately knew that I wanted to build software as a career! I applied to the University of British Columbia&apos;s Faculty of Science and, in my first year, declared my Major in Computer Science.
                    </Text>
                    <br/>
                    <Text>
                        Over the course of my six-year academic tenure, I spent a total of <b>24 months in the Computer Science Co-Op program</b>; I worked in Vancouver for <b>VISIER</b>, then moved on to join <b>Access to Media Education Society</b>, a non-profit organization that engages youths from marginalized communities with digital mediums. My final co-op placement landed me in Japan, developing software for social robotics research at the <b>Advanced Telecommunications Research Institute</b>; I even got to be in a National Geographic docuseries!
                    </Text>
                    <br/>
                    <Text>
                        Currently, I&apos;m a Full-stack Software Developer on <b>KPMG</b> Vancouver&apos;s Data Analytics (Lighthouse) Team, and <b></b>, as well as serving as its unofficial UI/UX Designer, engaging with clients and providing data-driven solutions.
                    </Text>
                </Box>
            </HStack>
    )
}

export default React.forwardRef(About)