import { Card } from "antd"
import { Descriptions, Row, Col, Calendar, Avatar, List,Tag,Progress,Badge } from 'antd';
import type { DescriptionsProps } from 'antd';
const data = [
    {
        title: 'Ant Design Title 1',
    }
];


export default function Personal() {


    return <div>

        <Row gutter={16}>

            <Col span={6}>
                <Card>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item, index) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={`https://randomuser.me/api/portraits/thumb/men/52.jpg`} />}
                                    title={<a href="https://ant.design">Zhao Tiezhu - Operations Specialist</a>}
                                    description="Whether working or surviving, do your best with all your might, excellence is the norm."
                                />
                            </List.Item>
                        )}
                    />
                </Card>
                <Card className="mt">
                    <Calendar fullscreen={false} />
                </Card>
            </Col>

            <Col span={18}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card>
                            Pending： <Badge count={4} showZero color="#faad14" />
                        </Card>
                        <Card title="New Account Application" extra={<a href="#">Details</a>} className="mt">
                            <p>Description: New employee needs user permission account</p>
                            <p className="mt">Creator: HR Dept - Liu Ting</p>
                            <div className="mt">
                                Date：<Tag>2024-05-02</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">Regular</Tag>
                                <Tag color="blue">Account Issue</Tag>
                            </div>
                            <div className="mt">
                                Progress：
                                <Progress percent={1} />
                            </div>
                        </Card>
                        <Card title="Property Fee Reminder" extra={<a href="#">Details</a>} className="mt">
                            <p>Description: Urge enterprise to pay promptly</p>
                            <p className="mt">Creator: President Office - Wang Jiu</p>
                            <div className="mt">
                                Date：<Tag>2024-05-01</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="orange">Urgent</Tag>
                                <Tag color="blue">Property Issue</Tag>
                            </div>
                            <div className="mt">
                                Progress：
                                <Progress percent={1} />
                            </div>
                        </Card>
                        <Card title="Charging Station Repair" extra={<a href="#">Details</a>} className="mt">
                            <p>Description: Charging station under Building C1 damaged, repair ASAP</p>
                            <p className="mt">Creator: Admin Dept - Wang Wei</p>
                            <div className="mt">
                                Date：<Tag>2024-05-04</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">Regular</Tag>
                                <Tag color="blue">Property Issue</Tag>
                            </div>
                            <div className="mt">
                                Progress：
                                <Progress percent={1} />
                            </div>
                        </Card>
                        
                    </Col>
                    <Col span={8}>
                        <Card>
                            In Progress：<Badge count={2} showZero color="blue" />
                        </Card>
                        <Card title="Notify Enterprises of Heating Test" extra={<a href="#">Details</a>} className="mt">
                            <p>Description: Heating coming soon, test valves</p>
                            <p className="mt">Creator: Admin Dept - Wang Wei</p>
                            <div className="mt">
                                Date：<Tag>2024-05-03</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">Regular</Tag>
                                <Tag color="blue">Property Issue</Tag>
                            </div>
                            <div className="mt">
                                Progress：
                                <Progress percent={34} />
                            </div>
                        </Card>
                        <Card title="Bill Not Approved" extra={<a href="#">Details</a>} className="mt">
                            <p>Description: Complete approval of new quarter financial bills urgently</p>
                            <p className="mt">Creator: President Office - Zhang Da</p>
                            <div className="mt">
                                Date：<Tag>2024-05-11</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="orange">Urgent</Tag>
                                <Tag color="blue">Finance Issue</Tag>
                            </div>
                            <div className="mt">
                                Progress：
                                <Progress percent={65} />
                            </div>
                        </Card>
                        <Card title="Parking Space Expiry Reminder" extra={<a href="#">Details</a>} className="mt">
                            <p>Description: Parking space renewal changed to annual fee</p>
                            <p className="mt">Creator: President Office - Liu Ting</p>
                            <div className="mt">
                                Date：<Tag>2024-05-20</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">Regular</Tag>
                                <Tag color="blue">Account Issue</Tag>
                            </div>
                            <div className="mt">
                                Progress：
                                <Progress percent={47} />
                            </div>
                        </Card>
                        
                    </Col>
                    <Col span={8}>
                        <Card>
                            Completed：<Badge count={9} showZero color="green" />
                        </Card>
                        <Card title="Article Publishing" extra={<a href="#">Details</a>} className="mt">
                            <p>Description: Publish investment article</p>
                            <p className="mt">Creator: Marketing Dept - Manman</p>
                            <div className="mt">
                                Date：<Tag>2024-04-02</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">Regular</Tag>
                                <Tag color="blue">Operation Issue</Tag>
                            </div>
                            <div className="mt">
                                Progress：
                                <Progress percent={100} />
                            </div>
                        </Card>
                        <Card title="New Account Application" extra={<a href="#">Details</a>} className="mt">
                            <p>Description: New employee needs user permission account</p>
                            <p className="mt">Creator: HR Dept - Liu Ting</p>
                            <div className="mt">
                                Date：<Tag>2024-04-11</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="blue">Regular</Tag>
                                <Tag color="blue">Account Issue</Tag>
                            </div>
                            <div className="mt">
                                Progress：
                                <Progress percent={100} />
                            </div>
                        </Card>
                        <Card title="Repair Handling" extra={<a href="#">Details</a>} className="mt">
                            <p>Description: Building A1 elevator maintenance</p>
                            <p className="mt">Creator: Admin Dept - Jin Qiang</p>
                            <div className="mt">
                                Date：<Tag>2024-04-17</Tag>
                            </div>
                            <div className="mt">
                                <Tag color="orange">Regular</Tag>
                                <Tag color="blue">Property Issue</Tag>
                            </div>
                            <div className="mt">
                                Progress：
                                <Progress percent={100} />
                            </div>
                        </Card>
                        
                    </Col>
                </Row>            
            </Col>

        </Row>


    </div>
}