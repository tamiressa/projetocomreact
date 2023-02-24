import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import React, {useState} from "react";

const Formulario = (props) => {


    const [nick, setNick] = useState ('')
    const [cidade, setCidade] = useState ('')
    const [imagem, setImagem] = useState ('')
    const [times, setTimes] = useState ('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrador({
           nick: nick,
           cidade: cidade,
           imagem: imagem,
           times: times
        })

    }

    return (
        <section className="formulario">
            <form onSubmit= {aoSalvar}>
                <h2>Preencha os dados para criar seu registro de torcedor</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nick"
                    placeholder="Digite o seu nick" 
                    valor = {nick}
                    aoAlterado= {valor => setNick(valor)}
                    />
                <CampoTexto 
                    obrigatorio={true}
                    label="Cidade"  
                    placeholder="Digite sua cidade"
                    valor = {cidade}
                    aoAlterado= {valor => setCidade(valor)} 
                    />
                <CampoTexto 
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor = {imagem}
                    aoAlterado= {valor => setImagem(valor)}
                    />
                <ListaSuspensa  
                        obrigatorio={true}
                        label="Time"
                        itens = {props.times}
                        valor={times}
                        aoAlterado={valor => setTime(valor)}
                        />
                        
                <Botao>
                    Registre-se
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
