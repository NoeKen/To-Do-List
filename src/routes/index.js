import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import DefaultProps from '../constants/navigation';
import AppConfig from '../constants/config';

import { ArticlesForm, ArticlesList, ArticlesSingle } from '../containers';

import AboutComponent from '../components/About';
import ToDo from '../containers/TodoWelcome';
import AddTask from '../containers/AddTodo';
import Test from '../containers/Test';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
    <Scene key='TestPage' component={Test}  /> 
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        <Stack
          key="home"
          title={AppConfig.appName}
          icon={() => <Icon name="planet" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >    
          <Scene key='TodoWelcome' component={ToDo}  />     
          <Scene key="home2" component={AboutComponent} />
        </Stack>

        <Stack
          key="articlesList"
          title="Articles List"
          icon={() => <Icon name="list" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key='AddTask' component={AddTask}  /> 
          <Scene key="articlesList" component={ArticlesList} />
          <Scene key="articlesSingle" component={ArticlesSingle} back />
        </Stack>

        <Stack
          key="form"
          title="Articles Form"
          icon={() => <Icon name="add" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="form" component={ArticlesForm} />
        </Stack>
      </Tabs>
    </Scene>
  </Stack>
);

export default Index;
