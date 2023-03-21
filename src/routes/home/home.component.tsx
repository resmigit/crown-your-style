//import './categories.styles.scss';
//import CategoryItem from './components/category-item/category-item.component';
import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

const Home=()=> { 
  return (    
    <div>         
        <Directory></Directory>
        <Outlet></Outlet>
    </div>
  );
}
export default Home;

/*   return (    
    <div>         
        <Directory categories={categories}></Directory>
        <Outlet></Outlet>
    </div>
  );
}
export default Home;
 */