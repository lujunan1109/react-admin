// data-set 可以按需引入，除此之外不要引入别的包
import React from 'react';
import { Chart, Axis, Tooltip, Geom, Legend, View } from 'bizcharts';
import DataSet from '@antv/data-set';

// console.log(DataSet)


// 下面的代码会被作为 cdn script 注入 注释勿删
// CDN START
const data = [
  { label: '0.1', 放款应还本金: 2800, 价格: 2800, 收益: 2260, 总收益率: 2 },
  { label: '0.2', 放款应还本金: 1800, 价格: 1800, 收益: 1300, 总收益率: 3 },
  { label: '0.3', 放款应还本金: 950, 价格: 950, 收益: 900, 总收益率: 5 },
  { label: '0.4', 放款应还本金: 500, 价格: 500, 收益: -390, 总收益率: 1 },
  { label: '0.5', 放款应还本金: 170, 价格: 170, 收益: 100, 总收益率: 3 },
  { label: '0.6', 放款应还本金: 170, 价格: 170, 收益: 100, 总收益率: 3 },
  { label: '0.7', 放款应还本金: 170, 价格: 170, 收益: -100, 总收益率: 3 },
  { label: '0.8', 放款应还本金: 170, 价格: 170, 收益: 100, 总收益率: 3 },
  { label: '0.9', 放款应还本金: 170, 价格: 170, 收益: 100, 总收益率: 3 },
  { label: '1.0', 放款应还本金: 170, 价格: 170, 收益: 100, 总收益率: 3 },
  { label: '未评分', 放款应还本金: 170, 价格: 170, 收益: 100, 总收益率: 3 },
];
const ds = new DataSet();
ds.setState('type', '');
const dv = ds.createView().source(data);

dv.transform({
  type: 'fold',
  fields: ['放款应还本金', '价格', '收益'], // 展开字段集
  key: 'type', // key字段
  value: 'value', // value字段
})
  .transform({
    type: 'filter',
    callback: (d) => {
      // console.log(ds.state.type);
      return d.type !== ds.state.type;
    }
  });
const scale = {
  总收益率: {
    type: 'linear',
    min: 0,
    max: 10,
  },
};

const legendItems = [
  { value: '放款应还本金', marker: { symbol: 'square', fill: '#3182bd', radius: 5 } },
  { value: '价格', marker: { symbol: 'square', fill: '#41a2fc', radius: 5 } },
  { value: '收益', marker: { symbol: 'square', fill: '#54ca76', radius: 5 } },
  { value: '总收益率', marker: { symbol: 'hyphen', stroke: '#fad248', radius: 5, lineWidth: 3 } },
];

class Line extends React.Component {
  render() {
    // console.log(dv)
    return (
    <div style={{float:"right"}}>
    <Chart height={250} width={700} forceFit data={dv} scale={scale} padding="auto" onGetG2Instance={(c) => {
      this.chart = c;
    }}>
      <Legend
        custom
        allowAllCanceled
        items={legendItems}
        onClick={(ev) => {
          setTimeout(() => {
            const checked = ev.checked;
            const value = ev.item.value;
            if (value === '总收益率') {
              if (checked) {
                this.chart.get('views')[0].get('geoms')[0].hide()
              } else {
                this.chart.get('views')[0].get('geoms')[0].show()
              }
            }
            const newLegend = legendItems.map((d) => {
              if (d.value === value) {
                d.checked = checked
              }
              return d;
            })
            this.chart.filter('type', (t) => {
              const legendCfg = newLegend.find(i => i.value === t);
              return legendCfg && legendCfg.checked;
            });

            this.chart.legend({
              items: newLegend
            })
            this.chart.repaint();
            // console.log(this.view)
          }, 0)
        }}
      />
      <Axis name="label" />
      <Axis name="value" position={'left'} />
      <Tooltip />
      <Geom
        type="interval"
        position="label*value"
        color={['type', (value) => {
          if (value === '放款应还本金') {
            return '#2b6cbb';
          }
          if (value === '价格') {
            return '#41a2fc';
          }
          if (value === '收益') {
            return '#54ca76';
          }
        }]}
        adjust={[{
          type: 'dodge',
          marginRatio: 1 / 32,
        }]}
      />
      <View data={data} >
        <Axis name="总收益率" position="right" />
        <Geom type="line" position="label*总收益率" color="#fad248" size={3} />
      </View>
    </Chart>
    </div>
    );
  }
}

export default Line