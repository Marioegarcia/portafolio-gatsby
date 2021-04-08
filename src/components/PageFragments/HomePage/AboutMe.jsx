import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hola mi nombre es <b>Mario Ezequiel Garcia Huerta</b>.
   Soy un autodidacta en el desarrollo web, actualmente estoy especializandome en
   aprender el Stack MERN siendo mi fuerte la parte del backend con <b>Node JS con Express, 
   MongoDB con Mongoose</b>, y en menor medida el frontend en el cual me enfoco en 
   <b>React JS con Ant Design</b>.`,
  paraTwo: `Actualmente estoy en busca de mi primera oportunidad laboral con <b>programador jr</b>,
   pues toda mi experiencia es en proyectos personales y en cursos que tomo de manera autodicta, 
   por lo cual siempre estoy dispuesto a aprender alguna nueva tecnologia.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="Sobre mí"
          description={description}
          path=""
          keywords={['Mario', 'Ezequiel', 'Garcia','Huerta', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'MongoDB','Ant-desig']}
        />
        <h1 className="titleSeparate">Acerca de mi</h1>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraOne)} />
        
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Soy de"
            textH3="Cunduacan, Tabasco, México"
          />
        </Col>
    
        <Col xs={24} sm={24} md={12} lg={12}>
          <AboutTile
            img="meeting.png"
            alt="trabajo en equipo"
            textH4="Trabajo en equipo"
            textH3="para cumplir los objetivos"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <AboutTile
            img="cinema.png"
            alt="cinema"
            textH4="Mi pasatiempo"
            textH3="es llegar al cine"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Programador autodidacta"
            textH3="Me gusta leer la documentacion y tomar cursos online para aprender"
            height={60}
            width={60}
          />
        </Col>
        
      </Row>
    </>
  );
};
export default AboutMe;
