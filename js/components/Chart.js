import React, {Component, PropTypes} from 'react';
import {View, AppRegistry, StyleSheet} from 'react-native';
import {Button} from "native-base";

import {BarChart} from 'react-native-mp-android-chart';

class Chart extends React.Component {

  constructor() {
    super();

    this.state = {
      legend: {
        enabled: false,
        textSize: 14,
        form: 'CIRCLE',
        position: 'RIGHT_OF_CHART',
        fontFamily: 'monospace',
        wordWrapEnabled: true
      },
      data: {
        datasets: [{
          yValues: [40, 21, 15, 9, 15],
          label: 'Confessions Legend',
          config: {
            colors: ['#FFF78C', '#FFC78C', '#FDD08C', '#ACEAFF', '#FF8C9C'],

            sliceSpace: 5,
            selectionShift: 13
          }
        }],
        xValues: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
      },
      description: {
        text: 'Transaction average in a month',
        textSize: 15,
        textColor: 'darkgray',
        fontFamily: 'monospace',
        fontStyle: 2
      }
    };
  }

  render() {
    console.log('chart');
    return (
      <View style={styles.container}>
        <BarChart
          style={styles.chart}
          logEnabled={true}
          backgroundColor={'#f0f0f0'}
          description={this.state.description}
          data={this.state.data}
          legend={this.state.legend}

          drawSliceText={true}
          usePercentValues={false}
          centerText={'Transactions'}
          centerTextRadiusPercent={100}
          holeRadius={40}
          holeColor={'#f0f0f0'}
          transparentCircleRadius={45}
          transparentCircleColor={'#f0f0f0'}
          transparentCircleAlpha={50}
          maxAngle={350}
        />
        <Button style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}}
                onPress={() => this.props.navigator.pop()} title="Back" color="#841584">
          Back
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  chart: {
    flex: 1
  }
});

AppRegistry.registerComponent('Chart', () => Chart);

export default Chart;
