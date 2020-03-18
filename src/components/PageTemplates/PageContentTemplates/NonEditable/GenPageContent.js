import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './GenPageContent.css'
import Title from './Title'
import MainColumn from './MainColumn'
import MainImg from './MainImg'
import MainContent from './MainContent'
import SideColumn from './SideColumn'
import SideColumnSuggestList from './SideColumnSuggestList'


const GenPageContent = () => (
    <div className="col-md-9 col-sm-12 mx-auto">
        <Title>Title</Title>
        <div className="d-flex flex-row">
            <MainColumn>
                <MainImg src="https://s3-us-west-1.amazonaws.com/ttd-service-image-storage/ttd/default4.png"/>
                <MainContent>
                    Hello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello there
                </MainContent>
            </MainColumn>


            <SideColumn>
                <SideColumnSuggestList />
            </SideColumn>
        </div>
    </div>     
);

export default GenPageContent