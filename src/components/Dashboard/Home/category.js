import { useEffect } from 'react';
import axios from 'axios';

const CategoryButton = ({ setUserData, Data }) => {
  useEffect(() => {
   axios.get('http://api.allureinternational.com.np/api/get-all-active-category')
   .then((res)=>{
    let categoryName = res.data.data;
    console.log(res.data.data[0].category_name,"res from home")
   })
  }, [])
  const showCategoryCard = (item) => {
    const updatedId = Data.filter((element) => {
      return element.category === item;
    });
    setUserData(updatedId);
  };
  return (
    <div className="category-btns">
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
