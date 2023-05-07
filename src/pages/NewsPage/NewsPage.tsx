import { List } from 'antd';
import { Typography } from 'antd';
import { selecNews } from '../../store/news/selectors';
import { useSelector } from 'react-redux';
const { Title, Paragraph } = Typography;

export const NewsPage = () => {
    const news = useSelector(selecNews)


    return (
        <List
            itemLayout="horizontal"
            dataSource={news.data}
            renderItem={(item) => (
                <List.Item>
                    <Typography>
                        <Title>{ item.title }</Title>
                        <Paragraph>{ item.content }</Paragraph>
                    </Typography>
                </List.Item>
            )}
        />
    );
};