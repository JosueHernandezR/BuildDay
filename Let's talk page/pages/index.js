import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import Footer from '../components/footer';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />

      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'></link>

      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css'></link>
    </Head>

    <Nav />
    <div className='container'>
      <div className="hero center">
        <h1 className='title'>Let's talk!</h1>
        <p className='description'>
          Una aplicacion para mejorar tus habilidades en diferentes idiomas
        </p>
      </div>
    </div>
    <div className='row'>
      <div className='col s6 light-blue lighten-4'>
        <div className='solo-title'>¿Qué es?</div>
        <p>•Es una aplicación para dispositivos móviles que permite que los usuarios que estén aprendiendo un idioma o se encuentren en otro país donde no hablan se habla su lengua, puedan entablar conversaciones en dicho idioma.</p>
        <p>•Los usuarios con más dominio del idioma puede registrarse en la sección de mentores, donde podrán guiar a personas que están aprendiendo el idioma en su pronunciación y su habilidad para entablar conversaciones.</p>
      </div>
      <div className='col s6'>Introducir la imagen aqui78</div>
      <div className='col s6 light-blue lighten-4'>
        <div className='solo-title'>¿Por qué?</div>
        <p>•Porque la mayoría de las personas al momento de aprender un idioma realmente no tienen la oportunidad de practicar su speaking. Y esa es la razón por la cual mucha gente no siente la confianza de comunicarse con personas de otros lugares..</p>
        <p>•La idea principal es que personas que dominen un idioma, y tengan la intención de ayudar a otras personas a mejorar lo puedan hacer .
        </p>
      </div>
      <div className='col s6'>
        <img src="images/crear-app-movil.jpg">        </img>
      </div>
      <div className='col s6 light-blue lighten-4'>
        <div className='solo-title'>¿Cómo?</div>
        <p>•El usuario ya registrado , podrá seleccionar que idioma está aprendiendo , y se le aplicará un examen para determinar su nivel.
        </p><p>•Una vez determinado su nivel , podrá acceder a buscar una plática casual.
        </p>
      </div>
      <div className='col s6'>Introducir la imagen aqui1</div>
      <div className='col s6'>Introducir imagen aqui2</div>
      <div className='col s6 light-blue lighten-4'>
        <div className='solo-title'>Público Objetivo</div>
        <p>Personas mayores a 18 años que estén aprendiendo otro idioma.</p>
      </div>
      <div className='col s6'>Introducir la imagen aqui3</div>
      <div className='col s6'>Introducir imagen aqui4</div>
      <div className='col s6 light-blue lighten-4'>
        <div className='solo-title'>Modelo de Negocio</div>
        <p>Personas que ya dominan un idioma se podrán registrar como mentores .
Dichos mentores serán calificados por las personas después de haber tenido una plática casual. En dicha calificación será dictada sobre si fueron respetuosos , si los ayudaron a mejorar , si fue una plática interesante, sobre si sabe enseñar, sobre si domina el idioma .
Las mentores con calificaciones altas podrán decidir si están disponibles para recibir ofertas de trabajo como traductores.
Empresas que tenga relaciones internacionales y busquen traductores , podrán contactar con nosotros en su búsqueda de personas que dominen idiomas.
</p>
      </div>
      
    </div>
    <Footer />
    <style jsx>{`
        .description {
          font-size: 30px;
          font-style: italic;
          font-weight: 300;
        }
        body {
          display: flex;
          min-height: 100vh;
          flex-direction: column;
        }

        main {
          flex: 1 0 auto;
        }
        .col p{
          padding-left: 10px;
          padding-right: 10px;
          font-size: 18px;
        }
        .solo-title{
          margin-top:5px;
          font-size: 25px;
        }
      `}</style>
  </div>

)

export default Home
