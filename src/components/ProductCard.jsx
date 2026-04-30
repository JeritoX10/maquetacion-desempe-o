function ProductCard({ icon, name, description, price }) {
  return (
    <div className="product-card">
      <div className="img-placeholder">{icon}</div>
      <div className="product-details">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="product-bottom">
        <strong>€{price}</strong>
        <button type="button">AÑADIR</button>
      </div>
    </div>
  )
}

export default ProductCard