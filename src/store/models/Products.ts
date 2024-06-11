// import { createAction } from "@reduxjs/toolkit"
// import Model, { attr, fk } from "redux-orm"

// export const fetchProducts = createAction("Fetch products")
// export const fetchProductsSuccess = createAction("Fetch products success")
// export const fetchProductsError = createAction("Fetch products error")

// export class Product extends Model {
//   static modelName = "Product"

//   static get fields() {
//     return {
//       id: attr(),
//       name: attr(),
//       price: attr(),
//     }
//   }
//   //@ts-ignore
//   static reducer({ type, payload }, Product) {
//     switch (type) {
//       case fetchProducts.type: {
//         //@ts-ignore
//         payload.forEach((product) => Product.upsert(product))
//         break
//       }
//       default:
//         break
//     }
//   }
// }

import { createAction } from "@reduxjs/toolkit"
import Model, { attr, fk } from "redux-orm"

export const fetchProducts = createAction("Fetch products")
export const fetchProductsSuccess = createAction("Fetch products success")
export const fetchProductsError = createAction("Fetch products error")

export class Product extends Model {}
Product.modelName = "Product"
Product.fields = {
  id: attr(),
  name: attr(),
  price: attr(),
}

//@ts-ignore
const productsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      const { payload } = action
      //@ts-ignore
      payload.forEach((product) => Product.upsert(product))
      return
    default:
      return state
  }
}


