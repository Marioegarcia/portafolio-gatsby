import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import Empleos from '../../components/PageFragments/Empleos';
import Estudios from '../../components/PageFragments/Estudios';
import SEO from '../../components/Seo';


const Experiencia = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Experiencia"
        description="Hola aqui veran toda mi experiencia laboral y mi historia educativa."
        path="/experiencia"
        keywords={['Mario', 'Ezequiel', 'Garcia','Huerta', 'empleos', 'Laboral', 'escuela', 'estudios']}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Experiencia</h1>
        </div>
        <Row>
          <Col sm={24} md={24} lg={24}>
            <Estudios/>
          </Col>
          
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default Experiencia;
