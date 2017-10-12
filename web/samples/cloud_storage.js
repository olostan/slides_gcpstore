// Imports the Google Cloud client library
const Storage = require('@google-cloud/storage');

// Your Google Cloud Platform project ID
const projectId = 'YOUR_PROJECT_ID';

// Instantiates a client
const storage = Storage({projectId: projectId,});

// The name for the new bucket
const bucketName = 'my-new-bucket';

// Creates the new bucket
storage.createBucket(bucketName);

storage
  .bucket(bucketName)
  .upload(filename)
  .then(() => {
     console.log(`${filename} uploaded to ${bucketName}.`);
  })