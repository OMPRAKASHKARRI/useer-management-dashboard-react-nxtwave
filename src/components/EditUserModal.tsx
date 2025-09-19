import React, { useEffect } from 'react';
import { Modal, Form, Input, Button, Row, Col, message } from 'antd';
import { User } from '../types/User';

interface EditUserModalProps {
  visible: boolean;
  user: User | null;
  onClose: () => void;
  onSave: (user: User) => void;
}

export const EditUserModal: React.FC<EditUserModalProps> = ({
  visible,
  user,
  onClose,
  onSave,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (user && visible) {
      form.setFieldsValue({
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
        zipcode: user.address.zipcode,
        company: user.company.name,
      });
    }
  }, [user, visible, form]);

  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      if (user) {
        const updatedUser: User = {
          ...user,
          name: values.name,
          username: values.username,
          email: values.email,
          phone: values.phone,
          website: values.website,
          address: {
            street: values.street,
            suite: values.suite,
            city: values.city,
            zipcode: values.zipcode,
          },
          company: {
            name: values.company,
          },
        };
        onSave(updatedUser);
        message.success('User updated successfully!');
        onClose();
      }
    } catch (error) {
      message.error('Please fill in all required fields');
    }
  };

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title={
        <div style={{ fontSize: '18px', fontWeight: 600 }}>
          Edit User Profile
        </div>
      }
      open={visible}
      onCancel={handleCancel}
      width={700}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="save" type="primary" onClick={handleSave}>
          Save Changes
        </Button>,
      ]}
      destroyOnClose
    >
      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        style={{ marginTop: '20px' }}
      >
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="name"
              label="Full Name"
              rules={[{ required: true, message: 'Please enter full name' }]}
            >
              <Input placeholder="Enter full name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true, message: 'Please enter username' }]}
            >
              <Input placeholder="Enter username" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please enter email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
            >
              <Input placeholder="Enter email address" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="phone"
              label="Phone"
              rules={[{ required: true, message: 'Please enter phone number' }]}
            >
              <Input placeholder="Enter phone number" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="website"
          label="Website"
          rules={[{ required: true, message: 'Please enter website' }]}
        >
          <Input placeholder="Enter website URL" />
        </Form.Item>

        <div style={{ 
          marginBottom: '16px', 
          fontSize: '16px', 
          fontWeight: 500,
          color: '#262626',
          borderBottom: '1px solid #f0f0f0',
          paddingBottom: '8px'
        }}>
          Address Information
        </div>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="street"
              label="Street"
              rules={[{ required: true, message: 'Please enter street' }]}
            >
              <Input placeholder="Enter street address" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="suite"
              label="Suite"
              rules={[{ required: true, message: 'Please enter suite' }]}
            >
              <Input placeholder="Enter suite/apartment" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="city"
              label="City"
              rules={[{ required: true, message: 'Please enter city' }]}
            >
              <Input placeholder="Enter city" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="zipcode"
              label="ZIP Code"
              rules={[{ required: true, message: 'Please enter ZIP code' }]}
            >
              <Input placeholder="Enter ZIP code" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="company"
          label="Company"
          rules={[{ required: true, message: 'Please enter company name' }]}
        >
          <Input placeholder="Enter company name" />
        </Form.Item>
      </Form>
    </Modal>
  );
};