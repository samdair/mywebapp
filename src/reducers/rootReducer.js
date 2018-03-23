import {combineReducers} from 'redux';
import photo from './album';
import album from './album';
import filterAlbum from './album';

export default combineReducers({
	album,
	photo,
	filterAlbum
});