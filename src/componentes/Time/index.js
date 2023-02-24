import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (
        
        <section className='time' style={{backgroundColor : props.corSecundaria}}>
            <h3 style={{borderColor : props.corPrimaria}}>{props.nome}</h3>
            <div className = 'colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nick} nick={colaborador.nick} cidade={colaborador.cidade} imagem={colaborador.imagem}/>)}  

            </div>
            
        </section>
    )
}


export default Time