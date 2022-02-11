// ** Third Party Components
import PropTypes from 'prop-types'
import { Card, CardBody } from 'reactstrap'

const StatsHorizontal = ({ icon, color, stats, statTitle, className, ...rest }) => {
  return (
    <Card>
      <CardBody className={className}>
        <div className='d-flex  align-items-center'>
        <div className={`avatar avatar-stats p-50 m-0   ${color ? `${color}` : 'bg-light-primary'}`}>
            <div className='avatar-content'>{icon}</div>
          </div>
          <div style={{marginLeft:'20px'}}>
            <h2 className='font-weight-bolder mb-0'>{stats}</h2>
            <p className='card-text'>{statTitle}</p>
          </div>          
        </div>
      </CardBody>
    </Card>
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
