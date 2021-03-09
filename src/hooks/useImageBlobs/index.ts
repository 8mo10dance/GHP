import { useReducer } from 'react'
import { ImageBlob } from '@/types/utils'
import reducer from './reducer'
import * as actions from './actions'

const useImageBlobs = () => {
  const [state, dispatch] = useReducer(reducer, {
    imageBlobs: [],
    imageBlobsSelection: [],
  })

  return {
    ...state,
    initialize: () => {
      dispatch(actions.initialize())
    },
    push: (blob: ImageBlob) => {
      dispatch(actions.push(blob))
    },
    toggleSelected: (index: number) => {
      dispatch(actions.toggleSelected(index))
    },
  }
}

export default useImageBlobs
