const BigQuery = require('@google-cloud/bigquery');

const bigquery = BigQuery({projectId: projectId});
  
const sqlQuery =
   "SELECT * FROM publicdata.samples.natality LIMIT 5;";
const options = { query: sqlQuery, useLegacySql: false};

let job;
// Runs the query as a job
bigquery.startQuery(options)
  .then((results) => {
    job = results[0];
    console.log(`Job ${job.id} started.`);
    return job.promise();
  })
  .then(() => {
    console.log(`Job ${job.id} completed.`);
    return job.getQueryResults();
  })
  .then((results) => {
    const rows = results[0];
    console.log('Rows:');
    rows.forEach((row) => console.log(row));
  });