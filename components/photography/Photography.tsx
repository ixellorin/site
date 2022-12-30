import React, { ReactElement, useState } from 'react';
import {
    Heading,
    Tab,
    TabList,
    Tabs,
    VStack
} from '@chakra-ui/react';
import Instagram from './Instagram';

const Photography = (_props: any, ref: React.LegacyRef<HTMLDivElement> | undefined): ReactElement => {
    const [index, setIndex] = useState(0)

    return (
        <VStack w={'100%'} py={'10%'} id="experience" textAlign={'center'} spacing={14} ref={ref} h={'100vh'}>
            <Heading>Photography</Heading>
            <Tabs w={'100%'} align={'center'} mt={'0px !important'} pt={2} onChange={(e) => setIndex(e)}>
                <TabList>
                    <Tab>Instagram</Tab>
                    <Tab>Flickr</Tab>
                </TabList>
                {index == 0 && <Instagram/>}
                {index == 1 && <>Coming soon!</>}
            </Tabs>
        </VStack>
    )
}

export default React.forwardRef(Photography)