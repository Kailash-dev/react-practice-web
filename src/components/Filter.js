import React,{ useState }  from "react";

export default function Filter() {
    const fruitDataArr = [
        "Banana",
        "Apple",
        "Orange",
        "Mango",
        "Pineapple",
        "Watermelon",
      ];
    const [filterList, setFilterList] = useState(fruitDataArr);
 
  const FilterData = (event) => {
    console.log(event.target.value);
    const filteredDataArr = fruitDataArr.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredDataArr)
    console.log(filteredDataArr);
  };
  return (
    <>
      <div>Filter</div>
      <input type="text" onChange={FilterData}></input>
      {filterList}
    </>
  );
}
