import React, { ReactElement, useState } from 'react';
import {
    Heading,
    HStack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    VStack
} from '@chakra-ui/react';
import Instagram from './Instagram';

const Photography = (_props: any, ref: React.LegacyRef<HTMLDivElement> | undefined): ReactElement => {

    return (
        <VStack w={'100%'} py={'10%'} id="experience" textAlign={'center'} spacing={14} ref={ref} h={['100vh']}>
            <Heading>Photography</Heading>
            <Tabs h={'100%'} w={'100%'} isLazy={true} align={'center'} mt={'0px !important'} pt={2} lazyBehavior={'keepMounted'}>
                <TabList>
                    <Tab>Instagram</Tab>
                    <Tab>Flickr</Tab>
                </TabList>

                <TabPanels h={'100%'} maxH={'100%'}>
                    <TabPanel h={'100%'} maxH={'100%'} p={0}>
                        <Instagram />
                    </TabPanel>
                    <TabPanel>
                        <p>Coming soon!</p>
                    </TabPanel>
                    <TabPanel>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </VStack>
    )
}

export default React.forwardRef(Photography)