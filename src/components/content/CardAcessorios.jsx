export default function CardAcessorios({img, item, valor }) {
  return (
    <div className="card">
      <div className="card-acessorios">
        <img src={img} alt="" />
        <p>{item}</p>
        <span>{valor}</span>
      </div>
    </div>
  );
}