import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
 




const LineChart = ({evaluations}) => {

    const series1 = evaluations[0].parameters.map(parameter => {
        const parameterScores = evaluations.map(evaluation => {
          const parameterData = evaluation.parameters.find(param => param.name === parameter.name);
          return parameterData ? parameterData.score : 0;
        });
      
        return {
          name: parameter.name,
          data: parameterScores,
        };
      });
    
    const data = {
      categories: ['Q1', 'Q2', 'Q3', 'Q4'],
      series:series1,
      
    };


  const options = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Student Evaluation Scores',
    },
    xAxis: {
      categories: data.categories,
      title: {
        text: 'Quarters',
      },
    },
    yAxis: {
      title: {
        text: 'Score',
      },
    },
    series: data.series,
  };

  return (
    <div className="card">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LineChart;
