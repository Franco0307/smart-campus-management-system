import { Modal, Row, Col, Form, Input ,Radio, message} from "antd"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { editUser } from "../../api/userList";
interface FormProps {
    visible: boolean;
    hideModal: () => void;
    title: string;
    loadData:()=>void
}

function UserForm(props: FormProps) {
    const [form]=Form.useForm();
    const {userData}= useSelector((state:any)=>state.userSlice)
    const { visible, hideModal, title,loadData } = props
    const handleOk=()=>{
        form.validateFields().then(async (res)=>{
            const {data}=await editUser(res);
            message.success(data)
            hideModal();
            loadData()
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        title=="Add Enterprise"? form.resetFields():form.setFieldsValue(userData)
    },[visible])
    return <>
        <Modal
            title={title}
            open={visible}
            onCancel={hideModal}
            width={800}
            onOk={handleOk}
        >
            <Form
                form={form}
                labelCol={{span:8}}
                wrapperCol={{span:16}}
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Customer Name"
                            name="name"
                            rules={[{ required: true, message: "Customer name cannot be empty" }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Contact Number"
                            name="tel"
                            rules={[{ required: true, message: "Contact number cannot be empty" },{pattern:/^1[3-9]\d{9}$/,message:"Please enter a valid phone number"}]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Business Status"
                            name="status"
                            rules={[{ required: true, message: "Business status cannot be empty" }]}
                        >
                            <Radio.Group>
                                <Radio value="1">Operating</Radio>
                                <Radio value="2">Suspended</Radio>
                                <Radio value="3">Closed</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Industry"
                            name="business"
                            rules={[{ required: true, message: "Industry cannot be empty" }]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: "Email cannot be empty" }]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Unified Credit Code"
                            name="creditCode"
                            rules={[{ required: true, message: "Unified credit code cannot be empty" }]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Business Registration Number"
                            name="industryNum"
                            rules={[{ required: true, message: "Business registration number cannot be empty" }]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            label="Organization Code"
                            name="organizationCode"
                            rules={[{ required: true, message: "Organization code cannot be empty" }]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            label="Legal Representative"
                            name="legalPerson"
                            rules={[{ required: true, message: "Legal representative cannot be empty" }]}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>
                    
                </Row>
            </Form>
        </Modal>

    </>
}
export default UserForm