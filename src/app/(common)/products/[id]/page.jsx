import getSingleProduct from "@/utils/getSingleProduct";
import Image from "next/image";

export const revalidate=0

const SingleProductDetails = async({params}) => {
   const id=params?.id 
   const product=await getSingleProduct(id)
   const{_id,item_name,category,price,description,image,imported_from,features,model_no,brand_name,warranty}=product
    return (
        <div>
            <h1 className="text-2xl font-medium text-center mt-4 mb-8 text-blue-800">{item_name}</h1>
            <div className="mx-6 lg:mx-12 mb-8 flex flex-col lg:flex-row gap-4 lg:gap-8">
                <Image src={image} alt="product" width={600} height={600} className="h-[400px]"></Image>
                <div className="space-y-2">
                    <h1 className="text-gray-600 font-medium text-xl">Category: {category}</h1>
                    <h2 className="text-gray-700 text-base">Brand: {brand_name}</h2>
                    <h3 className="text-gray-700 text-base">Mode no: {model_no}</h3>
                    <h4 className="text-gray-700 text-base">Imported From:{imported_from}</h4>
                    <h5 className="text-gray-700 text-base">Warranty: {warranty}</h5>
                    <h6 className="text-gray-700 text-base">Price: {price}</h6>
                    <h1 className="text-gray-600 font-medium mb-1">Features:</h1>
            <ul className="list-disc">
                {
                    features.map((feature,i)=>
                    <li key={i}>{feature}</li>
                    )
                }
            </ul>
                    
                </div>
            </div>
            <div className="mx-6 lg:mx-12 mb-8">
            <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleProductDetails;