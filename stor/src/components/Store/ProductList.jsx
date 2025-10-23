import { useEffect, useState } from "react";
import Products from "./Products";

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [inputCategories, setInputCategories] = useState('');


  function displayCategories() {
    
    return categories.map((categorie) => {
      return <>
        <input type="button" className={`btn mx-2`} id="categrBtn" onClick={ () => { setInputCategories(categorie); } } value={categorie} key={categorie} />
      </>

    })
  }

  function displayProducts() {
    const productsTemp = productList.filter((prod) => {

      const matchSearch = prod.title.toLowerCase().includes(inputSearch.toLowerCase()) ||
        prod.description.toLowerCase().includes(inputSearch.toLowerCase());

      const matchCategories = inputCategories === '' || prod.category.toLowerCase() === inputCategories.toLowerCase()

      return matchCategories && matchSearch

    });

    if (productsTemp.length > 0) {
      return productsTemp.map((products) => {
        return <Products products={products} key={products.id} />;
      });
    }
  }


  function getProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => setProductList(response));
  }

  function getCategories() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((response) => setCategories(response));
  }

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const handeleSearch = (e) => {
    e.preventDefault();
    setInputSearch(e.target.value);
  }

  // const handeleCategories = (e) => {
  //   e.preventDefault();
  //   setInputCategories(e.target.value);
  //   console.log(inputCategories)
  // }

  const handeleReset = () => {
    document.getElementById("search").value = "";
  }

  return (
    <div className="container mx-auto w-75 my-3">
      <h2>Search :</h2>
      <form>
        <div className="mb-3 row g-3 align-items-center">
          <div className="col-auto">
            <label className="form-label">Search</label>
          </div>
          <div className="col-auto">
            <input type="text" id="search" placeholder="Search..." className="form-control" onChange={handeleSearch} />
          </div>
          <div className="col-auto">
            <input type="button" value="Reset" className="btn btn-primary" onClick={handeleReset} />
          </div>
        </div>
        <hr />
        <h2>Categories :</h2>
        <div className="mb-3 g-3 align-items-center">
          <input type="button" value="Tous" className={`btn mx-2 `} onClick={() => setInputCategories('')} />
          {displayCategories()}
        </div>
      </form>
      <h1 className="container text-center">Products :</h1>
      <table border={2} className="table">
        <thead>
          <tr>
            <th className="container text-center">Title</th>
            <th className="container text-center">Price</th>
            <th className="container text-center">Description</th>
            <th className="container text-center">Category</th>
            <th className="container text-center">Image</th>
            <th className="container text-center">Rating</th>
          </tr>
        </thead>
        <tbody>{displayProducts()}</tbody>
      </table>
    </div>
  );
}

export default ProductList;



// import { useEffect, useState } from "react";
// import Products from "./Products";

// function ProductList() {
//   const [productList, setProductList] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [inputSearch, setInputSearch] = useState('');
//   const [inputCategories, setInputCategories] = useState('');

//   // 🟢 Afficher les boutons de catégories
//   function displayCategories() {
//     return (
//       <>
//         {/* bouton pour tout afficher */}
//         <input
//           type="button"
//           value="Tous"
//           className={`btn mx-2 `}
//           onClick={() => setInputCategories('')}
//         />

//         {/* boutons de catégories */}
//         {categories.map((categorie) => (
//           <input
//             key={categorie}
//             type="button"
//             className={`btn mx-2`}
//             onClick={() => setInputCategories(categorie)}
//             value={categorie}
//           />
//         ))}
//       </>
//     );
//   }

//   // 🟢 Filtrage des produits
//   function displayProducts() {
//     const productsTemp = productList.filter((prod) => {
//       const matchesSearch =
//         prod.title.toLowerCase().includes(inputSearch.toLowerCase()) ||
//         prod.description.toLowerCase().includes(inputSearch.toLowerCase());

//       const matchesCategory =
//         inputCategories === '' || // toutes catégories
//         prod.category.toLowerCase() === inputCategories.toLowerCase();

//       return matchesSearch && matchesCategory;
//     });

//     if (productsTemp.length > 0) {
//       return productsTemp.map((product) => (
//         <Products products={product} key={product.id} />
//       ));
//     } else {
//       return (
//         <tr>
//           <td colSpan="6" className="text-center">
//             Aucun produit trouvé 😢
//           </td>
//         </tr>
//       );
//     }
//   }

//   // 🟢 Charger les produits et catégories
//   function getProducts() {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => response.json())
//       .then((response) => setProductList(response));
//   }

//   function getCategories() {
//     fetch("https://fakestoreapi.com/products/categories")
//       .then((response) => response.json())
//       .then((response) => setCategories(response));
//   }

//   useEffect(() => {
//     getProducts();
//     getCategories();
//   }, []);

//   const handeleSearch = (e) => {
//     setInputSearch(e.target.value);
//   };

//   const handeleReset = () => {
//     document.getElementById("search").value = "";
//     setInputSearch('');
//     setInputCategories('');
//   };

//   return (
//     <div className="container mx-auto w-75 my-3">
//       <h2>Search :</h2>
//       <form>
//         <div className="mb-3 row g-3 align-items-center">
//           <div className="col-auto">
//             <label className="form-label">Search</label>
//           </div>
//           <div className="col-auto">
//             <input
//               type="text"
//               id="search"
//               placeholder="Search..."
//               className="form-control"
//               onChange={handeleSearch}
//             />
//           </div>
//           <div className="col-auto">
//             <input
//               type="button"
//               value="Reset"
//               className="btn btn-primary"
//               onClick={handeleReset}
//             />
//           </div>
//         </div>

//         <hr />
//         <h2>Categories :</h2>
//         <div className="mb-3 g-3 align-items-center">{displayCategories()}</div>
//       </form>

//       <h1 className="container text-center">Products :</h1>
//       <table border={2} className="table">
//         <thead>
//           <tr>
//             <th className="text-center">Title</th>
//             <th className="text-center">Price</th>
//             <th className="text-center">Description</th>
//             <th className="text-center">Category</th>
//             <th className="text-center">Image</th>
//             <th className="text-center">Rating</th>
//           </tr>
//         </thead>
//         <tbody>{displayProducts()}</tbody>
//       </table>
//     </div>
//   );
// }

// export default ProductList;
