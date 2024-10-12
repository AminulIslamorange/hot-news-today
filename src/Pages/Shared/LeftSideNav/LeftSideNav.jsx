import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";



const LeftSideNav = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className="bg-stone-400 text-center my-4 py-8">
            <h2 className="text-2xl font-extrabold">All Categories</h2>
           {
            categories.map(category=><p className=" ml-4 font-bold m-8 bg-slate-300 px-2" key={category.id}>
                <Link to={`/category/${category.id}`}>{category.name}</Link></p>)
           }
            
        </div>
    );
};

export default LeftSideNav;