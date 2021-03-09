import { useReducer } from 'react'
import { ImageBlob } from '@/types/utils'
import reducer from './reducer'
import * as actions from './actions'

const useImageBlobs = () => {
  const [state, dispatch] = useReducer(reducer, { imageBlobs: [] })

  return {
    ...state,
    initialize: () => {
      dispatch(actions.initialize())
    },
    push: (blob: ImageBlob) => {
      dispatch(actions.push(blob))
    },
  }
}

export default useImageBlobs
