import React, { Component } from 'react';

import {ShowComponent} from './ShowComponent'; 

export class ShowContainer extends Component {
    constructor(args){
        super(args);
    
        this.state = {
          shows : [],
          info: {},
        };
    }
    
    componentDidMount() {
        fetch('https://api.infinum.academy/api/shows')
          .then((data) => data.json())
          .then((response) => this.setState({ shows: response.data }))
          .then(() => {  // Fetch info about shows

            const showsD = this.state.shows;
    
            // Fetch show descritpions 
            for (const key in showsD) {
              fetch(`https://api.infinum.academy/api/shows/${showsD[key]._id}`)
                .then((response) => response.json())
                .then((response) => {
                  // Copy to inf variable and then change it and change state.info to inf
                  let inf = Object.assign({}, this.state.info);
                  inf[showsD[key]._id] = response.data.description;
                  this.setState({ info: inf });
                });
            }
          });

        
      
    }


    render(){
        return <ShowComponent shows = {this.state.shows} info = {this.state.info}/>
    }
}
