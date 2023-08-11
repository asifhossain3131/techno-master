import { getSingleProductFromDb } from '@/services/products.service';
import 'server-only'

const getSingleProduct = (id) => {
    return getSingleProductFromDb(id)
};

export default getSingleProduct;