function ProductCard({ name, price }) {
  return (
    <div className="product-card">
      <div className="img-placeholder"></div>
      <h3>{name}</h3>
      <p>€{price}</p>
      <button>AÑADIR</button>
    </div>
  )
}

export default ProductCard