import React, { useState } from 'react';
import { Layout, Menu, Card, Row, Col, Button, List, Progress, Typography, Avatar, Modal } from 'antd';
import { CalendarOutlined, TeamOutlined, MessageOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import './Mentor.css';

const { Header, Content, Sider } = Layout;
const { Title: AntdTitle, Text } = Typography;

const Mentor = () => {
  // Sample Data for Dynamic Content
  const mentees = [
    {
      name: 'Jane Doe',
      avatar: 'https://via.placeholder.com/50',
      feedbackScore: 4.5,
      progress: 75,
      sessionsCompleted: 5,
    },
    {
      name: 'John Smith',
      avatar: 'https://via.placeholder.com/50',
      feedbackScore: 4.7,
      progress: 60,
      sessionsCompleted: 3,
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMentee, setSelectedMentee] = useState(null);

  const showMenteeDetails = (mentee) => {
    setSelectedMentee(mentee);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setSelectedMentee(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedMentee(null);
  };

  return (
    <Layout className="mentor-dashboard">
      <Sider width={220} className="site-layout-background">
        <Menu mode="inline" defaultSelectedKeys={['1']} className="dashboard-menu">
          <Menu.Item key="1" icon={<CalendarOutlined />}>
            Mentorship Schedule
          </Menu.Item>
          <Menu.Item key="2" icon={<TeamOutlined />}>
            Mentees
          </Menu.Item>
          <Menu.Item key="3" icon={<MessageOutlined />}>
            Advice Given
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="content-layout">
        <Header className="dashboard-header">
          <AntdTitle level={3}>Mentor Dashboard</AntdTitle>
        </Header>

        <Content className="dashboard-content">
          {/* Dynamic Mentee Progress Section */}
          <Row gutter={[16, 16]}>
            {mentees.map((mentee, index) => (
              <Col span={8} key={index}>
                <Card className="mentee-card" title={mentee.name}>
                  <Avatar src={mentee.avatar} size={64} />
                  <h3>Sessions Completed: {mentee.sessionsCompleted}</h3>
                  <h4>Feedback Score: {mentee.feedbackScore} / 5</h4>
                  <Progress percent={mentee.progress} />
                  <Button
                    type="primary"
                    onClick={() => showMenteeDetails(mentee)}
                    className="view-details-btn"
                  >
                    View Details
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Dynamic Modal for Mentee Details */}
          <Modal
            title={selectedMentee ? selectedMentee.name : ''}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            {selectedMentee && (
              <>
                <Avatar src={selectedMentee.avatar} size={64} />
                <h4>Feedback Score: {selectedMentee.feedbackScore} / 5</h4>
                <p>Progress: {selectedMentee.progress}%</p>
                <p>Sessions Completed: {selectedMentee.sessionsCompleted}</p>
                <Button type="primary" icon={<VideoCameraOutlined />}>
                  Schedule a Video Session
                </Button>
              </>
            )}
          </Modal>

          {/* Upcoming Mentorship Sessions */}
          <Row gutter={[16, 16]} className="schedule-row">
            <Col span={24}>
              <Card title="Upcoming Mentorship Sessions" className="schedule-card">
                <List
                  itemLayout="horizontal"
                  dataSource={[
                    { date: 'Sept 30', time: '2:00 PM', mentee: 'Jane Doe' },
                    { date: 'Oct 5', time: '4:00 PM', mentee: 'John Smith' },
                  ]}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar icon={<UserOutlined />} />}
                        title={`Session with ${item.mentee}`}
                        description={`${item.date} at ${item.time}`}
                      />
                      <Button type="primary" className="join-session-btn">
                        Join Session
                      </Button>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>

          {/* Call to Action Button */}
          <Row gutter={[16, 16]} className="action-row">
            <Col span={24}>
              <Button type="primary" block className="schedule-session-btn">
                Schedule New Mentorship Session
              </Button>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Mentor;
