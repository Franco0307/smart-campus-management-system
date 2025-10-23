import { Card,Row,Col,Table,Input, Button,Tag,Progress, Badge } from "antd"
import type { TableProps } from "antd"

interface DataType{
    key:string;
    name:string;
    person:string;
    tel:string;
    status:string;
    vacancyRate:number;
    propertyFee:string;
}

const columns:TableProps<DataType>['columns']=[
    {
        title:"No.",
        key:"index",
        render:(value,record,index)=>index+1
    },
    {
        title:"Building Name",
        dataIndex:"name",
        key:"name"
    },
    {
        title:"Person in Charge",
        dataIndex:"person",
        key:"person"
    },
    {
        title:"Contact Number",
        dataIndex:"tel",
        key:"tel"
    },
    {
        title:"Usage Status",
        dataIndex:"status",
        key:"status",
        render:(value)=>{
            if(value==1){
                return <Tag color="#f50">Under Construction</Tag>
            }else if(value==2){
                return <Tag color="#2db7f5">Completed</Tag>
            }else{
                return <Tag color="#87d068">In Use</Tag>
            }
        }
    },
    {
        title:"Vacancy Rate",
        dataIndex:"vacancyRate",
        key:"vacancyRate",
        render(value){
            return <Progress percent={value} status="active" />
        }
    },
    {
        title:"Property Fee Rate",
        dataIndex:"propertyFee",
        key:"propertyFee",
        render(value){
            return <Badge color="green" text={value}></Badge>
        }
    },
    {
        title:"Action",
        key:"operate",
        render(value){
            return <>
                <Button type="primary" className="mr">Edit</Button>
                <Button type="primary" danger>Delete</Button>
            </>
        }
    },
]
const data: DataType[] = [
    {
        key: '1',
        name: 'Building A1 Office',
        person: "Wang Da",
        tel: '16654789654',
        status: "Under Construction",
        vacancyRate: 60,
        propertyFee:"3.5%",
    },
    {
        key: '2',
        name: 'Building A2 Office',
        person: "Su Lekai",
        tel: '13698756669',
        status: "Completed",
        vacancyRate: 40,
        propertyFee:"3.8%",
    },
    {
        key: '3',
        name: 'Building B1 Office',
        person: "Liya",
        tel: '15587966698',
        status: "In Use",
        vacancyRate: 20,
        propertyFee:"3.1%",
    },
    {
        key: '4',
        name: 'Building B2 Office',
        person: "Chang Ke",
        tel: '13698756324',
        status: "In Use",
        vacancyRate: 30,
        propertyFee:"4.0%",
    },
    {
        key: '5',
        name: 'Building C1 Office',
        person: "Liu Wei",
        tel: '19878965444',
        status: "In Use",
        vacancyRate: 50,
        propertyFee:"3.5%",
    },
    {
        key: '6',
        name: 'Building C2 Office',
        person: "Sun Qianghao",
        tel: '13369888562',
        status: "In Use",
        vacancyRate: 10,
        propertyFee:"2.9%",
    },
    {
        key: '7',
        name: 'Tianhui International Tower A',
        person: "Ma Haohan",
        tel: '13578549687',
        status: "In Use",
        vacancyRate: 25,
        propertyFee:"3.7%",
    },
    {
        key: '8',
        name: 'Times Finance Plaza',
        person: "Yang Liu",
        tel: '18745889874',
        status: "In Use",
        vacancyRate: 15,
        propertyFee:"3.3%",
    },
    
];
function Temement(){
    return <div>
        <Card className="search">
            <Row gutter={16}>
                <Col span={4}>
                    <p>Building Name:</p>
                    <Input></Input>
                </Col>
                <Col span={4}>
                    <p>Person in Charge:</p>
                    <Input></Input>
                </Col>
                <Col span={4}>
                    <Button className="mr" type="primary">Search</Button>
                    <Button>Reset</Button>
                </Col>
            </Row>
        </Card>
        <Card className="mt">
            <Table
                columns={columns}
                dataSource={data}
            />
        </Card>
    </div>
}

export default Temement