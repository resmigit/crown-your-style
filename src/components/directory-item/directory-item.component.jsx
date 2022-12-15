// import './category-item.styles.scss';
//import './directory-item.styles.scss';
import { BackgroundImage,Body,DirectoryItemContainer } from "./directory-item.styles";

//const CategoryItem =({category}) =>{
const DirectoryItem =({category}) =>{
    const {title,imageUrl} = category;
    return(
        <DirectoryItemContainer>   
            <BackgroundImage
                 imageUrl={imageUrl}>
            </BackgroundImage>          
            <Body>
                <h2>{title}</h2>
                 <p>Shop Now</p>
            </Body>
      </DirectoryItemContainer>  
    );

}
// export default CategoryItem;
export default DirectoryItem;