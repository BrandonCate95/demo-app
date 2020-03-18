import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'
import ReduxSearchBar from '../../containers/ReduxSearchBar'
import ReduxUserSignInBtnGrp from '../../containers/ReduxUserSignInBtnGrp'
import CatagoryCard from './CatagoryCard'

class Home extends React.Component {

    catagoryGenerator = () => {
      const catagoryList = [
        {catagoryName: "Peace", symbolName: "heart"},
        {catagoryName: "Bars", symbolName: "beer"},
        {catagoryName: "Scams", symbolName: "bitcoin"}
      ];
      return catagoryList;
    }

    render(){

      return(
        <div>

          <div className="d-flex justify-content-end">
            <ReduxUserSignInBtnGrp />
          </div>

          <div className="d-flex flex-row">            

            <div className="d-flex align-items-center flex-column mx-auto">
              <h2>QUPUL</h2>
              
              <ReduxSearchBar />

              <div>
                <CatagoryCard catagoryList={this.catagoryGenerator()}/>
              </div>          
            </div>

          </div>
        </div>      
      );
    }
  }

export default Home;