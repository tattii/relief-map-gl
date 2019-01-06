import React, { Component } from 'react';
import { Sidebar } from 'semantic-ui-react'
import { ChromePicker } from 'react-color';

export default class MapSidebar extends Component {


  render() {

    return (
      <Sidebar
        animation='overlay'
        visible={true}
        direction='right'
        width='thin'
      >
        <div>
          <ChromePicker
            color='#8ed1fc'
            disableAlpha={true}
          />
        </div>
      </Sidebar>
    );
  }
}

