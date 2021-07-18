import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRealations';

function ProfileSidebar(propriedades) {
  return (
    <Box as="aside">
        <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
        <hr />
        
        <p>
          <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`} >
            @{propriedades.githubUser}
          </a>
        </p>
        <hr />

        <AlurakutProfileSidebarMenuDefault/>
       
    </Box>
  )
}
export default function Home() {
  const [comunidades, setComunidades] = React.useState([{
    id: '484518484154518148184',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'
  }]);
  // const comunidades = comunidades[0];
  // const alteradorDeComunidades = comunidades[1];

  console.log('Nosso teste',comunidades);
  //const comunidades = ['Alurakut'];
  const usuarioAleatorio = 'HQscolt';
  const pessoasFavoritas = [
    'Juunegreiros',
   'Omariosouto',
   'Peas',
   'Rafaballerini',
   'Marcobrunodev',
   'Felipefialho',
   'HQscolt'
  ]
  
  
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
      <div className="profileArea" style={{gridArea: 'profileArea' }}>
        <ProfileSidebar githubUser={usuarioAleatorio} />
      </div>
        <div className="welcomeArea" style={{gridArea: 'welcomeArea' }}>
          <Box>
          <h1 className="title">
              Bem vindo(a) 
            </h1>

            <OrkutNostalgicIconSet />
            </Box>

            <Box>
              <h2 className="subTitle"> 
                O que você deseja fazer?
              </h2>
              <form onSubmit={function handleCriaComunidade(e){
                  e.preventDefault();
                  const dadosDoform = new FormData(e.target);

                  console.log('Campo: ', dadosDoform.get('title'));
                  console.log('Campo: ', dadosDoform.get('image'));
                  
                  const comunidade = {
                    id: new Date().toISOString(),
                    title: dadosDoform.get('title'),
                    image: dadosDoform.get('image'),
                  }
                  const comunidadesAtualizadas = [...comunidades, comunidade];
                  setComunidades(comunidadesAtualizadas);
              }}>
                <div>
                    
                      <input 
                        placeholder="Qual vai ser o nome da sua comunidade?" 
                        name="title" 
                        aria-labe="Qual vai ser o nome da sua comunidade?"
                        type="text" 
                        />
                     
              </div>

              <div>
                  <input 
                    placeholder="Coloque uma URL para usarmos de capa" 
                    name="image" 
                    aria-labe="Coloque uma URL para usarmos de capa" 
                    />
              </div>
              
              <button>
                Criar comunidade
              </button>

              </form>
            </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
          
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
            {<ul>
              {comunidades.slice(0, 6).map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}>
                       <img src={itemAtual.image} /> 
                      <span>{itemAtual.title}
                      
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>}
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
            {pessoasFavoritas.slice(0, 6).map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}                    
                      </span>
                    </a>
                  </li>
                )
              })};
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
