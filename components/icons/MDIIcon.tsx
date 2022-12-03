import {
    Icon,
    IconProps
} from '@chakra-ui/react';

interface MDIIconProps extends IconProps {
    icon: string // the path definition
}

const MDIIcon = ({icon, ...iconProps }: MDIIconProps) => {
    return (
        <Icon {...iconProps}>
            <path fill='currentColor' d={icon}/>
        </Icon>
    )
}

export default MDIIcon;