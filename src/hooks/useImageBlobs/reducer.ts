import { ImageBlob } from '@/types/utils'
import * as ActionType from './actionType'
import * as actions from './actions'

type State = {
  imageBlobs: ImageBlob[]
}

type Action =
  | ReturnType<typeof actions.initialize>
  | ReturnType<typeof actions.push>

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.INITIALIZE:
      return {
        ...state,
        imageBlobs: [],
      }
    case ActionType.PUSH:
      return {
        ...state,
        imageBlobs: state.imageBlobs.concat([action.payload.imageBlob]),
      }
    default:
      throw new Error('dispatch invalid action')
  }
}

export default reducer
