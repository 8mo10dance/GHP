import { ImageBlob } from '@/types/utils'
import * as ActionType from './actionType'
import * as actions from './actions'

type State = {
  imageBlobs: ImageBlob[]
  imageBlobsSelection: boolean[]
}

type Action =
  | ReturnType<typeof actions.initialize>
  | ReturnType<typeof actions.push>
  | ReturnType<typeof actions.toggleSelected>

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.INITIALIZE:
      return {
        ...state,
        imageBlobs: [],
        imageBlobsSelection: [],
      }
    case ActionType.PUSH:
      return {
        ...state,
        imageBlobs: state.imageBlobs.concat([action.payload.imageBlob]),
        imageBlobsSelection: state.imageBlobsSelection.concat([false]),
      }
    case ActionType.TOGGLE_SELECTED:
      return {
        ...state,
        imageBlobsSelection: state.imageBlobsSelection.map((b, i) =>
          i === action.payload.index ? !b : b,
        ),
      }
    default:
      throw new Error('dispatch invalid action')
  }
}

export default reducer
