const CategoryButton = ({ setUserData, Data, activeCategory }) => {
 
  const showCategoryCard = (item) => {
    const updatedId = Data.filter((element) => {
      return element.category === item;
    });
    setUserData(updatedId);
  };
  return (
    <div className="category-btns">
      {activeCategory.map((element,index)=>(
        <button className='btn-category'>
          {element.category_name}
        </button>
      ))}
      <button
        className="btn-category"
        onClick={() => showCategoryCard("Travel")}
      >
        Travel
      </button>
      <button
        className="btn-category"
        onClick={() => showCategoryCard("Music")}
      >
        Music
      </button>
      <button className="btn-category" onClick={() => showCategoryCard("Food")}>
        Food
      </button>
      <button
        className="btn-category"
        onClick={() => showCategoryCard("Comedy")}
      >
        Comedy
      </button>
      <button
        className="btn-category"
        onClick={() => showCategoryCard("Lifestyle")}
      >
        Lifestyle
      </button>
      <button
        className="btn-category"
        onClick={() => showCategoryCard("Fiction")}
      >
        Fiction
      </button>
    </div>
  );
};

export default CategoryButton;
