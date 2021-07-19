import { React, useState } from 'react';
import './index.css';
import { Layout, Menu, Input} from 'antd';
import {
  DesktopOutlined,
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
         <Layout style={{ minHeight: '100vh', background: "#efefef" }}>
         <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ background: "#efefef" }}>
          <div className="logo" />
          <Menu style={{ background: "#efefef" }} defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<YoutubeOutlined />}>
              DPD Movies V.2.0
            </Menu.Item>
            <SubMenu key="sub2" icon={<DesktopOutlined />} title="Watched">
              <Menu.Item key="6">Unwatch</Menu.Item>
              <Menu.Item key="8">Unwatch</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
        <Search placeholder="search for your favorite movie" onSearch={onSearch} enterButton />
          <Header className="site-layout-background" style={{ padding: 0, background: "#efefef" }} />
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
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
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}><b>DPD Movies V 2.0 @copyright Dennis 2021 <br /> This is a React application/ant Design Componnent</b></Footer>
        </Layout>
      </Layout>
      {/* <DatePicker /> */}
    </div>
  );
}

export default AntDComponent;