export default function CardLoja({img, item, descricao, valor }) {
  // Adiciona a classe 'gradiente' se 'descricao' for igual a "Apple Intelligence"
  const cardClass = descricao === "Apple Intelligence." ? "gradiente" : "";

  return (
    <div className="card" style={{ backgroundImage: `url(${img})` }}>
      <div className="card-loja">
        <h3>{item}</h3>
        <p className={cardClass}>{descricao}</p> 
        <span>{valor}</span>
      </div>
    </div>
  );
}