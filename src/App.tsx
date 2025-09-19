import React from 'react';
import { ConfigProvider } from 'antd';
import { UserList } from './components/UserList';

const theme = {
  token: {
    colorPrimary: '#1890ff',
    borderRadius: 8,
    colorBgContainer: '#ffffff',
  },
  components: {
    Card: {
      borderRadiusLG: 12,
    },
    Button: {
      borderRadius: 6,
    },
    Modal: {
      borderRadiusLG: 12,
    },
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <div className="app" style={{ 
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '0'
      }}>
        <UserList />
      </div>
    </ConfigProvider>
  );
}

export default App;