import axios from 'axios';
const CategoryButton = ({ setUserData, Data, activeCategory }) => {
 
  const filterBlog=(id)=>{
    axios.get(`http://api.allureinternational.com.np/api/filter-blog/${id}`)
    .then((res)=>{
      console.log(res)
      axios.get('http://api.allureinternational.com.np/api/get-blog-details/3')
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div className="category-btns">
      {activeCategory.map((element,index)=>(
        <button className='btn-category'onClick={()=>{filterBlog(element.id)}}>
          {element.id}
          {element.category_name}
        </button>
      ))}
    </div>
  );
};

export default CategoryButton;
