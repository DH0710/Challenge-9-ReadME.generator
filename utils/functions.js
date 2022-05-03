const renderTemplate = ({title, github, license}) => {
    return `# ${title}
    ${renderLicenseSection(license)}`
}

const renderLicenseSection = (license) => {
    return `## License
    ${renderLicenseLink(license)}
    This project uses the ${license} license`

}

const renderLicenseBadge = (license) => {
return 
}

const renderLicenseLink = (license) => {
return `[License Information](https://opensource.org/licenses/${license})`
}


module.exports = {renderTemplate, renderLicenseSection, renderLicenseLink, renderLicenseBadge}
