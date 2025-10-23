import { Button, Empty, Typography } from 'antd';
import { Link } from 'react-router-dom';
function NotFound(){
    return <div style={{marginTop:"100px"}}> <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{ height: 60 }}
    description={
      <Typography.Text>
        warning <a href="#API">we lost you</a>
      </Typography.Text>
    }
  >
    <Button type="primary"><Link to="/dashboard">back to dashboard</Link></Button>
  </Empty></div>
}

export default NotFound