const CategoryButton = ({  activeCategory,filterBlog }) => {

  return (
    <div className="category-btns">
      {activeCategory.map((element,index)=>(
        <button className='btn-category' onClick={()=>{filterBlog(element.id)}}>
          {element.category_name}
        </button>
      ))}
    </div>
  );
};

export default CategoryButton;
