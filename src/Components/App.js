import React from 'react';
import unsplash from '../Api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList'
import axios from 'axios';

class App extends React.Component{

    state = {images:[] };

    onSearchSubmit= async (term) =>{
        const response = await unsplash.get('/search/photos' , {

            params:{
                query: term
            }



        });

        //console.log(response.data.results);
        console.log(response.request.status);
       //console.log(this);
       this.setState({ images: response.data.results});

    }


    render()
    {
        return (
            <div className="ui container" style={{ margin: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>


        );
    }
};

export default App;
