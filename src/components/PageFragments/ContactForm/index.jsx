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
        bordered
        column={{ xxl: 1, xl: 1, lg: 1, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="Correo"><a  href="mailto:marioptrova@gmail.com" ><FA name="far fa-envelope" />marioptrova@gmail.com</a></Descriptions.Item>
        <Descriptions.Item label="Numero Celular"><a href="tel:+529141272333"><FA name="fas fa-phone-square" />914-127-2333</a></Descriptions.Item>
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


// const [form] = Form.useForm();
// const onFinish = (data) => {
//   const formData = new FormData();
//   // eslint-disable-next-line no-restricted-syntax
//   for (const key in data) {
//     if (data[key]) {
//       formData.append(key, data[key]);
//     }
//   }

//   fetch(Config.contactFormUrl, { method: 'POST', body: formData })
//     .then(() => {
//       message.success('Thank you for your kind response 🙂. Will get back to you.');
//       form.resetFields();
//     })
//     // eslint-disable-next-line no-console
//     .catch((error) => console.error('Error:', error));
// };


{/* <Form form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
<Form.Item name={['name']} rules={[{ required: true }]}>
  <Input size="large" placeholder="Full Name *" />
</Form.Item>
<Form.Item name={['email']} rules={[{ type: 'email' }]}>
  <Input size="large" placeholder="Email" />
</Form.Item>
<Form.Item name={['description']} rules={[{ required: true }]}>
  <Input.TextArea size="large" rows={7} placeholder="Description *" />
</Form.Item>
<Form.Item>
  <Button type="primary" shape="round" size="large" htmlType="submit" style={{ background: '#304CFD' }}>
    SUBMIT
  </Button>
</Form.Item>
</Form> */}