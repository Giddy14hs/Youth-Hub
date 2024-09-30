import React from 'react';
import { Layout, Menu, Card, Row, Col, Button, List, Progress, Typography } from 'antd';
import { Bar } from 'react-chartjs-2';
import { CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Chart } from 'chart.js';
import { UserOutlined, FundOutlined, LineChartOutlined, DollarOutlined } from '@ant-design/icons';
import './Investor.css';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const { Header, Content, Sider } = Layout;
const { Title: AntdTitle, Text } = Typography;

const Investor = () => {
  // Investment Statistics Data
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Investments Made',
        data: [30000, 45000, 50000, 40000, 60000, 70000],
        backgroundColor: '#36a2eb',
      },
    ],
  };

  // Sample project recommendations for investors
  const projectRecommendations = [
    { title: 'Tech Startup A', fundingGoal: '$1,000,000', funded: 70 },
    { title: 'Green Energy Initiative', fundingGoal: '$2,000,000', funded: 55 },
    { title: 'Health Tech Innovation', fundingGoal: '$500,000', funded: 80 },
  ];

  return (
    <Layout className="investor-dashboard">
      <Sider width={220} className="site-layout-background">
        <Menu mode="inline" defaultSelectedKeys={['1']} className="dashboard-menu">
          <Menu.Item key="1" icon={<FundOutlined />}>
            Investments Overview
          </Menu.Item>
          <Menu.Item key="2" icon={<LineChartOutlined />}>
            Market Opportunities
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            Entrepreneurs Funded
          </Menu.Item>
        </Menu>
      </Sider>
      
      <Layout className="content-layout">
        <Header className="dashboard-header">
          <AntdTitle level={3}>Investor Dashboard</AntdTitle>
        </Header>
        
        <Content className="dashboard-content">
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Card className="stat-card" title="Total Investments">
                <h3>$250,000</h3>
              </Card>
            </Col>
            <Col span={8}>
              <Card className="stat-card" title="Investment Growth">
                <h3>25% Increase</h3>
              </Card>
            </Col>
            <Col span={8}>
              <Card className="stat-card" title="Entrepreneurs Funded">
                <h3>10 Entrepreneurs</h3>
              </Card>
            </Col>
          </Row>

          <Row gutter={[16, 16]} className="chart-row">
            <Col span={24}>
              <Card title="Investment Progress" className="chart-card">
                <Bar data={chartData} />
              </Card>
            </Col>
          </Row>

          {/* Section for Project Recommendations */}
          <Row gutter={[16, 16]} className="recommendations-row">
            <Col span={24}>
              <Card title="Project Recommendations" className="recommendations-card">
                <List
                  itemLayout="horizontal"
                  dataSource={projectRecommendations}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        title={<Text strong>{item.title}</Text>}
                        description={`Funding Goal: ${item.fundingGoal}`}
                      />
                      <div>
                        <Progress percent={item.funded} />
                        <Button type="primary" icon={<DollarOutlined />} className="invest-btn">
                          Invest Now
                        </Button>
                      </div>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>

          {/* Call to Action Button */}
          <Row gutter={[16, 16]} className="action-row">
            <Col span={24}>
              <Button type="primary" className="invest-btn" block>
                Explore New Investment Opportunities
              </Button>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Investor;
