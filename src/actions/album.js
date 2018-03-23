import {data} from '../data'
import axios from 'axios'

export const albumAction = {

	getPhoto: () => {
		return {
			type: 'FETCH_PHOTO',
			payload: data
		}
	},
	searchPhoto: (tag) => {
		return {
			type: 'SEARCH_PHOTO',
			payload: tag
		}
	},
	addPhoto: (data) => {
		return {
			type: 'ADD_PHOTO',
			payload: data
		}
	},


}

