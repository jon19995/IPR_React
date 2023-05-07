import React from 'react';
import { Layout as LayoutAntd, Row } from 'antd';
import { Header } from '../components/header/Header';
const { Content } = LayoutAntd;

interface Props extends  Partial<CSSStyleDeclaration> {
    children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <LayoutAntd>
            <Header />
            <Content>
                <Row 
                    style={{minHeight: 'calc(100vh - 64px)'}}
                    justify="center"
                    align="middle"
                >
                    { children }
                </Row>
            </Content>
        </LayoutAntd>
    )
}