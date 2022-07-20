const cron = require("node-cron");
const consola = require("consola");
const chalk = require("chalk");

/*
    Time Zone Pattern 
    More at https://www.npmjs.com/package/node-cron
*/

const timePattern = "00 00 12 * * 0-6";
const timeZone = "Asia/Tokyo";

function _(timePattern, timeZone) {
  consola.info("  Job Scheduler Started  !");
  cron.schedule(
    timePattern,
    () => {
      consola.info(
        `  Running a job at ${chalk.blue("12:00 AM")} at ${chalk.green(
          timeZone
        )} timezone`
      );
      /*
         Tasks to run
      */
      consola.success("  Job completed successfully !");
    },
    {
      timezone: timeZone,
    }
  );
}
_(timePattern, timeZone);
