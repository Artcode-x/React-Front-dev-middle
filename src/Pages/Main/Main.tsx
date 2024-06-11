import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { currentUserPostIDsSelector, postIDsSelector, postsSelector } from "../../store/models/PostSelectors"
import { createPost } from "../../store/models/Post"
import { createUser } from "../../store/models/User"

function Main() {
  // const test = useSelector(postsSelector)
  // console.log(test)
  // const currentUserPostIDs = useSelector(currentUserPostIDsSelector)
  // const allPostIDs = useSelector(postIDsSelector)
  // console.log(currentUserPostIDs)
  // console.log(allPostIDs)

  //  const users = useSelector((state) => state.orm.User.all().toModelArray())
  const dispatch = useDispatch()

  // Диспетч экшенов
  const handleSomeAction = () => {
    // dispatch(addItem({ type: "SOME_ACTION", payload: "test" }))
    // @ts-ignore
    // dispatch(createUser({ id: 1, name: "Frank" }))
    // @ts-ignore
    // dispatch(createPost({ content: "I am Fish", user: 1 }))

    //

    fetchProducts()
  }

  // const fetchProducts = async () => {
  //   // return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
  //   try {
  //     const response = await fetch("https://test2.sionic.ru/api/Products/")
  //     const data = await response.json()
  //     console.log(data)
  //     dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: data })
  //   } catch (error) {
  //     dispatch({
  //       type: "FETCH_PRODUCTS_ERROR",
  //       //@ts-ignore
  //       payload: error.message,
  //     })
  //     //   }
  //   }
  // }

  const fetchProducts = async () => {
    // return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      const response = await fetch("https://test2.sionic.ru/api/Products/")
      const data = await response.json()
      console.log(data)
      dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: data })
    } catch (error) {
      dispatch({
        type: "FETCH_PRODUCTS_ERROR",
        //@ts-ignore
        payload: error.message,
      })
      //   }
    }
  }

  return (
    <div>
      <button onClick={handleSomeAction}>dispatch action</button>
    </div>
  )
}

export default Main
