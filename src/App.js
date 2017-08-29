import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

/*

https://facebook.github.io/react-native/docs/flexbox.html

Flexbox works the same way in React Native as it does in CSS on the web, with a few exceptions. 
The defaults are different, with flexDirection defaulting to column instead of row, and the flex parameter only supporting a single number.


Adding flexDirection to a component's style determines the primary axis of its layout. 
Should the children be organized horizontally (row) or vertically (column)? The default is column.


Adding justifyContent to a component's style determines the distribution of children along the primary axis. 
Should children be distributed at the start, the center, the end, or spaced evenly? 
Available options are flex-start, center, flex-end, space-around, and space-between.

Adding alignItems to a component's style determines the alignment of children along the secondary axis (if the primary axis is row, then the secondary is column, and vice versa). 
Should children be aligned at the start, the center, the end, or stretched to fill? 
Available options are flex-start, center, flex-end, and stretch.


For stretch to have an effect, children must not have a fixed dimension along the secondary axis. 
In the following example, setting alignItems: stretch does nothing until the width: 50 is removed from the children.

More: https://facebook.github.io/react-native/docs/layout-props.html

*/

class FlexboxExamples extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
      </View>
    );
  }
}

export default FlexboxExamples;
