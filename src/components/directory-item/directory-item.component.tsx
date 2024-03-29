// import './category-item.styles.scss';
//import './directory-item.styles.scss';
import { FC} from 'react';
import { useNavigate } from "react-router-dom";
import { BackgroundImage,Body,DirectoryItemContainer } from "./directory-item.styles";
import { DirectoryCategory } from "../directory/directory.component";

type DirectoryItemProps = {
    category : DirectoryCategory;
}

//const CategoryItem =({category}) =>{
const DirectoryItem : FC <DirectoryItemProps > =({category}) =>{
    const {title,imageUrl,route} = category;
    const navigate = useNavigate();
    const onNavigateHandler =() =>navigate(route);
    return(
        <DirectoryItemContainer onClick={onNavigateHandler}>   
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