import { NextResponse } from "next/server";
import { data } from "../dummyData";
import { productService } from "@/app/services/productService/productService";



export async function POST(req,res){
  const data  =await req.json()
  const key = data?.key
  const _formData =  data?.formData
  const components = data?.components
    const productComponent = productService.getProductComponent(key, _formData)

    components?.map(field => {
            if (productComponent[field?.name]) {
                field.data = [];
                field.data = productComponent[field?.name]?.values;
            }
        });
        console.log(components,'comp');

  return NextResponse.json(components)
}
