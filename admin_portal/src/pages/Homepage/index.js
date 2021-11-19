import "./hompage.css";

import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { useState } from "react";

const { Header, Footer, Sider, Content } = Layout;


const Homepage = (props) => {
  const [state, setState] = useState({
    collapsed: false,
  });


  const toggle = () => {
    setState({
      collapsed: ! state.collapsed,
    });
  };

  return (
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};
export default Homepage;
