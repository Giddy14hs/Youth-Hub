import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { login, signup } from '../../actions/authentication';
import { Form, Input, Button, Card, Layout, Typography } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');

  const onSubmit = (formValues) => {
    if (!isLogin && formValues.password !== formValues.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (isLogin) {
      dispatch(login(formValues, navigate));
    } else {
      dispatch(signup(formValues, navigate));
    }
  };

  const handleGoogleLoginSuccess = (response) => {
    const token = response.credential;
    dispatch(login({ token }, navigate)); // Dispatch Google token to your login action
  };

  const handleGoogleLoginFailure = (error) => {
    setError('Google login failed. Please try again.');
    console.error('Google Login Error:', error);
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  return (
    <Layout style={{ padding: '2rem' }}>
      <Card title={<Title level={4}>{isLogin ? 'Login' : 'Sign Up'}</Title>} style={{ maxWidth: '400px', margin: 'auto' }}>
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginFailure}
        />
        <Form onFinish={onSubmit} layout="vertical">
          {!isLogin && (
            <Form.Item name="username" rules={[{ required: true, message: 'Please enter your username' }]}>
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
          )}
          <Form.Item name="email" rules={[{ required: true, message: 'Please enter a valid email address' }]}>
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          {!isLogin && (
            <Form.Item name="confirmPassword" rules={[{ required: true, message: 'Please confirm your password' }]}>
              <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
            </Form.Item>
          )}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {isLogin ? 'Login' : 'Sign Up'}
            </Button>
            <Button type="link" onClick={switchMode}>
              {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
            </Button>
          </Form.Item>
          </Form>
          </Card>
    </Layout>
  );
};

export default Login;
