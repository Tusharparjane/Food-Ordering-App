import { useState, useEffect } from "react";
import zomatList from "../utils/mockData";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(zomatList);
  // useEffect(() => {
  //   fetchMenu();
  // }, []);
  // const fetchMenu = async () => {
  //   const data = await fetch("https://www.zomato.com/webroutes/auth/init");
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };
  console.log(zomatList);
  console.log(zomatList?.info?.name);
  const { name, costText, locality, cuisine } = resInfo[0].info;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{locality.address}</p>
      <ul>
        <li>{cuisine[0].name}</li>
        <li>{cuisine[1].name}</li>
        <li>{cuisine[2].name}</li>
        <li>{cuisine[3].name}</li>
      </ul>
      <h4>{costText.text}</h4>
    </div>
  );
};
export default RestaurentMenu;
