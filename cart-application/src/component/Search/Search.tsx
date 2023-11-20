import React from 'react';
import {  useState, ChangeEvent } from "react";
import { useTypedSelector } from '../../ReduxTypeScript/hooks/useTypedSelector';
import { Link,useNavigate, useParams} from 'react-router-dom';
import { productCategory } from "../../ReduxTypeScript/store/data/data"; 
import "./search.css"


const Search = () => {
    const navigate = useNavigate()
    const category = Object.assign([],Object.values(productCategory)).flat(Infinity)
    const {userid} =useParams()
    const { products } = useTypedSelector(state => state.products)
    const [value, setValue] = useState<string>("");

    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value);
    };
  
    const onSearch = (searchTerm:any) => {
      setValue(searchTerm);
    };


    return (
      
        <div className="searchbar ">
          <div className="search-inner ">
            <input placeholder='Search...' className="search " type="text" value={value} onChange={onChange} />
          </div>
          <div className="dropdown">
            {category.filter((item) => {
                const searchTerm = value.toLowerCase();
                const fullName = item.type.toLowerCase();
  
                return (
                  searchTerm &&
                  fullName.startsWith(searchTerm) 
                 &&  fullName !== searchTerm   

                );
              })
              .slice(0, 1)
              .map((item) => (
               <div
                  onClick={() => onSearch(item.type)}
                  className="dropdown-row"
                  key={item.id}
                >
                  <div onClick={()=>navigate(item.navigate+"/"+item.type+"/"+userid)} className='searchitem'>
                 <p className='searchingParagraph'>{item.type}</p> 
                 </div>
                </div> 
              ))} 
          </div>
        </div>
      
    );

};

export default Search;