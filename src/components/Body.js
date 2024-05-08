import { useState, useEffect } from "react";
import mockData from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  const [resList, setList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRes, setFilterRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=19.2183307&lng=72.9780897"
    );

    const json = await data.json();
    // console.log(json);
    setList(
      json.data.success.cards[4].gridWidget.gridElements.infoWithStyle
        .restaurants
    );
  };
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              // console.log(searchText)
              const filterList = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setList(filterList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("button clicked")
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilterRes(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resList.map((i) => (
          <RestaurantCard key={resList.id} resData={i} />
        ))}
      </div>
    </div>
  );
};
export default Body;
