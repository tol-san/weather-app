import Forecast from './Forecast'

const ForecastList = () => {
  return (
      <div className='flex justify-center gap-2 mx-1 md:gap-4'>
          <Forecast/>
          <Forecast/>
          <Forecast/>
          <Forecast/>
    </div>
  )
}

export default ForecastList