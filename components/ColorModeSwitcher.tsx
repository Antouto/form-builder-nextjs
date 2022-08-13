//@ts-nocheck
import React from 'react';
import { useColorMode, useColorModeValue, IconButton, IconButtonProps } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export function ColorModeSwitcher(props: any) {
    const { toggleColorMode } = useColorMode();
    const text = useColorModeValue('dark', 'light');
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    return (
        <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            color="#bcbcbc"
            marginLeft="2"
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
            {...props}
        />
    );
};
