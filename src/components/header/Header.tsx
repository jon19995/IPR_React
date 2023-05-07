import React from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header: HeaderAntd } = Layout;

export const Header: React.FC = () => {
    const items: MenuProps['items'] = ['news', 'profile'].map((item) => ({
        key: item,
        label: `${item}`,
    }));

    const routes = {
        "news": "/",
        "profile": "/profile",
    }

    const navigate = useNavigate();
    
    const onClick: MenuProps['onClick'] = (e) => {
        const path = routes[e.key as keyof typeof routes];
        navigate(path);
    };

    return (
        <HeaderAntd style={{ paddingInline: '0' }}>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={items}
                onClick={onClick}
            />
        </HeaderAntd>
    )
}