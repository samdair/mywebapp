import React, { Component } from 'react';
import {connect} from 'react-redux';

import { albumAction } from '../actions/album';
//const { height, width } = Dimensions.get('screen');

class Album extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      album: this.props.album,
      filterAlbum: this.props.filterAlbum,
      value: ''
    }

  }

  loadData = async(value) =>{
  	await this.props.getPhoto()
  	await this.props.searchPhoto(value)
  	let filterAlbum = await this.props.filterAlbum;
  	this.setState({filterAlbum})
  }
  loadAlbum = async(item) =>{
  	await this.props.addPhoto(item)
  	let album = await this.props.album;
  	this.setState({album})
  }
  handleChange = (event) =>{
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.loadData(this.state.value)
  }
  addPhoto = (item) =>{
  	this.loadAlbum(item)
  }

 renderImages (){
 	this.props.filterAlbum.map((item,index) => {
           return (
	           <button onClick = {()=>this.addPhoto(item)} key={index}>
	           	<img  src={item.images.standard_resolution.url} width = '100' height = '100' alt=''/>
	       	   </button>
       	   );
        });
 }
 renderIcon(){
    console.log("came here")
    return(
      <div>Function called</div>
    )
  }

  render() {

  	  let images = this.props.filterAlbum.map((item,index) => {
           return (
	           <button onClick = {()=>this.addPhoto(item)} key={index}>
	           	<img  src={item.images.standard_resolution.url} width = '100' height = '100' alt=''/>
	       	   </button>
       	   );
        });
  	  let albums = this.props.album.map((item,index) => {
           return (
	           <button onClick = {()=>this.addPhoto(item)} key={index}>
	           	<img  src={item.images.standard_resolution.url} width = '200' height = '200' alt=''/>
	       	   </button>
       	   );
        });


      return (
        <div style={{margin: 20}}>
			<form onSubmit={this.handleSubmit}>
				<label>
				Search By Tag:
				<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
			<div>
				{images}
			</div>
			<div>My Album</div>
			<div>
				{albums}
			</div>
        </div>
    ); 

  }
}


const mapStateToProps = state => ({
  album: state.album.album,
  filterAlbum: state.filterAlbum.filterAlbum,
})

const mapDispatchToProps = dispatch => ({
	getPhoto: () => dispatch(albumAction.getPhoto()),
	searchPhoto: (tag) => dispatch(albumAction.searchPhoto(tag)),
	addPhoto: (item) => dispatch(albumAction.addPhoto(item)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Album)