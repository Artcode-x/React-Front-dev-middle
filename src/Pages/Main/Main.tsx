import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { currentUserPostIDsSelector, postIDsSelector } from "../../store/models/PostSelectors"
import { createPost } from "../../store/models/Post"

function Main() {
  const currentUserPostIDs = useSelector(currentUserPostIDsSelector)
  const allPostIDs = useSelector(postIDsSelector)
  console.log(currentUserPostIDs)
  console.log(allPostIDs)

  //  const users = useSelector((state) => state.orm.User.all().toModelArray())
  const dispatch = useDispatch()

  // Диспетч экшенов
  const handleSomeAction = () => {
    // dispatch(addItem({ type: "SOME_ACTION", payload: "test" }))
    dispatch(createPost())
  }

  return (
    <div>
      <button onClick={handleSomeAction}>dispatch action</button>
    </div>
  )
}

export default Main
