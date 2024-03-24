// Write your code here
// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {data} = props
  console.log(data)
  return (
    <div className="pai-chart">
      <h1>Vaccination by Age</h1>

      <PieChart width={1000} height={500}>
        <Pie
          cx="70%"
          cy="40%"
          data={data}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
          className="cates"
          align="center"
        >
          <Cell name="18-44" fill="#fecba6" />
          <Cell name="45-60" fill="#b3d23f" />
          <Cell name="Above 60" fill="#a44c9e" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          horizontalAlign="end"
          align="center"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
