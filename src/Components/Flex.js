import React from "react";
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';

function Flex(props) {
    const FlexContainer = styled(Box)(() => ({

        display: 'flex',
        alignItems: props.align || 'normal',
        justifyContent: props.justify || 'normal',
        flexDirection: props.direction || 'row',
        gap: `${props.gap ||0}px`

    }))

    return (
        <FlexContainer>{props.children}</FlexContainer>
    )
};

export default Flex;