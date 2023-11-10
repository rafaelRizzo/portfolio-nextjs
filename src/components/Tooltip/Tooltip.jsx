import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';

export default function TooltipComponent(props) {
    return (
        <Tooltip title={props.content} placement="top" arrow >
            {props.children}
        </Tooltip>
    );
}
