import ProductCard from '../components/ProductCard'

const products = [
  { icon: '◌', name: 'Camiseta Básica Urban', description: 'Algodón 100% orgánico', price: 29 },
  { icon: '◍', name: 'Jeans Slim Fit', description: 'Denim premium stretch', price: 89 },
  { icon: '⋮⋮', name: 'Sudadera Oversize', description: 'Algodón French Terry', price: 65 },
  { icon: '⌷', name: 'Chaqueta Bomber', description: 'Nylon resistente al agua', price: 120 },
  { icon: '◯', name: 'Gorra Snapback', description: 'Bordado premium', price: 35 },
  { icon: '◔', name: 'Zapatillas Urban', description: 'Suela de goma antideslizante', price: 95 },
]

function Products() {
  return (
    <section className="products">
      <div className="page-width products-inner">
        <h2>NUESTRA COLECCIÓN</h2>
        <p>Estilo urbano para cada ocasión</p>
        <div className="grid">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              icon={product.icon}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products