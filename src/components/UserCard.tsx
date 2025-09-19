import React from 'react';
import { Card, Button, Avatar, Typography, Tag, Space, Tooltip } from 'antd';
import {
  HeartOutlined,
  HeartFilled,
  EditOutlined,
  DeleteOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HomeOutlined,
  BankOutlined
} from '@ant-design/icons';
import { User } from '../types/User';

const { Text, Paragraph } = Typography;

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (userId: number) => void;
  onToggleLike: (userId: number) => void;
}

export const UserCard: React.FC<UserCardProps> = ({
  user,
  onEdit,
  onDelete,
  onToggleLike,
}) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <Card
      className="user-card"
      hoverable
      style={{
        height: '100%',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
      }}
      bodyStyle={{ padding: '20px' }}
      actions={[
        <Tooltip title={user.liked ? 'Unlike' : 'Like'} key="like">
          <Button
            type="text"
            icon={user.liked ? <HeartFilled style={{ color: '#ff4d4f' }} /> : <HeartOutlined />}
            onClick={() => onToggleLike(user.id)}
            style={{ 
              border: 'none',
              color: user.liked ? '#ff4d4f' : '#8c8c8c'
            }}
          >
            {user.likeCount || 0}
          </Button>
        </Tooltip>,
        <Tooltip title="Edit User" key="edit">
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => onEdit(user)}
            style={{ border: 'none' }}
          />
        </Tooltip>,
        <Tooltip title="Delete User" key="delete">
          <Button
            type="text"
            icon={<DeleteOutlined />}
            onClick={() => onDelete(user.id)}
            danger
            style={{ border: 'none' }}
          />
        </Tooltip>,
      ]}
    >
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <Avatar
          size={80}
          style={{
            backgroundColor: '#1890ff',
            fontSize: '24px',
            marginBottom: '12px'
          }}
          icon={<UserOutlined />}
        >
          {getInitials(user.name)}
        </Avatar>
        <Typography.Title level={4} style={{ margin: '0 0 4px 0' }}>
          {user.name}
        </Typography.Title>
        <Text type="secondary">@{user.username}</Text>
      </div>

      <Space direction="vertical" size="small" style={{ width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MailOutlined style={{ color: '#1890ff' }} />
          <Text ellipsis style={{ flex: 1 }}>
            {user.email}
          </Text>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <PhoneOutlined style={{ color: '#52c41a' }} />
          <Text>{user.phone}</Text>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <GlobalOutlined style={{ color: '#722ed1' }} />
          <Text ellipsis style={{ flex: 1 }}>
            {user.website}
          </Text>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
          <HomeOutlined style={{ color: '#fa8c16', marginTop: '2px' }} />
          <div style={{ flex: 1 }}>
            <Paragraph 
              ellipsis={{ rows: 2 }} 
              style={{ margin: 0, fontSize: '13px' }}
            >
              {user.address.suite}, {user.address.street}, {user.address.city} - {user.address.zipcode}
            </Paragraph>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BankOutlined style={{ color: '#eb2f96' }} />
          <Text ellipsis style={{ flex: 1 }}>
            {user.company.name}
          </Text>
        </div>
      </Space>

      <div style={{ marginTop: '16px', textAlign: 'center' }}>
        <Tag color="blue" style={{ borderRadius: '12px' }}>
          User ID: {user.id}
        </Tag>
      </div>
    </Card>
  );
};