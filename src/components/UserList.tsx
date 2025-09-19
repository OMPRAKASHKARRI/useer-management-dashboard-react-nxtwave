import React, { useState } from 'react';
import { Row, Col, Modal, Typography, Spin, Alert, Empty } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { UserCard } from './UserCard';
import { EditUserModal } from './EditUserModal';
import { User } from '../types/User';
import { useUsers } from '../hooks/useUsers';

const { Title } = Typography;
const { confirm } = Modal;

export const UserList: React.FC = () => {
  const { users, loading, error, updateUser, deleteUser, toggleLike } = useUsers();
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setIsModalVisible(true);
  };

  const handleDelete = (userId: number) => {
    const user = users.find(u => u.id === userId);
    
    confirm({
      title: 'Delete User',
      icon: <ExclamationCircleOutlined />,
      content: (
        <div>
          <p>Are you sure you want to delete <strong>{user?.name}</strong>?</p>
          <p style={{ color: '#8c8c8c', fontSize: '14px' }}>
            This action cannot be undone.
          </p>
        </div>
      ),
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk() {
        deleteUser(userId);
      },
    });
  };

  const handleSaveUser = (updatedUser: User) => {
    updateUser(updatedUser);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setEditingUser(null);
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '400px' 
      }}>
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert
        message="Error Loading Users"
        description={error}
        type="error"
        showIcon
        style={{ margin: '20px' }}
      />
    );
  }

  if (users.length === 0) {
    return (
      <Empty
        description="No users found"
        style={{ margin: '40px 0' }}
      />
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Title level={1} style={{ 
          color: '#1890ff',
          marginBottom: '8px',
          fontSize: '2.5rem'
        }}>
          User Management Dashboard
        </Title>
        <Typography.Text type="secondary" style={{ fontSize: '16px' }}>
          Manage your team members with ease - view, edit, like, and organize user profiles
        </Typography.Text>
      </div>

      <Row gutter={[24, 24]} justify="start">
        {users.map((user) => (
          <Col
            key={user.id}
            xs={24}
            sm={12}
            lg={8}
            xl={6}
            style={{ display: 'flex' }}
          >
            <div style={{ width: '100%' }}>
              <UserCard
                user={user}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onToggleLike={toggleLike}
              />
            </div>
          </Col>
        ))}
      </Row>

      <EditUserModal
        visible={isModalVisible}
        user={editingUser}
        onClose={handleCloseModal}
        onSave={handleSaveUser}
      />
    </div>
  );
};