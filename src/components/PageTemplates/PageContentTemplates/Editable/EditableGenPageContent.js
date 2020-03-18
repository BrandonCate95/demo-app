import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../NonEditable/GenPageContent.css'
import MainColumn from '../NonEditable/MainColumn'
import SideColumn from '../NonEditable/SideColumn'
import EditableMainImg from './EditableMainImg'
import EditableMainContent from './EditableMainContent'
import EditableTitle from './EditableTitle'
import SideColumnSuggestList from '../NonEditable/SideColumnSuggestList'


const EditableGenPageContent = () => (
    <div className="col-md-9 col-sm-12 mx-auto">
        <EditableTitle>Title 13</EditableTitle>
        <div className="d-flex flex-row">
            <MainColumn>
                <EditableMainImg src="https://s3-us-west-1.amazonaws.com/ttd-service-image-storage/ttd/default4.png"/>
                <EditableMainContent>
                    Hello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello thereHello there Hello thereHello there Hello there Hello there Hello there Hello there
                </EditableMainContent>
            </MainColumn>


            <SideColumn>
                <SideColumnSuggestList />
            </SideColumn>
        </div>
    </div>     
);

export default EditableGenPageContent