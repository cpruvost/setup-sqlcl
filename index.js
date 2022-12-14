const core = require('@actions/core');
const Util = require('util');
const execSync = Util.promisify(require('child_process').execSync);

// most @actions toolkit packages have async methods
async function run() {
  try {
    if(process.platform !== 'linux') {
      throw new Error('This action runs only on Linux currently');
    }

    execSync('wget https://download.oracle.com/otn_software/java/sqldeveloper/sqlcl-latest.zip');
    execSync('unzip sqlcl-latest.zip');
    
    //TO_DO : add an alias "sql"

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
