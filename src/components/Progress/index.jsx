import React from 'react';
import { List, Card,Avatar,Row,Col,Typography } from 'antd';
import JS from '../../images/js.png';
import ReactJS from '../../images/React.png';
import AntD from '../../images/antd.svg';
import Node from '../../images/Node.js.png';
import Python from '../../images/python.png';
import MongoDB from '../../images/mongo.png';
import Html from '../../images/html5.png';
import css from '../../images/css.png';
import sass from '../../images/sass.png';

const data = [
  {
    title: 'HTML',
    src: Html,
  },
  {
    title: 'Css',
    src: css,
  },
  {
    title: 'JavaScript',
    src: JS,
  },
  {
    title: 'SASS',
    src: sass,
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


const ProgressBar = () => {

  return (
    <div >
      <div>
      <List
        grid={{
          gutter: 8,
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
            md: 50,
            lg: 50,
            xl: 50,
            xxl: 50,
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

