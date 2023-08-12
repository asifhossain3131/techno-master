import getOrders from "@/utils/getOrders";
import OrdersListTable from "./OrdersListTable";

export const revalidate=0

const OrdersList = async() => {
    const orders=await getOrders()
    return (
        <div className="w-10/12 mx-auto text-center">
            <h1 className="text-xl font-medium">Current Orders: {orders?.length}</h1>
            <OrdersListTable orders={JSON.parse(JSON.stringify(orders))}></OrdersListTable>
        </div>
    );
};

export default OrdersList;