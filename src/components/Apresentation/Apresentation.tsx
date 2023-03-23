import './Apresentation.scss'
import FotoIcone from '../../img/foto_perfil.png'
import { TypingWritter } from '../TypingWriter/TypingWritter'

export function Apresentation() {

    return(
        <section className="apresentation">
            <div>
                <img src={FotoIcone} />
                <TypingWritter text={'olá mundo'}/>
            </div>
        </section>
    )
}
{/* <h3><span className='cursorBlink'>|</span></h3> */}