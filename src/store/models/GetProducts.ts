import { Model, fk, many } from "redux-orm"

class Product extends Model {}
Product.modelName = "Product"
//@ts-ignore
Product.fields = { id: attr(), name: attr(), price: attr() }

const productsReducer = (state: any, action: { type?: any; payload?: any }) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      const { payload } = action
      payload.forEach((product: any) => Product.upsert(product))
      return
    default:
      return state
  }
}
