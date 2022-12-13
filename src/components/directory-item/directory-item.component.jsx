// import './category-item.styles.scss';
import './directory-item.styles.scss';

//const CategoryItem =({category}) =>{
const DirectoryItem =({category}) =>{
    const {title,imageUrl} = category;
    return(
        <div  className='directory-item-container'>   
            <div className='background-image' style={
            {backgroundImage:`url(${imageUrl})`}
            }>
            </div>          
            <div className='body'>
            <h1>{title}</h1>
            <p>Shop Now</p>
            </div>
      </div>  
    );

}
// export default CategoryItem;
export default DirectoryItem;