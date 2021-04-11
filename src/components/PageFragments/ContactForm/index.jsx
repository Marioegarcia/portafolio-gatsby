import React from 'react';
import { Descriptions,Col } from 'antd';
import FA from 'react-fontawesome';

import Config from '../../../../config';

// const validateMessages = {
//   required: 'This field is required!',
//   types: {
//     email: 'Not a valid email!',
//   },
// };
const {
  facebook, github, instagram,
} = Config.social;

export default () => {
 

  return (
    <Col sm={24} md={24} lg={12} className="widthFull">
      <Descriptions
        title="Datos de Contacto"
        layout="vertical"
        bordered
        column={{ xxl: 1, xl: 1, lg: 1, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="Correo"><a  href="mailto:marioptrova@gmail.com" ><FA name="far fa-envelope" />marioptrova@gmail.com</a></Descriptions.Item>
        <Descriptions.Item label="Numero Celular"><a href="tel:+529141272333"><FA name="fas fa-phone-square" />+52 914 127 2333</a></Descriptions.Item>
        <Descriptions.Item label="GitHub"> <a href={github} target="_blank" label="button" rel="noopener noreferrer"><FA name="github" />GitHub</a></Descriptions.Item>
        <Descriptions.Item label="Facebook"> 
        <a href={facebook} target="_blank" label="button" rel="noopener noreferrer"><FA name="facebook-f" />
        Facebook
        </a>
       </Descriptions.Item>
        <Descriptions.Item label="Instagram"><a href={instagram} target="_blank" label="button" rel="noopener noreferrer"><FA name="instagram" />
        Instagram
        </a></Descriptions.Item>
       

      </Descriptions>
     
    </Col>
  );
};

