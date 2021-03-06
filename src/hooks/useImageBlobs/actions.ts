import { ImageBlob } from '@/types/utils'
import * as ActionType from './actionType'

export const initialize = () => ({
  type: ActionType.INITIALIZE as typeof ActionType.INITIALIZE,
})

export const push = (imageBlob: ImageBlob) => ({
  type: ActionType.PUSH as typeof ActionType.PUSH,
  payload: { imageBlob },
})

export const toggleSelected = (index: number) => ({
  type: ActionType.TOGGLE_SELECTED as typeof ActionType.TOGGLE_SELECTED,
  payload: { index },
})
