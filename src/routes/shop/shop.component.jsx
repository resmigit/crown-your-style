//import SHOP_DATA from '../../shop-data.json'
import { useContext,Fragment} from "react";
// import { ProductsContext } from "../../contexts/products.context";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss';

const Shop =()=>{
    //const {products} = useContext(ProductsContext);
    const {categoriesMap} = useContext(CategoriesContext);
    return(
        <Fragment>
        {            
           Object.keys(categoriesMap).map((title)=>(
                <Fragment key ={title}>
                    <h2>{title}</h2>
                    <div className="products-container">
                    {categoriesMap[title].map((product) =>(
                        <ProductCard key={product.id} product={product}></ProductCard>
                    ))}
                    </div>
                </Fragment>
            )) 
        }
        </Fragment>
     
    );
}
export default Shop;