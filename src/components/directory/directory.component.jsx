// import CategoryItem from "../category-item/category-item.component";
import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles";
//import './directory.styles.scss';

const Directory =({categories})=>{   
    return(
        <DirectoryContainer>
            { categories.map((category)=>(
               // <CategoryItem key={category.id} category={category}/> 
               <DirectoryItem key={category.id} category={category}/>
            ))
            }      
        </DirectoryContainer>
    )
}
export default Directory;
/* const Directory =({categories})=>{   
    return(
        <div className='directory-container'>
            { categories.map((category)=>(
               // <CategoryItem key={category.id} category={category}/> 
               <DirectoryItem key={category.id} category={category}/>
            ))
            }      
        </div>
    )
}
export default Directory; */
