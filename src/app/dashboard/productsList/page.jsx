import getProducts from "@/utils/getProducts";
import ProductsTable from "./ProductsTable";

export const revalidate=0

const ProductsListPage =async () => {
    const products=await getProducts()
    return (
        <div className="w-9/12 mx-auto text-center">
            <h1 className="text-xl font-medium">All products</h1>
            <ProductsTable products={JSON.parse(JSON.stringify(products))}></ProductsTable>
        </div>
    );
};

export default ProductsListPage;