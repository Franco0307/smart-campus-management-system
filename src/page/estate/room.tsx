import { Card, Row, Col, Image,Radio,Spin } from "antd"
import { useEffect, useState } from "react"
import { getRoomList } from "../../api/room"
import "./index.scss"
import { RadioChangeEvent } from "antd/lib";
import roomPic from "../../assets/roomPic.jpg"
interface RoomType {
    roomNumber: number;
    decorationType: "Rough" | "Hardcover";
    area: number;
    unitPrice: number;
    src:string
}
function Room() {
    const [visible, setVisible] = useState<boolean>(false)
    const [room, setRoom] = useState<RoomType[]>([])
    const [src,setSrc]=useState<string>(roomPic);
    const [loading,setLoading]=useState<boolean>(false)
    const loadRoom = async (roomid: string) => {
        setLoading(true)
        const { data: { rooms } } = await getRoomList(roomid);
        setLoading(false)
        setRoom(rooms)
    }
    const handleChange=(e:RadioChangeEvent)=>{
        const roomid:string=e.target.value;
        loadRoom(roomid)

    }

    useEffect(() => {
        loadRoom("a1")
    }, [])


    const showImage=(src:string)=>{
        setSrc(src);
        setVisible(true)
    }

    return <div className="room">
        <Image
            width={200}
            style={{ display: 'none' }}
            preview={{
                visible,
                src: src,
                onVisibleChange: (value) => {
                    setVisible(value);
                },
            }}
        />
        <Card className="mb">
            <Radio.Group defaultValue="a1"  optionType="button"  buttonStyle="solid" onChange={handleChange}>
                <Radio.Button value="a1">Building A1 Office</Radio.Button>
                <Radio.Button value="a2">Building A2 Office</Radio.Button>
                <Radio.Button value="b1">Building B1 Office</Radio.Button>
                <Radio.Button value="b2">Building B2 Office</Radio.Button>
                <Radio.Button value="c1">Building C1 Office</Radio.Button>
                <Radio.Button value="c2">Building C2 Office</Radio.Button>
                <Radio.Button value="d1">Tianhui International Tower A</Radio.Button>
                <Radio.Button value="d2">Times Finance Plaza</Radio.Button>
            </Radio.Group>
        </Card>
        <Spin spinning={loading}>
        <Row gutter={16}>
            {/* <Col span={6} className="item">
                <Card title="Room Number" extra={<a onClick={()=>setVisible(true)}>Floor Plan</a>}>
                    <h1>201</h1>
                    <div className="clearfix mt">
                        <p className="fl">Decoration:</p>
                        <p className="fr">Rough</p>
                    </div>
                    <div className="clearfix mt">
                        <p className="fl">Room Area</p>
                        <p className="fr">100</p>
                    </div>
                    <div className="clearfix mt">
                        <p className="fl">Unit Price</p>
                        <p className="fr">100</p>
                    </div>
                </Card>
            </Col> */}
            {
                room.map((item) => {
                    return <>
                        <Col span={6} className="item">
                            <Card title="Room Number" extra={<a onClick={() => showImage(item.src)}>Floor Plan</a>}>
                                <h1>{item.roomNumber}</h1>
                                <div className="clearfix mt">
                                    <p className="fl">Decoration:</p>
                                    <p className="fr">{item.decorationType}</p>
                                </div>
                                <div className="clearfix mt">
                                    <p className="fl">Room Area</p>
                                    <p className="fr">{item.area}㎡</p>
                                </div>
                                <div className="clearfix mt">
                                    <p className="fl">Unit Price</p>
                                    <p className="fr">{item.unitPrice} yuan/㎡/day</p>
                                </div>
                            </Card>
                        </Col>
                    </>
                })
            }
        </Row>
        </Spin>
    </div>
}

export default Room