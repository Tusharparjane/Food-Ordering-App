import RestranuntCard from "./RestranuntCard";
import { useEffect, useState } from "react";
import zomatList from "../utils/mockData";

const Body = () => {
  //  local useState variable provided by react
  const [zlist, setZlist] = useState(zomatList);
  const [filterlist, setFilterlist] = useState(zomatList);

  const [searchtext, setSearchtext] = useState("");
  console.log("body");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("");
    const json = await data.json();
    console.log(json);
  };
  return (
    <div className="Body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchtext}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // search and filter the cards and update our ui
              const filterlist = zlist.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setFilterlist(filterlist);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const updated = zlist.filter(
              (res) => res.info.rating.aggregate_rating > 4
            );
            console.log(updated);
            setFilterlist(updated);
          }}
        >
          Top Rating Restaurents
        </button>
      </div>
      <div className="res-container">
        {filterlist.map((zlist) => (
          <RestranuntCard key={zlist.info.resId} resData={zlist} />
        ))}
        ;
      </div>
    </div>
  );
};

export default Body;
