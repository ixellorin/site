import React, { ReactElement, useState } from 'react';
import { Box, Button, Center, Heading, HStack, Image, Show, Text, VStack } from '@chakra-ui/react';
import Instagram from './Instagram';

const Photography = (_props: any, ref: React.LegacyRef<HTMLDivElement> | undefined): ReactElement => {
    const [showInstagram, setShowInstagram] = useState(false)

    return (
        <VStack w={'100%'} py={'10%'} id="experience" textAlign={'center'} spacing={14} ref={ref}>
            <Heading>Photography</Heading>
            <Instagram show={showInstagram}/>
        </VStack>
    )
}

export default React.forwardRef(Photography)