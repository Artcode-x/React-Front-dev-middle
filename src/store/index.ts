import { configureStore } from "@reduxjs/toolkit"
// import { errorReducer } from "./slices/error"
import { currentUserReducer } from "./slices/currentUser"
import { reducer as ormReducer } from "./orm"
import { createPost } from "./models/Post"
import { createUser } from "./models/User"

const store = configureStore({
  reducer: {
    orm: ormReducer,
    currentUser: currentUserReducer,
    // error: errorReducer,
  },
})

// add some initial fake data

// @ts-ignore
store.dispatch(createUser({ id: 1, name: "Frank" }))
// @ts-ignore
store.dispatch(createUser({ id: 2, name: "John" }))
// @ts-ignore
store.dispatch(createUser({ id: 3, name: "Anne" }))
// @ts-ignore
store.dispatch(createPost({ content: "A starter post by Frank", user: 1 }))
// @ts-ignore
store.dispatch(createPost({ content: "A second post by Frank", user: 1 }))
// @ts-ignore
store.dispatch(createPost({ content: "A starter post by John", user: 2 }))
// @ts-ignore
store.dispatch(createPost({ content: "A starter post by Anne", user: 3 }))

export default store
