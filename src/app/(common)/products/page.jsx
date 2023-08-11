import ProductCard from "@/app/components/cards/ProductCard";
import getProducts from "@/utils/getProducts";

export const revalidate=0

const ProductsPage = async() => {
 const products=await getProducts()
    return (
        <div>
            <h1 className='text-2xl font-semibold text-center mt-4 mb-8 text-[#06AAAA] uppercase'>Our Products</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-10/12 mx-auto mb-8">
                {
                    products?.map(product=>
                        <ProductCard key={product._id} product={JSON.parse(JSON.stringify(product))}></ProductCard>
                        )
                }
            </div>
        </div>
    );
};

export default ProductsPage;