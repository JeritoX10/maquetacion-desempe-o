import ProductCard from '../components/ProductCard'

function Products() {
  return (
    <section className="products">
      <h2>NUESTRA COLECCIÓN</h2>
      <div className="grid">
        <ProductCard name="Camiseta" price={29} />
        <ProductCard name="Jeans" price={89} />
        <ProductCard name="Sudadera" price={65} />
        <ProductCard name="Chaqueta" price={120} />
      </div>
    </section>
  )
}

export default Products