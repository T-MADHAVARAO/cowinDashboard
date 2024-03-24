// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import './index.css'

const views = ['LOADING', 'SUCCESS', 'FAILURE']

class CowinDashboard extends Component {
  state = {isStatus: views[0], dataObj: {}}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(vaccinationDataApiUrl)
    if (response.ok) {
      const data = await response.json()
      console.log(data)

      const dataObj = {
        vaccinationCoverage: data.last_7_days_vaccination,
        byGender: data.vaccination_by_gender,
        byAge: data.vaccination_by_age,
      }
      this.setState({isStatus: views[1], dataObj})
    } else {
      this.setState({isStatus: views[2]})
    }
  }

  loadingView = () => (
    <div className="loader-cont" data-testid="loader">
      <Loader type="ThreeDots" />
    </div>
  )

  failureView = () => (
    <div className="loader-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        className="failure-img"
        alt="failure view"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  successView = () => {
    const {dataObj} = this.state
    const {vaccinationCoverage, byGender, byAge} = dataObj
    return (
      <div>
        <VaccinationCoverage data={vaccinationCoverage} />
        <VaccinationByGender data={byGender} />
        <VaccinationByAge data={byAge} />
      </div>
    )
  }

  resultedView = () => {
    const {isStatus} = this.state
    switch (isStatus) {
      case views[0]:
        return this.loadingView()
      case views[1]:
        return this.successView()

      default:
        return this.failureView()
    }
  }

  render() {
    return (
      <div className="bg">
        <div className="logo-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            className="logo-size"
            alt="website logo"
          />
          <h1 className="logo-heading">Co-WIN</h1>
        </div>
        <h1 className="app-heading">CoWIN Vaccination In India</h1>
        <div>{this.resultedView()}</div>
      </div>
    )
  }
}

export default CowinDashboard
