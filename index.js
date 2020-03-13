const fs = require('fs');
const personalEnv = require('dotenv');


/* Load .env file */
personalEnv.config();

const setupCheckList = ['BACKEND_BASE_PATH', 'IMPS_WEB_CONFIG_FIEL_PATH', 
  'IMPS_APP_SETTINGS_CONFIG_FIEL_PATH', 'JH_WEB_CONFIG_FIEL_PATH', 'JH_APP_SETTINGS_CONFIG_FIEL_PATH'];


setupCheckList.forEach(x => {
  if (!process.env[x]) {
    throw URIError(x + ' need be configed in `.env` file');
  }
});


/**Project base url**/
const baseUrl = 'C:/Users/zlu/Sites/VCS.CSRNet';

let project = 'imps';

if (process.argv.length > 2){
	project = process.argv[2]
}

const currentDirectory = process.cwd();
// console.log('Backing up Web.config ...');
// fs.copyFile(process.env.BACKEND_BASE_PATH + '/VCS.CSRNet.WebAPI/Web.config', currentDirectory + '/backup/Web.config', (err) => {
//   if (err) throw err;
//   console.log('VCS.CSRNet.WebAPI/Web.config has been backed up.');
// });
// console.log('Backing up AppSettings.config ...');
// fs.copyFile(process.env.BACKEND_BASE_PATH + '/Config/Config/AppSettings.config', currentDirectory + '/backup/AppSettings.config', (err) => {
//   if (err) throw err;
//   console.log('Config/Config/AppSettings.config has been backed up.');
// });

console.log('Updating config files for project ' + project + ' ...' );

console.log('Updating Web.config ...');
fs.copyFile(process.env[project.toUpperCase() + '_WEB_CONFIG_FIEL_PATH'], process.env.BACKEND_BASE_PATH + '/VCS.CSRNet.WebAPI/Web.config', (err) => {
  if (err) throw err;
  console.log('VCS.CSRNet.WebAPI/Web.config has been switched to project ' + project);
});

console.log('Updating AppSettings.config ...');
fs.copyFile(process.env[project.toUpperCase() + '_WEB_CONFIG_FIEL_PATH'], process.env.BACKEND_BASE_PATH + '/Config/Config/AppSettings.config', (err) => {
  if (err) throw err;
  console.log('Config/Config/AppSettings.config has been switched to project ' + project);
});