import React from 'react';
import { List, Card,Avatar,Row,Col,Typography } from 'antd';
import JS from '../../images/js.png';
import ReactJS from '../../images/React.png';
import AntD from '../../images/antd.svg';
import Node from '../../images/Node.js.png';
import Python from '../../images/python.png';
import MongoDB from '../../images/mongo.png';

const data = [
  {
    title: 'JavaScript',
    src: JS,
  },
  {
    title:'React JS',
    src: ReactJS,

  },
  {
    title: 'Ant Design',
    src: AntD,
  },
  {
    title: 'Node JS',
    src: Node,
  },
  {
    title: 'MongoDB',
    src: MongoDB,
  },
  {
    title: 'Python',
    src: Python,
  }
]; 





const { Meta } = Card;


const ProgressBar = (props) => {
  const { text, percent } = props;
  return (
    <div style={{ marginTop: '20px' }}>
      <div>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 1,
          lg: 2,
          xl: 3,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <TarjetaSkills item={item} />
          </List.Item>
        )}
      />
      </div>
    </div>
  );
};

export default ProgressBar;


const { Title } = Typography;

function TarjetaSkills(props) {
  
  const item = props.item;
  console.log(item);

  return (
    <>
    <Card>
      <Row justify="space-around" align="middle">
        <Col>
          <Avatar 
          shape="square"
          size={{
            xs: 80,
            sm: 80,
            md: 80,
            lg: 80,
            xl: 80,
            xxl: 100,
          }}
          src={item.src}
          />

          
        </Col>
        <Col>
        <Title level={3}>
          {item.title}
        </Title>
       
       
        </Col>
      </Row>

    
    

    </Card>
    </>
  )
}

// <Progress
// percent={percent || 0}
// strokeWidth={22}
// status="active"
// />

// </div>
// <div style={{
// position: 'absolute',
// marginTop: '-55px',
// marginLeft: '90px',
// color: 'red',
// fontSize: '22px',
// }}
// >
// <span>{ text || '' }</span>