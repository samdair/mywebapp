
const initialState = {
  photo: [],
  album: [],
  filterAlbum: []
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PHOTO': {
      return {
        ...state,
        photo: action.payload.data
      }
    }
    case 'ADD_PHOTO': {
      return {
        ...state,
        album: [...state.album, action.payload]
      }
    }
    case 'SEARCH_PHOTO': {
      const result = state.photo.filter(item => item.tags.includes(action.payload))
      return {
        ...state,
        filterAlbum: result
      }
    }
    

    default: {
      return {
        ...state
      }
    }

  }
}

export default albumReducer;

    
