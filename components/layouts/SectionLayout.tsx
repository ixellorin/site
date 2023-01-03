import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";

interface ISectionLayoutProps {
    background?: string
    children: any
}


const SectionLayout = ({ background='none', children }: ISectionLayoutProps): ReactElement => {
    return (
        <Box background={background} w={'100%'}>
            <Box pl={['5%', '5%', 'calc(calc(100vw - 165px) * .1)']} pr={['5%', '5%', 'calc(calc(100vw - 165px) * .1 + 165px)']}>
                {children}
            </Box>
        </Box>
    )

}

export default SectionLayout