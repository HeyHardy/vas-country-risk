const LOCAL_SERVICES_FRONTEND = "https://portal.dev.demo.catena-x.net";
const LOCAL_SERVICES_BACKEND = "https://portal-backend.dev.demo.catena-x.net";
//const LOCAL_SERVICES_CENTRALIDP = 'https://centralidp.dev.demo.catena-x.net'
//const LOCAL_SERVICES_BPDM = 'https://bpdm.dev.demo.catena-x.net'

export const getHostname = () => window.location.hostname;

export const isLocal = () => getHostname() === "localhost";

export const getApiBase = () =>
  isLocal()
    ? LOCAL_SERVICES_BACKEND
    : window.location.origin.replace("portal", "portal-backend");

export const getAssetBase = () =>
  `${isLocal() ? LOCAL_SERVICES_FRONTEND : ""}/assets`;

export const getCentralIdp = () => {
  const hostname = getHostname();
  if (hostname === "country-risk-dashboard.dev.demo.catena-x.net")
    return "https://centralidp.dev.demo.catena-x.net/auth";
  if (hostname === "country-risk-dashboard.int.demo.catena-x.net")
    return "https://centralidp.int.demo.catena-x.net/auth";
  return "https://centralidp.dev.demo.catena-x.net/auth";
};

export const getClientId = () => "Cl2-CX-Portal";

export const getCountryRiskClientId = () => "Cl16-CX-CRisk";

//TODO: remove hard coded url and activate after setup of BPDM Api
export const getBpdmApiBase = () => {
  const hostname = getHostname();
  if (hostname === "portal.int.demo.catena-x.net")
    return "https://catenax-bpdm-int.demo.catena-x.net/api";
  if (hostname === "portal.catena-x.net")
    return "https://catenax-bpdm-dev.demo.catena-x.net/api";
  return "https://catenax-bpdm-dev.demo.catena-x.net/api";
};
//export const getBpdmApiBase = () =>
//  isLocal()
//    ? LOCAL_SERVICES_BPDM
//    : window.location.origin.replace('portal', 'bpdm')

export const getSemanticApiBase = () => {
  const hostname = getHostname();
  if (hostname === "portal.int.demo.catena-x.net")
    return "https://semantics.int.demo.catena-x.net/";
  return "https://semantics.dev.demo.catena-x.net/";
};

export const getClientIdSemantic = () => "Cl3-CX-Semantic";

export const getClientIdDigitalTwin = () => "Cl4-CX-DigitalTwin";

const EnvironmentService = {
  isLocal,
  getHostname,
  getApiBase,
  getAssetBase,
  getBpdmApiBase,
  getCentralIdp,
  getSemanticApiBase,
  getClientId,
  getClientIdSemantic,
  getClientIdDigitalTwin,
  getCountryRiskClientId,
};

export default EnvironmentService;
