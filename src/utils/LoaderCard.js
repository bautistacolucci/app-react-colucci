import ContentLoader from "react-content-loader";

const LoaderCard = (prop) => (

  prop === "card" ?
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#dcdcdc"
  >
    <circle cx="254" cy="287" r="15" />
    <rect x="11" y="276" rx="2" ry="2" width="205" height="14" />
    <rect x="12" y="295" rx="2" ry="2" width="176" height="7" />
    <rect x="9" y="0" rx="2" ry="2" width="266" height="266" />
  </ContentLoader>
  : 
  <ContentLoader 
    speed={2}
    width={500}
    height={560}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#dcdcdc"
  >
    <rect x="11" y="385" rx="2" ry="2" width="248" height="13" /> 
    <rect x="10" y="4" rx="2" ry="2" width="371" height="371" /> 
    <rect x="275" y="384" rx="0" ry="0" width="89" height="13" /> 
    <rect x="12" y="406" rx="2" ry="2" width="350" height="13" />
  </ContentLoader>
  
);

export default LoaderCard;
