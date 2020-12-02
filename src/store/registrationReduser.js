export const ADDUSER = "ADDUSER";
export const GETACCES = "GETACCES";
export const ISFETCHING = "ISFETCHING";
export const GOOUT = "GOOUT";

const initialState = {
  verifity: false,
  yourAcces: {},
};

export function registrationReduser(state = initialState, action) {
  switch (action.type) {
    case ADDUSER:
      {
        let copyStateFor = { ...state };
        copyStateFor.yourAcces = action.data;
        copyStateFor.verifity = true;

        return copyStateFor;
      }

      break;
    case GETACCES:
      {
        let copyStateFor = { ...state };
        copyStateFor.yourAcces = action.data;
        copyStateFor.verifity = true;
        return copyStateFor;
      }
      break;
    case GOOUT:
      {
        let copyStateFor = { ...state };
        copyStateFor.verifity = false;
        copyStateFor.yourAcces = {};
        return copyStateFor;
      }
      break;

    default:
      return state;
      break;
  }
}
