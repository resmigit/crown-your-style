//import SHOP_DATA from '../../shop-data.json'
import { useContext,Fragment} from "react";
// import { ProductsContext } from "../../contexts/products.context";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from '../../components/category-preview/category-preview';
//import ProductCard from "../../components/product-card/product-card.component";
//import './shop.styles.scss';

const CategoriesPreview =()=>{
    //const {products} = useContext(ProductsContext);
    const {categoriesMap} = useContext(CategoriesContext);
    return(
        <Fragment>
        {            
           Object.keys(categoriesMap).map((title)=>{
                const products = categoriesMap[title];                
                return(
                    <CategoryPreview key={title} products={products} title={title}></CategoryPreview>
                );
           }) 
        }
        </Fragment>     
    );
}
export default CategoriesPreview;