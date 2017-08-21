const getCompanyCardData = ({ companies }) => (
  Object.keys(companies).map(companyName => ({
    companyName,
    logoUrl: companies[companyName].logoUrl
  }))
)

const getters = {
  companyCardData: state => getCompanyCardData(state)
}

export default getters
