import React from 'react';
import { useSelector } from 'react-redux'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  QuestionCircleOutlined,
  GlobalOutlined,
  BellOutlined,
  UserOutlined,
  LogoutOutlined,
  DownOutlined
} from '@ant-design/icons';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Layout, Menu, Badge } from 'antd';
import './Style.css';
import { getUsernameAvatar } from '../../components/UserAvatar';
import { actLogout } from '../../store/auth/action';
import { useDispatch } from 'react-redux';
const { Header } = Layout;
const { SubMenu } = Menu;

function LayoutBanner({ collapsed, handleOnCollapse }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.Auth.currentUser);
  console.log(currentUser)
  const getCollapseIcon = () => {
    if (collapsed) {
      return (
        <MenuUnfoldOutlined onClick={handleOnCollapse} className="trigger" />
      );
    }
    return <MenuFoldOutlined onClick={handleOnCollapse} className="trigger" />;
  };

  const handleLanguageMenuClick = () => {};
  const handleSettingMenuClick = () => {};
  const handleLogout = () => {
    console.log("dsfsads");
    dispatch(actLogout());
  };


  return (
    <Header className="header" style={{ background: '#fff', padding: 0 }}>
      <div
        style={{
          float: 'left',
          width: '100%',
          alignSelf: 'center',
          display: 'flex',
        }}
      >
        {window.innerWidth > 992 && getCollapseIcon()}
      </div>
    
      <Menu
        onClick={handleLanguageMenuClick}
        mode="horizontal"
        className="menu"
      >
        <SubMenu title={<QuestionCircleOutlined />} />
      </Menu>

      <Menu
        onClick={handleLanguageMenuClick}
        mode="horizontal"
        className="menu"
      >
        <SubMenu
          title={
            <Badge dot>
              <BellOutlined />
            </Badge>
          }
        />
      </Menu>

      <Menu
        onClick={handleLanguageMenuClick}
        mode="horizontal"
        className="menu"
      >
        <SubMenu title={<GlobalOutlined />}>
          <Menu.Item key="en">
            <span role="img" aria-label="English">
              ???????? English
            </span>
          </Menu.Item>
          <Menu.Item key="it">
            <span role="img" aria-label="Italian">
              ???????? Italian
            </span>
          </Menu.Item>
        </SubMenu>
      </Menu>

      <Menu onClick={handleSettingMenuClick} mode="horizontal" className="menu">         
          <SubMenu title= {currentUser ?  getUsernameAvatar(currentUser.userName) :   getUsernameAvatar('') }>
          <Menu.Item key="setting:1">
            <span>
              <UserOutlined />
              Profile
            </span>
          </Menu.Item>
          <Menu.Item key="setting:2" onClick={handleLogout}>
            <span>
              <LogoutOutlined  />
              Logout
            </span>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  );
}

export default LayoutBanner;