import { useState } from "react";

import Card from './CardAcessorios';

export default function Acessorios() {
  // Estado para controlar a visibilidade da barra
  const [showMenu, setShowMenu] = useState(false);

  // Função que alterna o estado do menu
  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  // Estado para controlar o valor do campo de texto
  const [text, setText] = useState("Buscar acessórios");

  // Função que atualiza o valor do campo de texto
  function atualizaCampo(event) {
    setText(event.target.value);
  }

  // Função para limpar o texto "Buscar acessórios" ao clicar
  function limpaBusca() {
    if (text === "Buscar acessórios") {
      setText(""); // Limpa o campo
    }
  }

  // Função para restaurar o texto "Buscar acessórios" caso o campo fique vazio
  function restauraBusca() {
    if (text === "") {
      setText("Buscar acessórios");
    }
  }

  return (
    <>
      <main className="container">
        <nav>
          <h1 className="titulo">Acessórios</h1>
          <div>
            <button className="botao" onClick={toggleMenu}>
              {showMenu ? 'Fechar' : 'Ver Todos'}
            </button>
          </div>

          {/* Exibe ou esconde a lista de acessórios */}
          <div className={`accessories-list ${showMenu ? 'show' : ''}`}>
            <ul>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>TV e Casa</li>
            </ul>

            <ul>
              <li>Acessórios para casa inteligente</li>
              <li>Acessórios para recarga</li>
              <li>AirTag e acessórios</li>
              <li>Armazenamento</li>
              <li>Capas e proteção</li>
            </ul>

            <ul>
              <li>Escritório em casa</li>
              <li>Ferramentas criativas</li>
              <li>Fones de ouvido e caixas de som</li>
              <li>Fotografia</li>
              <li>Jogos</li>
            </ul>

            <ul>
              <li>MagSafe</li>
              <li>Mouses e teclados</li>
              <li>Novidades</li>
              <li>Pulseiras para Apple Watch</li>
              <li>Saúde e boa forma</li>
            </ul>
          </div>
        </nav>

        <div className="img-acessorios"> 
          <img src="magsafe.png" alt="Acessórios" />
        </div>


        <h2>Encontre os acessórios que você procura.</h2>

        {/* Caixa de texto com input controlado */}
        <div> 
          <input
            className="textarea"
            type="text"
            value={text} // O valor do input é controlado pelo estado
            onChange={atualizaCampo} // Atualiza o estado quando o valor mudar
            onFocus={limpaBusca} // Limpa o texto ao clicar no campo
            onBlur={restauraBusca} // Restaura o texto se o campo estiver vazio ao perder o foco
          />
        </div>

        {/* Exibindo o texto digitado logo abaixo */}
        {text !== "Buscar acessórios" && text && (
          <div>
            <h2>{text}</h2>
          </div>
        )}

        <section className="container p-4"> 
          <h1>Acessórios em destaque para iPhone</h1>
          
          <div className="container-card">
          <Card 
          img="caparosa.png" 
          item="Capa de silicone com MagSafe para iPhone 16 Plus – Rosa-peônia" 
          valor="R$ 39,90"                      
          /> 
          <Card 
          img="capatransparente.png" 
          item="Capa transparente com MagSafe para iPhone 16 Pro" 
          valor="R$ 39,90"                      
          /> 
          <Card 
          img="capaazul.png" 
          item="Capa de silicone para iPhone 16e – Azul‑inverno" 
          valor="R$ 39,90"                      
          /> 
          </div>

          <h1>Acessórios em destaque para iPad</h1>
          
          <div className="container-card">
          <Card 
          img="applepencil.png" 
          item="Apple Pencil (USB-C)" 
          valor="R$ 69,90"                      
          /> 
          <Card 
          img="magickey.png" 
          item="Magic Keyboard Folio para iPad (A16)" 
          valor="R$ 49,90"                      
          /> 
          <Card 
          img="smartfolio.png" 
          item="Smart Folio para iPad (A16) – Céu" 
          valor="R$ 39,90"                      
          /> 
          </div>

          <h1>Pulseiras para Apple Watch</h1>
          
          <div className="container-card">
          <Card 
          img="pulseirapreta.png" 
          item="Pulseira preta estilo milanês de titânio para caixa de 49 mm – M" 
          valor="R$ 34,90"                      
          /> 
          <Card 
          img="pulseiranike.png" 
          item="Pulseira loop esportiva Nike verde/cinza para caixa de 46 mm" 
          valor="R$ 34,90"                      
          /> 
          <Card 
          img="pulseiradourada.png" 
          item="Pulseira dourada de elos para caixa de 46 mm" 
          valor="R$ 34,90"                      
          /> 
          </div>

          <h1>Acessórios em destaque para Mac</h1>
          
          <div className="container-card">
          <Card 
          img="studiodisplay.png" 
          item="Studio Display" 
          valor="R$ 2.499,00"                      
          /> 
          <Card 
          img="magickeyboard.png" 
          item="Magic Keyboard com Touch ID e teclado numérico" 
          valor="R$ 329,90"                      
          /> 
          <Card 
          img="magicmouse.png" 
          item="Magic Mouse" 
          valor="R$ 129,90"                      
          /> 
          </div>

          <h1>Acessórios de áudio</h1>

          <div className="container-card">
          <Card 
          img="airpodspro2.png" 
          item="AirPods Pro 2" 
          valor="R$ 149,90"                      
          /> 
          <Card 
          img="airpods4.png" 
          item="AirPods 4 com Cancelamento Ativo de Ruído" 
          valor="R$ 179,90"                      
          /> 
          <Card 
          img="airpodsmax.png" 
          item="AirPods Max – Meia-noite" 
          valor="R$ 229,99"                      
          /> 
          </div>
        </section>
      </main>
    </>
  );
}