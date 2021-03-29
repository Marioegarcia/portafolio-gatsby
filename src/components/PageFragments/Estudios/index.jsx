import React from 'react'
import { Timeline ,Typography} from 'antd';



const { Title } = Typography;


export default () =>{
    return (
    <>
    <span>Cursos</span>
    <br/>

    <br/>

    
    <Timeline>
        <Timeline.Item >
        
            Node: De cero a experto (Edición 2020) 
            <br/>
            Udemy - Fernando Herrera
        </Timeline.Item>
        <Timeline.Item>
        Web Personal MERN Full Stack: MongoDB, Express, React y Node
            <br/>
            Udemy - Agustin Navarro Galdon     
        </Timeline.Item>
        <Timeline.Item>
        Curso de MongoDB            
        <br/>
            Udemy - Victor Robles     
        </Timeline.Item>
        <Timeline.Item>
        Curso de MongoDB y Node.js con Mongoose
           
        <br/>
            Codigo facilito - Uriel Hernandez     
        </Timeline.Item>
       
    </Timeline>


    <span>Estudios</span>
    <br/>

    <br/>

    
    <Timeline>
        <Timeline.Item >
            Bachillerato Tecnico en Informatica
            <br/>
            CETIS #40 - Cunducán, Tabasco
        </Timeline.Item>
        <Timeline.Item>
            Secundaria Lic. Manuel Sanchez Marmol - Cunducán, Tabasco 
                
        </Timeline.Item>
       
    </Timeline>

  
    </>
    )
}
