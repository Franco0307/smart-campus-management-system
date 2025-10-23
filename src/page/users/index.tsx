import React from "react";
import { Card, Row, Col, Input, Button, Table, Pagination,Tag,Popconfirm,message  } from "antd"
import type { TableProps } from 'antd';
import { useState, useEffect, useMemo,useCallback } from "react";
import type { DataType } from "./interface";
import { getUserList } from "../../api/userList";
import type { PaginationProps } from 'antd';
import { deleteUser,batchDeleteUser } from "../../api/userList";
import UserForm from "./userForm";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/user/userSlice";
interface searchType {
    companyName: string;
    contact: string;
    phone: string

}

function Users() {
    const [dataList, setDataList] = useState<DataType[]>([])
    const [page, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [total, setTotal] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false)
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
    const [isModalOpen,setIsModalOpen]=useState<boolean>(false)
    const [title,setTitle]=useState<string>("")
    const dispatch=useDispatch()
    const [formData, setFormData] = useState<searchType>({
        companyName: "",
        contact: "",
        phone: ""
    })
   
   const disabled= useMemo(()=>{
        return selectedRowKeys.length?false:true
    },[selectedRowKeys])

    useEffect(() => {
        loadData()
    }, [page,pageSize])

    const loadData = async () => {
        setLoading(true)
        const { data: { list, total } } = await getUserList({ ...formData, page, pageSize });
        setLoading(false)
        setDataList(list)
        setTotal(total)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const onSelectChange = (selectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(selectedRowKeys)
    }
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    }
    const onChange:PaginationProps['onChange']=(page,pageSize)=>{
       setPage(page)
       setPageSize(pageSize);
    }
    const reset=()=>{
        setSelectedRowKeys([]);
        setFormData({ companyName: "",contact: "",phone: ""})
        setPage(1)
        setPageSize(10);
        loadData()

    }
    const confirm=async function(id:string){
      const {data}= await  deleteUser(id);
      message.success(data);
      loadData();
     
    }
    const batchDelete=async ()=>{
        const {data}=await batchDeleteUser(selectedRowKeys)
        message.success(data);
        loadData();
    }
    const edit=(record:DataType)=>{
        setIsModalOpen(true);
        setTitle("Edit Enterprise");
        dispatch(setUserData(record))
    }

    const add=()=>{
        setIsModalOpen(true);
        setTitle("Add Enterprise");
        dispatch(setUserData({}))
    }

    const hideModal=useCallback(()=>{
        setIsModalOpen(false)
    },[])

    const columns: TableProps<DataType>['columns'] = [
        {
            title: "No.",
            key: "index",
            render(value, record, index) {
                return index + 1
            },
        },
        {
            title: "Customer Name",
            key: "name",
            dataIndex: "name"
        },
        {
            title: "Business Status",
            key: "status",
            dataIndex: "status",
            render(value){
                if(value==1){
                    return <Tag color="green">Operating</Tag>
                }else if(value==2){
                    return <Tag color="#f50">Suspended</Tag>
                }else if(value==3){
                    return <Tag color="red">Closed</Tag>
                }
            }
        },
        {
            title: "Contact Number",
            key: "tel",
            dataIndex: "tel",
        },
        {
            title: "Industry",
            key: "business",
            dataIndex: "business"
        },
        {
            title: "Email",
            key: "email",
            dataIndex: "email"
        },
        {
            title: "Unified Credit Code",
            key: "creditCode",
            dataIndex: "creditCode"
        },
        {
            title: "Business Registration Number",
            key: "industryNum",
            dataIndex: "industryNum"
        },
        {
            title: "Organization Code",
            key: "organizationCode",
            dataIndex: "organizationCode"
        },
        {
            title: "Legal Representative",
            key: "legalPerson",
            dataIndex: "legalPerson"
        },
        {
            title: "Action",
            key: "operate",
            render(value, record, index) {
                return <>
                    <Button type="primary" size="small" onClick={()=>edit(record)}>Edit</Button>
                    <Popconfirm 
                        title="Delete Confirmation"
                        description="Are you sure you want to delete?"
                        okText="Yes"
                        cancelText="No"
                        onConfirm={()=>confirm(record.id)}
                    >
                         <Button type="primary" danger className="ml" size="small" >Delete</Button>
                    </Popconfirm>
                   
                </>
            },
        },
    
    ];
    return <div className="users">
        <MyUserForm visible={isModalOpen} hideModal={hideModal} title={title} loadData={loadData}/>
        <Card className="search">
            <Row gutter={16}>
                <Col span={7}>
                    <p>Enterprise Name:</p>
                    <Input name="companyName" value={formData.companyName} onChange={handleChange} />
                </Col>
                <Col span={7}>
                    <p>Contact Person:</p>
                    <Input name="contact" value={formData.contact} onChange={handleChange} />
                </Col>
                <Col span={7}>
                    <p>Contact Number:</p>
                    <Input name="phone" value={formData.phone} onChange={handleChange} />
                </Col>
                <Col span={3}>
                    <Button type="primary" onClick={loadData}>Search</Button>
                    <Button className="ml" onClick={reset}>Reset</Button>
                </Col>
            </Row>
        </Card>
        <Card className="mt tr">
            <Button type="primary" onClick={add}>Add Enterprise</Button>
            <Button danger type="primary" className="ml" disabled={disabled} onClick={batchDelete}>Batch Delete</Button>
        </Card>
        <Card className="mt">
            <Table
                columns={columns}
                dataSource={dataList}
                rowKey={(record) => record.id}
                loading={loading}
                rowSelection={rowSelection}
                pagination={false}
            />
            <Pagination
                className="fr mt"
                total={total}
                current={page}
                pageSize={pageSize}
                showSizeChanger
                showQuickJumper
                showTotal={(total) => `Total ${total} items`}
                onChange={onChange}
            />
        </Card>
    </div>
}

const MyUserForm=React.memo(UserForm)
export default Users