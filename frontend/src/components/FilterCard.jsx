import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
const filterDate = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Indore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Fronted Developer", "Backend Developer", "Fullstack Developer"],
  },
  {
    filterType: "Work mode",
    array: ["Part time", "Full Time", "Hybrid", "Work from home"],
  },
];

const FilterCard = () => {
 const [selectedValue, setSelectedValue] =useState('');
const dispatch =useDispatch();

 const changeHandler =(value)=>{
  setSelectedValue(value);
 }

useEffect(()=>{
  dispatch(setSearchedQuery(selectedValue));
},[selectedValue]);

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3"/>
      <RadioGroup  value={selectedValue}  onValueChange={changeHandler}  >
        {
          filterDate.map((data, index) => (
            <div>
              <h1 className="font-bold text-lg">{data.filterType}</h1>
              {
                data.array.map((item, idx) => {
                  const itemId=`id${index}-${idx}`

                  return (
                    <div className="flex items-center space-x-2 my-2">
                      <RadioGroupItem value = {item} id={itemId} />
                      <Label htmlFor={itemId}>{item}</Label>
                      </div>
                  )
                })
              }

            </div>
          ))
        }
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
