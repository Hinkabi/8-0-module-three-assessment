import { Component } from "react";


class Locations extends Component{
    constructor(){
        super();

        this.state = {
            locationsArr: [],
            show: false
        }
    }

    fetchLocations = () => {
        fetch("https://ghibliapi.herokuapp.com/locations")
          .then((res) => res.json())
          .then((data) => {
            this.setState({
              locationsArr: data,
            });
          });
      };

      componentDidMount = () => {
          this.fetchLocations();
      };

    //   handleShowLocation = () =>{
    //       let locations = this.state.locationsArr.map((location) =>{
    //           return(
    //               <div>
    //                   <ul>
    //                       <li>
    //                           {location.name}
    //                           {location.climate}
    //                           {location.terrain}
    //                       </li>
    //                   </ul>
    //               </div>
    //           )
    //       })
    //   }

    render(){
        let locations = this.state.locationsArr.map((location) =>{
                      return(
                          <div>
                              <ul>
                                  <li>
                                     Name: {location.name}
                                  </li>
                                  <li className="hide-bullet">
                                      Climate: {location.climate}
                                  </li>
                                  <li className="hide-bullet">
                                      Terrain: {location.terrain}
                                  </li>
                              </ul>
                          </div>
                      )
                  })
        return (
            <div className="locations">
                <h1>List of Locations</h1>
                <button>Show Locations</button>
                {locations}
            </div>
        )
    }
}

export default Locations