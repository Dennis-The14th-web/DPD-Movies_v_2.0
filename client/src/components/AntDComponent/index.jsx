import { React, useState } from 'react';
import './index.css';
import { Layout, Menu, Breadcrumb, Input, Space } from 'antd';
import {
  DesktopOutlined,
  AudioOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  GithubOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;


function AntDComponent() {

  const [ collapsed, setCollapsed ] = useState(false);
  const onCollapse = collapsed => {
    // console.log(collapsed);
    setCollapsed(collapsed);
  };
  const onSearch = value => console.log(value);

  return (
    <div>
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<YoutubeOutlined />}>
                    View Triller
                    </Menu.Item>
                    {/* <Menu.Item key="2" icon={<DesktopOutlined />}>
                    Option 2
                    </Menu.Item> */}
                    {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                    <Menu.Item key="3">Tom</Menu.Item>
                    <Menu.Item key="4">Bill</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu> */}
                    <SubMenu key="sub2" icon={<DesktopOutlined />} title="Watched">
                    <Menu.Item key="6">Unwatch</Menu.Item>
                    <Menu.Item key="8">Unwatch</Menu.Item>
                    </SubMenu>
                    {/* <Menu.Item key="9" icon={<FileOutlined />}>
                    Files
                    </Menu.Item> */}
                </Menu>
            </Sider>
        <Layout>
            <Header className="header">
                DPD Movies V.2.0
            </Header>
            <Search placeholder="input search text" onSearch={onSearch} enterButton />
            <Content className="content">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlIhENfIqZPbgiqLqYVSugDvvUV2-_O6H1A&usqp=CAU" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlIhENfIqZPbgiqLqYVSugDvvUV2-_O6H1A&usqp=CAU" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlIhENfIqZPbgiqLqYVSugDvvUV2-_O6H1A&usqp=CAU" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlIhENfIqZPbgiqLqYVSugDvvUV2-_O6H1A&usqp=CAU" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlIhENfIqZPbgiqLqYVSugDvvUV2-_O6H1A&usqp=CAU" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlIhENfIqZPbgiqLqYVSugDvvUV2-_O6H1A&usqp=CAU" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlIhENfIqZPbgiqLqYVSugDvvUV2-_O6H1A&usqp=CAU" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlIhENfIqZPbgiqLqYVSugDvvUV2-_O6H1A&usqp=CAU" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlIhENfIqZPbgiqLqYVSugDvvUV2-_O6H1A&usqp=CAU" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlIhENfIqZPbgiqLqYVSugDvvUV2-_O6H1A&usqp=CAU" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlIhENfIqZPbgiqLqYVSugDvvUV2-_O6H1A&usqp=CAU" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlIhENfIqZPbgiqLqYVSugDvvUV2-_O6H1A&usqp=CAU" />
            </Content>
            <Footer><b>DPD Movies V 2.0 @copyright Dennis 2021 <br /> This is a React application/ant Design Componnent</b></Footer>
          </Layout>
      </Layout>
      {/* <DatePicker /> */}
    </div>
  );
}

export default AntDComponent;