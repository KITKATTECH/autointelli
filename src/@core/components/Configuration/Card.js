// ** Third Party Components
import PropTypes from 'prop-types'
import { Card, CardBody, Button } from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'
const StatsHorizontal = ({ icon, color, stats, statTitle, className, ...rest }) => {
  const history = useHistory()
  return (
    // <Button.Ripple color='' >
    <Card >
         
      <CardBody className={className} onClick={() => history.push('/setup_Agent')}>

        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <h4 className='font-weight-bolder mb-0'>{stats}</h4>
            <p className='card-text font-medium'>{statTitle}</p>
          </div>
          <div className={`avatar avatar-stats p-50 m-0 ${color ? `bg-light-${color}` : 'bg-light-primary'}`}>
            <div className='avatar-content'>{icon}</div>
          </div>
        </div>
       
      </CardBody>

    </Card>
    // </Button.Ripple>
  )
}

export default StatsHorizontal

// ** PropTypes
StatsHorizontal.propTypes = {
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
  statTitle: PropTypes.string.isRequired,
  className: PropTypes.string
}
