const fs = require('fs');

/**Project base url**/
const baseUrl = 'C:/Users/zlu/Sites/VCS.CSRNet';

let project = 'imps';

if (process.argv.length > 2){
	project = process.argv[2]
}

// const project = 'jh';
/** Prefix and Suffix for backup folder **/
const backupPrefix = 'zlu-';
const backupSuffix = '-' + project;

// Web.config'.
fs.copyFile(baseUrl + '/VCS.CSRNet.WebAPI/' + backupPrefix + 'Web'+ backupSuffix + '.config', baseUrl + '/VCS.CSRNet.WebAPI/Web.config', (err) => {
  if (err) throw err;
  console.log('VCS.CSRNet.WebAPI/Web.config has been switched to project ' + project);
});

// Config/Config/AppSettings.config be created or overwritten by default.
fs.copyFile(baseUrl + '/Config/' + backupPrefix + 'Config' + backupSuffix + '/AppSettings.config', baseUrl + '/Config/Config/AppSettings.config', (err) => {
  if (err) throw err;
  console.log('Config/Config/AppSettings.config has been switched to project ' + project);
});