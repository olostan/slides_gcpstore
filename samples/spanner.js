// Imports the Google Cloud client library
const Spanner = require('@google-cloud/spanner');

// Instantiates a client
const spanner = Spanner(
    {projectId: 'YOUR_PROJECT_ID'});

// Gets a reference to a Cloud Spanner instance and database
const instance = spanner.instance('my-instance');
const database = instance.database('my-database');

// The query to execute
const query = {
  sql: `SELECT A.FirstName, A.LastName
  FROM Attendees AS A INNER JOIN Sessions AS S
  ON A.login = S.AttendeeLogin AND S.SessionID='123';`
};

// Execute a simple SQL statement
database.run(query)
  .then((results) => {
    const rows = results[0];

    rows.forEach((row) => console.log(row));
  });
