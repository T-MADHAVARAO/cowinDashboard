// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

const VaccinationCoverage = props => {
  const {data} = props
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div>
      <h1>Vaccination Coverage</h1>

      <BarChart
        width={1000}
        height={500}
        data={data}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccine_date"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
            color: 'black',
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="dose_1" name="dose_1" fill="blue" barSize="20%" />
        <Bar dataKey="dose_2" name="dose_2" fill="pink" barSize="20%" />
      </BarChart>
    </div>
  )
}
export default VaccinationCoverage
