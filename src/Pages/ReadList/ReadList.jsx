import React from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const ReadList = () => {
    const data=useLoaderData()
    console.log(data)
    return (
      <div>
        <Tabs>
          <TabList>
            <Tab>Read book list</Tab>
            <Tab>Wish book list</Tab>
          </TabList>

          <TabPanel>
            <h2>My read book list </h2>
          </TabPanel>
          <TabPanel>
            <h2>My wish book list</h2>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default ReadList;