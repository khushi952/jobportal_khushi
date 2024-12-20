import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import { Button } from "./ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import useGetCompanyById from "@/hooks/useGetCompanyById";

const CompanySetup = () => {
  const params=useParams();
  useGetCompanyById(params.id);
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });
  const {singleCompany}= useSelector(store=>store.company);
const [loading, setLoading] = useState(false);

const naviagte= useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name",input.name);
    formData.append("description",input.description);
    formData.append("website",input.website);
    formData.append("location",input.location);
    if(input.file){
      formData.append("file",input.file);
    }
    try {
      setLoading(true);
      const res = await axios.put(`${COMPANY_API_END_POINT}/update/${params.id}`, formData, {
        headers:{
          'Content-Type':'multipart/form-data'
        },
        withCredentials:true
      });
      if(res.data.success){
        toast.success(res.data.message);
        naviagte("/companies");
      }


    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }finally{
      setLoading(false);
    }
  };

useEffect(()=>{
  setInput({
    name:singleCompany.name || "",
    description: singleCompany.description ||"",
    website: singleCompany.website ||"",
    location:singleCompany.location || "",
    file: singleCompany.file || null
  })
},[singleCompany]);

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto my-10">
        <form onSubmit={submitHandler}>
          <div className="flex items-center gap-5 p-8">
            <Button
              onClick={() => naviagte("/companies")}
              variant="outline"
              className="flex items-center gap-2 text-gray-500 font-semibold"
            >
              <ArrowLeft />
              <span>Back</span>
            </Button>
            <h1 className="font-bold text-xl">Company Setup</h1>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="company-name">Company Name</Label>
              <Input
                type="text"
                id="company-name"
                name="name"
                value={input.name}
                onChange={changeEventHandler}
                autoComplete="organization"
              />
            </div>

            <div>
              <Label htmlFor="company-description">Description</Label>
              <Input
                type="text"
                id="company-description"
                name="description"
                value={input.description}
                onChange={changeEventHandler}
                autoComplete="off"
              />
            </div>

            <div>
              <Label htmlFor="company-website">Website</Label>
              <Input
                type="text"
                id="company-website"
                name="website"
                value={input.website}
                onChange={changeEventHandler}
                autoComplete="url"
              />
            </div>

            <div>
              <Label htmlFor="company-location">Location</Label>
              <Input
                type="text"
                id="company-location"
                name="location"
                value={input.location}
                onChange={changeEventHandler}
                autoComplete="address-level1"
              />
            </div>

            <div>
              <Label htmlFor="company-logo">Logo</Label>
              <Input
                type="file"
                id="company-logo"
                accept="image/*"
                onChange={changeFileHandler}
              />
            </div>
          </div>
        
          {
 loading?<Button className="w-full my-4"> <Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button>:<Button type="submit" className="w-full my-4">Update</Button>
          }
        </form>
      </div>
    </div>
  );
};

export default CompanySetup;