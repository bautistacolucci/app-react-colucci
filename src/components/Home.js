import { Link } from 'react-router-dom'
import funboard from '../assets/funboard.jpg'

const Home = () => {
    return (
        {/* <Link to={"productos"} >productos</Link> */},
        <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              
                <div  className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={funboard}
                      alt={"tabla"}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <Link to={"category/tablas"}>
                      <span className="absolute inset-0" />
                      Tablas
                    </Link>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">Las mejores tablas</p>
                </div>
                
                <div  className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={funboard}
                      alt={"tabla"}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <Link to={"category/tablas"}>
                      <span className="absolute inset-0" />
                      Tablas
                    </Link>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">Las mejores tablas</p>
                </div>
                
                <div  className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={funboard}
                      alt={"tabla"}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <Link to={"category/tablas"}>
                      <span className="absolute inset-0" />
                      Tablas
                    </Link>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">Las mejores tablas</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home