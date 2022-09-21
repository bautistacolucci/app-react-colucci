import { Link } from "react-router-dom";
import tablas2 from "../assets/tablas2.jpg";
import neoprene from "../assets/neoprene.jpg";
import accesorio1 from "../assets/accesorio1.jpg";




const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Categorías</h2>

            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-1 sm:aspect-h-2 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={tablas2}
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
              <p className="text-base font-semibold text-gray-900">
                Una variedad infinita de tablas hechas por los mejores shapers del pais.
              </p>
            </div>

          <div className="mt-10 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">

            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={neoprene}
                  alt={"tabla"}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <Link to={"category/neoprene"}>
                  <span className="absolute inset-0" />
                  Neoprene
                </Link>
              </h3>
              <p className="text-base font-semibold text-gray-900">
                Encontra el traje que mas se adecúe a las aguas en las que vas a surfear.
              </p>
            </div>

            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={accesorio1}
                  alt={"tabla"}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <Link to={"category/accesorios"}>
                  <span className="absolute inset-0" />
                  Accesorios
                </Link>
              </h3>
              <p className="text-base font-semibold text-gray-900">
                Todo lo que necesitas para complementar tu equipo de surf.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
