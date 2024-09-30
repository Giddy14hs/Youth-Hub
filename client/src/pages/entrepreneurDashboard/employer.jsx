import React from 'react';
import { Layout, Menu, Card, Row, Col, Button, Table, Modal, Form, Input } from 'antd';
import {
  FundOutlined,
  CalendarOutlined,
  TeamOutlined,
  ProjectOutlined,
  BarChartOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import './employer.css';

const { Header, Content, Sider } = Layout;

const Employer = () => {
  // State for modals
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [modalType, setModalType] = React.useState('');

  // Sample data for projects and mentors
  const projectsData = [
    {
      key: '1',
      name: 'Project Alpha',
      status: 'In Progress',
      funding: '$50,000',
    },
    {
      key: '2',
      name: 'Project Beta',
      status: 'Pending',
      funding: '$30,000',
    },
  ];

  const mentorsData = [
    {
      key: '1',
      name: 'John Doe',
      expertise: 'Business Growth',
    },
    {
      key: '2',
      name: 'Jane Smith',
      expertise: 'Marketing Strategy',
    },
  ];

  // Columns for the tables
  const projectsColumns = [
    {
      title: 'Project Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Funding',
      dataIndex: 'funding',
      key: 'funding',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <>
          <Button type="link">Edit</Button>
          <Button type="link">View</Button>
        </>
      ),
    },
  ];

  const mentorsColumns = [
    {
      title: 'Mentor Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Expertise',
      dataIndex: 'expertise',
      key: 'expertise',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => <Button type="link">Request Guidance</Button>,
    },
  ];

  // Modal handlers
  const showModal = (type) => {
    setModalType(type);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // Handle form submission here
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout className="entrepreneur-dashboard">
      <Sider width={220} className="site-layout-background">
        <Menu mode="inline" defaultSelectedKeys={['1']} className="dashboard-menu">
          <Menu.Item key="1" icon={<FundOutlined />}>
            Funding Progress
          </Menu.Item>
          <Menu.Item key="2" icon={<ProjectOutlined />}>
            Manage Projects
          </Menu.Item>
          <Menu.Item key="3" icon={<TeamOutlined />}>
            Find Mentors
          </Menu.Item>
          <Menu.Item key="4" icon={<CalendarOutlined />}>
            Meetings
          </Menu.Item>
          <Menu.Item key="5" icon={<BarChartOutlined />}>
            Analytics
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="content-layout">
        <Header className="dashboard-header">
          <h2>Entrepreneur Dashboard</h2>
        </Header>
        <Content className="dashboard-content">
          {/* Funding Progress Section */}
          <section id="funding-progress">
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Card className="stat-card" title="Total Funding">
                  <h3>$500,000</h3>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="stat-card" title="Revenue Generated">
                  <h3>$120,000</h3>
                </Card>
              </Col>
              <Col span={8}>
                <Card className="stat-card" title="Funding Needed">
                  <h3>$250,000</h3>
                </Card>
              </Col>
            </Row>
            <Button
              type="primary"
              className="apply-funding-btn"
              onClick={() => showModal('funding')}
            >
              Apply for Funding
            </Button>
          </section>

          {/* Manage Projects Section */}
          <section id="manage-projects">
            <h3>Manage Projects</h3>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => showModal('project')}
              style={{ marginBottom: 16 }}
            >
              Add New Project
            </Button>
            <Table dataSource={projectsData} columns={projectsColumns} />
          </section>

          {/* Find Mentors Section */}
          <section id="find-mentors">
            <h3>Find Mentors</h3>
            <Table dataSource={mentorsData} columns={mentorsColumns} />
            <Button type="primary" style={{ marginTop: 16 }}>
              See All Mentors
            </Button>
          </section>

          {/* Meetings Section */}
          <section id="meetings">
            <h3>Upcoming Meetings</h3>
            <p>You have 2 meetings scheduled this week.</p>
            <Button
              type="primary"
              className="schedule-meeting-btn"
              onClick={() => showModal('meeting')}
            >
              Schedule New Meeting
            </Button>
          </section>

          {/* Analytics Section */}
          <section id="analytics">
            <h3>Project Analytics</h3>
            <Card>
              {/* Placeholder for Chart */}
              <div className="chart-placeholder">[Chart Component Here]</div>
            </Card>
            <Button type="primary" style={{ marginTop: 16 }}>
              Download Report
            </Button>
          </section>
        </Content>
      </Layout>

      {/* Modals */}
      <Modal
        title={
          modalType === 'funding'
            ? 'Apply for Funding'
            : modalType === 'project'
            ? 'Add New Project'
            : 'Schedule Meeting'
        }
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
      >
        <Form layout="vertical">
          {modalType === 'funding' && (
            <>
              <Form.Item label="Funding Amount" name="amount">
                <Input placeholder="Enter amount needed" />
              </Form.Item>
              <Form.Item label="Purpose" name="purpose">
                <Input.TextArea placeholder="Describe the purpose of funding" />
              </Form.Item>
            </>
          )}
          {modalType === 'project' && (
            <>
              <Form.Item label="Project Name" name="projectName">
                <Input placeholder="Enter project name" />
              </Form.Item>
              <Form.Item label="Description" name="description">
                <Input.TextArea placeholder="Describe your project" />
              </Form.Item>
            </>
          )}
          {modalType === 'meeting' && (
            <>
              <Form.Item label="Meeting Title" name="meetingTitle">
                <Input placeholder="Enter meeting title" />
              </Form.Item>
              <Form.Item label="Date & Time" name="datetime">
                <Input type="datetime-local" />
              </Form.Item>
            </>
          )}
        </Form>
      </Modal>
    </Layout>
  );
};

export default Employer;
