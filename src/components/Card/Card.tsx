import React from 'react';

import { Wrapper, Header, Title, Content } from './Card.styles';

type CardProps = {
    title: string,
    children: React.ReactNode,
}

const Card = ({ children, title }: CardProps) => (
    <Wrapper>
        <Header>
            <Title className="card-title">{title}</Title>
        </Header>
        <Content className="card-content">
            {children}
        </Content>
    </Wrapper>
);

export default Card;
