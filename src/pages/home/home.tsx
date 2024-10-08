import {FunctionComponent} from 'react'

const Home: FunctionComponent = () => {
  return (
    // mt-4 is een Bootstrap klasse die top padding toevoegt.
    <div className="mt-4">
      <h1 className="text-3xl mb-2">Home</h1>

      <p>
        Cras facilisis urna ornare ex volutpat, et convallis erat elementum. Ut aliquam, ipsum vitae gravida suscipit,
        metus dui bibendum est, eget rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec molestie. Cum
        sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>

      <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
    </div>
  )
}

export default Home
