type CentreName = {
    type: string
    id: number
    name: string
}

const centreName = (state = [], action: CentreName) => {
    switch (action.type) {
      case 'ADD_CENTRENAME':
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
          }
        ]
      default:
        return state
    }
}
  
export default centreName
  