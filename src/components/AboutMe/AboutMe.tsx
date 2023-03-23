import './AboutMe.scss'
import BusinessPicture from '../../img/businessPerson.jpg'

export function AboutMe() {
    return(
        <section className='aboutMe' id='aboutMe'>
            <div className='aboutMe-group'>
                <div className='aboutMe-group-box'>
                    <div className='aboutMe-group-box-picture'>
                        <img  className='aboutMe-group-box-picture-img' src={ BusinessPicture }/>
                    </div>
                    <div className='aboutMe-group-box-picture2'></div>
                </div>
            </div>
            <div className='aboutMe-content'>
                <h2>Sobre Mim</h2>
                <p>Me chamo Joffre Barbosa Quintas, natural de Recife/Pernambuco.</p> 
                <p>Tenho 30 anos e estou cursando Sitema de Informação - 3º Período.</p>
                <p>Estou em processo de migração de carreira, atuei durante 9 anos no seguimento de eventos e durante a pandemia atuei como gerente em uma empresa de comunicação visual.</p>
                <div className='aboutMe-content-boxInfo'>
                    <div>
                        <p>Nome completo:</p>
                        <p>Joffre Babosa Quintas</p>
                    </div> 
                    <div>
                        <p>Idade:</p><p>30 anos</p>
                    </div>
                    <div>
                        <p>Gradução:</p><p>Sistema de Informação - 3/8</p>
                    </div>
                    <div>
                        <p>Experiência no ramo:</p><p>Nenhuma - buscando estágio</p>
                    </div>
                    <div>
                        <p>Linkedin:</p>
                        <p><a className='link' href="https://www.linkedin.com/in/joffre-quintas-b9a769111/">https://www.linkedin.com/in/joffre-quintas-b9a769111/</a></p>
                    </div>
                    <div>
                        <p>Github:</p> 
                        <p><a className='link' href="https://github.com/Joffre-Quintas">https://github.com/Joffre-Quintas</a></p>
                    </div>
                </div>
                <a href="#"><button>Download CV</button></a>
            </div>
        </section>
    )
}