import React from 'react'
import { nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './GenNavBar.css'
import 'react-tabs/style/react-tabs.css';
import './ReactTabsOverload.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import NavMasterRow from './NavMasterRow'
import MainTabContent from './Tabs/Home/MainTabContent'
import ViewTabContent from './Tabs/View/ViewTabContent'

class GenNavBar extends React.Component {
    render(){
        return(
            <nav className="gen-edit-navbar">

                <NavMasterRow />

                <div className="d-flex flex-row">
                <Tabs>
                    <TabList>
                        <Tab>Main</Tab>
                        <Tab>View</Tab>
                    </TabList>

                    <TabPanel>
                        <MainTabContent />
                    </TabPanel>
                    <TabPanel>
                        <ViewTabContent />
                    </TabPanel>
                </Tabs>
                </div>
            </nav>
        );
    }
}

export default GenNavBar