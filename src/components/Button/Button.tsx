import React from 'react';

import { ButtonStyled } from './Button.styles';

type ButtonProps = {
    text: string,
    onClick(): void;
}

const Button = ({ text, onClick }: ButtonProps) => (
    <ButtonStyled onClick={onClick}>
        {text}
    </ButtonStyled>
);

export default Button;
