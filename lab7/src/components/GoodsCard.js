function GoodsCard({ name, price, img }) {
  return (
    <div className="card">
      <img src={img} alt={name} width="200" height="150" />
      <h4>{name}</h4>
      <p>Ціна: {price} грн</p>
    </div>
  );
}

export default GoodsCard;
