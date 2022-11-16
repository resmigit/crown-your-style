import './categories.styles.scss';

const App=()=> {
  const categories = [
    {
      id:1,
      title: 'Hats'
    },
    {
      id:2,
      title: 'Jackets'
    }, 
    {
      id:3,
      title: 'Sneakers'
    },
    {
      id:4,
      title: 'Women`s'
    }, 
    {
      id:5,
      title: 'Men`s'
    }
  ];
  return (    
    <div className='categories-container'>
    {
      categories.map(({id,title})=>(
          <div key ={id} className='category-container'>   
            <div className='background-image'></div>  
            {/* <img></img> */}
            <div className='category-body-container'>
              <h1>{title}</h1>
              <p>Shop Now</p>
            </div>
          </div>  
        )
      )
    }      
    </div>
  );
}

export default App;
