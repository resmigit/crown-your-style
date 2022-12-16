//import {Link} from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import { CategoryPreviewContainer,Title,Preview } from './category-preview.styles';
//import './category-preview.scss';

const CategoryPreview =({title,products}) =>{
    return(
            <CategoryPreviewContainer>
                <h2>               
                    <Title to={title}>{title.toUpperCase()}</Title>  
                </h2>
                <Preview> 
                    {
                        products.filter((_,idx)=> idx < 4)
                        .map((product)=> (
                                <ProductCard key={product.id} product={product}></ProductCard>
                            ))
                    }
                </Preview>
            </CategoryPreviewContainer>
        );
}
export default CategoryPreview;
/* const CategoryPreview =({title,products}) =>{
    return(
            <div className='category-preview-container'>
                <h2>               
                    <Link className='title' to={title}>{title.toUpperCase()}</Link>  
                </h2>
                <div className='preview'> 
                    {
                        products.filter((_,idx)=> idx < 4)
                        .map((product)=> (
                                <ProductCard key={product.id} product={product}></ProductCard>
                            ))
                    }
                </div>
            </div>
        );
}
export default CategoryPreview; */