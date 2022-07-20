const cron = require("node-cron");
const consola = require("consola");
const chalk = require("chalk");

/*
    Time Zone Pattern 
    More at https://www.npmjs.com/package/node-cron
*/

// const timePattern = "* * * * *";         // run at every minute
const timePattern = "00 00 12 * * 0-6"; // run at 12:00AM according to timezone
const timeZone = "Asia/Tokyo";
const axios = require("axios").default;

function triggerHook(url) {
  axios
    .get(url)
    .then(function (response) {
      consola.info(response);
      consola.success("  Job completed successfully !");
    })
    .catch(function (error) {
      consola.error("Error fetching the api");
      consola.error(error);
    })
    .then(() => {
      consola.info("  Rescheduled the next task ");
    });
}

function _(timePattern, timeZone) {
  consola.info("  Job Scheduler Started !");
  cron.schedule(
    timePattern,
    () => {
      consola.info(
        `  Running a job at ${chalk.blue("12:00 AM")} at ${chalk.green(
          timeZone
        )} timezone`
      );
      triggerHook("https://jsonplaceholder.typicode.com/todos/1"); // task to run
    },
    {
      timezone: timeZone,
    }
  );
}
_(timePattern, timeZone);
