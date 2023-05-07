import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../store/user/selectors';
import { notification, Button, Form, Input } from 'antd';
import { IUser } from '../../store/user/userSlice';
import { Auth } from '../../api/Auth';
import { useNavigate } from 'react-router-dom';

export const LoginPage: React.FC = () => {
    const [notif, contextHolder] = notification.useNotification();
    const auth = new Auth();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.isLogin()) {
            navigate('/profile');
        }
    })

    const showNotification = () => {
        notif.error({
            message: `Ошибка!`,
            description: 'Имя пользователя или пароль введены не верно',
            placement: 'topRight',
        });
    };

    const users = useSelector(selectUsers)
    const onFinish = (values: IUser) => {
        const { username, password } = values;
        const user = users.find((user) => user.password === password && user.username === username);

        if (user) {
            auth.login();
            return navigate('/profile');
        }

        showNotification();
    };

    return (
        <>
            {contextHolder}
            
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
