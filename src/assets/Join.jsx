import { Drawer } from '@mantine/core';
import { useState } from 'react'

function Join()
{

    return (
        <Drawer
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
        >
            <p>123</p>
        </Drawer>
    );
}
export default Join
