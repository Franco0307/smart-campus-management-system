import {Card,Row,Col,Table,Input,Button,Tabs,Image } from "antd"
import type { TabsProps,TableProps } from 'antd';
import come from "../../assets/come.jpg"
interface DataType {
    key: string;
    orderNo: string;
    date: string;
    carNo: string;
    type: string;
    startDate: string;
    time: string;
    count: string;
    cost: string;
}
interface DataType2 {
    key: string;
    carNo: string;
    name: string;
    tel: string;
    type: string;
    rest: string;
    time: string;
    pic: string;
}
const columns: TableProps<DataType>['columns'] = [
    {
        title: "No.",
        key: "index",
        render: (text, record, index) => index + 1,
    },
    {
        title: 'Order Number',
        dataIndex: 'orderNo',
        key: 'orderNo',

    },
    {
        title: 'Order Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'License Plate',
        dataIndex: 'carNo',
        key: 'carNo',
    },
    {
        title: 'Vehicle Type',
        dataIndex: 'type',
        key: 'type',

    },
    {
        title: 'Charging Start Time',
        dataIndex: 'startDate',
        key: 'startDate',
    },
    {
        title: 'Charging Duration',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Charging Amount',
        dataIndex: 'count',
        key: 'count',
    },
    {
        title: 'Charging Cost',
        dataIndex: 'cost',
        key: 'cost',
    },
    {
        title: 'Action',
        dataIndex: 'operate',
        key: 'operate',
        render: (text, record) => {
            return <>
                <Button type="primary" size="small">View</Button>
            </>
        }
    },

];

const data: DataType[] = [
    {
        key: '1',
        orderNo: 'CD9872380',
        date: "2024-02-13",
        carNo: 'Beijing A88888',
        type: "Own Vehicle",
        startDate: "2024-02-13 15:33:12",
        time: "2 hours 25 minutes",
        count: "30kw",
        cost: "¥40.50"
    },
    {
        key: '2',
        orderNo: 'CD9872380',
        date: "2024-02-13",
        carNo: 'Beijing A88888',
        type: "Own Vehicle",
        startDate: "2024-02-13 15:33:12",
        time: "2 hours 25 minutes",
        count: "30kw",
        cost: "¥40.50"
    },
    {
        key: '3',
        orderNo: 'CD9872380',
        date: "2024-02-13",
        carNo: 'Beijing A88888',
        type: "Own Vehicle",
        startDate: "2024-02-13 15:33:12",
        time: "2 hours 25 minutes",
        count: "30kw",
        cost: "¥40.50"
    },
    {
        key: '4',
        orderNo: 'CD9872380',
        date: "2024-02-13",
        carNo: 'Beijing A88888',
        type: "Own Vehicle",
        startDate: "2024-02-13 15:33:12",
        time: "2 hours 25 minutes",
        count: "30kw",
        cost: "¥40.50"
    },
    {
        key: '5',
        orderNo: 'CD9872380',
        date: "2024-02-13",
        carNo: 'Beijing A88888',
        type: "Own Vehicle",
        startDate: "2024-02-13 15:33:12",
        time: "2 hours 25 minutes",
        count: "30kw",
        cost: "¥40.50"
    },
    {
        key: '6',
        orderNo: 'CD9872380',
        date: "2024-02-13",
        carNo: 'Beijing A88888',
        type: "Own Vehicle",
        startDate: "2024-02-13 15:33:12",
        time: "2 hours 25 minutes",
        count: "30kw",
        cost: "¥40.50"
    },
    {
        key: '7',
        orderNo: 'CD9872380',
        date: "2024-02-13",
        carNo: 'Beijing A88888',
        type: "Own Vehicle",
        startDate: "2024-02-13 15:33:12",
        time: "2 hours 25 minutes",
        count: "30kw",
        cost: "¥40.50"
    },
    {
        key: '8',
        orderNo: 'CD9872380',
        date: "2024-02-13",
        carNo: 'Beijing A88888',
        type: "Own Vehicle",
        startDate: "2024-02-13 15:33:12",
        time: "2 hours 25 minutes",
        count: "30kw",
        cost: "¥40.50"
    },

];

const columns2: TableProps<DataType2>['columns'] = [
    {
        title: "No.",
        key: "index",
        render: (text, record, index) => index + 1,
    },
    {
        title: 'License Plate',
        dataIndex: 'carNo',
        key: 'carNo',

    },
    {
        title: 'Owner Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Owner Phone',
        dataIndex: 'tel',
        key: 'tel',
    },
    {
        title: 'Lease Type',
        dataIndex: 'type',
        key: 'type',

    },
    {
        title: 'Remaining Lease',
        dataIndex: 'rest',
        key: 'rest',
    },
    {
        title: 'Overdue Days',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: 'Entry Photo',
        dataIndex: 'pic',
        key: 'pic',
        render: (text) => <Image
            src={come}
            width={50}
            placeholder={
                <Image
                    preview={false}
                    src={come}
                    width={150}
                />
            }
        />
    },

    {
        title: 'Action',
        dataIndex: 'operate',
        key: 'operate',
        render: (text, record) => {
            return <>
                <Button type="primary" size="small" className='mr'>Edit</Button>
                <Button type="primary" size="small" danger>Delete</Button>
            </>
        }
    },

];
const data2: DataType2[] = [
    {
        key: '1',
        carNo: 'Beijing A88888',
        name: "Wang Li",
        tel: "18876543210",
        type: 'Long-term Rental',
        rest: "135 days",
        time: "0 days",
        pic: "",
    },
    {
        key: '2',
        carNo: 'Beijing A88888',
        name: "Wang Li",
        tel: "18876543210",
        type: 'Long-term Rental',
        rest: "135 days",
        time: "0 days",
        pic: "",
    },
    {
        key: '3',
        carNo: 'Beijing A88888',
        name: "Wang Li",
        tel: "18876543210",
        type: 'Long-term Rental',
        rest: "135 days",
        time: "0 days",
        pic: "",
    },
    {
        key: '4',
        carNo: 'Beijing A88888',
        name: "Wang Li",
        tel: "18876543210",
        type: 'Long-term Rental',
        rest: "135 days",
        time: "0 days",
        pic: "",
    },
    {
        key: '5',
        carNo: 'Beijing A88888',
        name: "Wang Li",
        tel: "18876543210",
        type: 'Long-term Rental',
        rest: "135 days",
        time: "0 days",
        pic: "",
    },
    {
        key: '6',
        carNo: 'Beijing A88888',
        name: "Wang Li",
        tel: "18876543210",
        type: 'Long-term Rental',
        rest: "135 days",
        time: "0 days",
        pic: "",
    },
    {
        key: '7',
        carNo: 'Beijing A88888',
        name: "Wang Li",
        tel: "18876543210",
        type: 'Long-term Rental',
        rest: "135 days",
        time: "0 days",
        pic: "",
    },
    {
        key: '8',
        carNo: 'Beijing A88888',
        name: "Wang Li",
        tel: "18876543210",
        type: 'Long-term Rental',
        rest: "135 days",
        time: "0 days",
        pic: "",
    },

];
const items:TabsProps['items']=[
    {
        key:"1",
        label:"Charging Records",
        children:<Table columns={columns} dataSource={data}/>
    },
    {
        key:"2",
        label:"Park Vehicle List",
        children:<Table columns={columns2} dataSource={data2}/>
    }
]

function Car(){
    return <div>
        <Card>
            <Row gutter={16}>
                <Col span={8}>
                    <Input placeholder="Please enter license plate, phone number or contact name"/>
                </Col>
                <Col span={8}>
                    <Button type="primary" className="ml">Search</Button>
                </Col>
            </Row>
        </Card>
        <Card className="mt">
            <Tabs items={items}></Tabs>
        </Card>
    </div>
}

export default Car