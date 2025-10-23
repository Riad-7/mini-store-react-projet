import Rating from "./Rating";

function Products ({products}) {
    return (
      <tr>
        <td className="container text-center">{products.title}</td>
        <td className="container text-center">{products.price}</td>
        <td className="container text-center">{products.description}</td>
        <td className="container text-center">{products.category}</td>
        <td className="container text-center">
          <img width={250} src={products.image} alt={products.title} />
        </td>
        <td className="container text-center"><Rating rate={products.rating.rate} /></td>
      </tr>
    );
}

export default Products;