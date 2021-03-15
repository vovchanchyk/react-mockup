export const ADDUSER = 'ADDUSER'
export const GETACCES = 'GETACCES'
export const ISFETCHING = 'ISFETCHING'
export const GOOUT = 'GOOUT'

const initialState = {
  verifity: false,
  yourAcces: {}
}

export function registrationReduser (state = initialState, action) {
  switch (action.type) {
    case ADDUSER:
      {
        const copyStateFor = { ...state }
        copyStateFor.yourAcces = action.data
        copyStateFor.verifity = true

        return copyStateFor
      }

      break
    case GETACCES:
      {
        const copyStateFor = { ...state }
        copyStateFor.yourAcces = action.data
        copyStateFor.verifity = true
        return copyStateFor
      }
      break
    case GOOUT:
      {
        const copyStateFor = { ...state }
        copyStateFor.verifity = false
        copyStateFor.yourAcces = {}
        return copyStateFor
      }
      break

    default:
      return state
      break
  }
}
