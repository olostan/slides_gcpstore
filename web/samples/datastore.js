const task = {
    category: 'Personal',
    done: false,
    description: 'Learn Cloud Datastore'
};

const taskKey = datastore.key([
    'User','alice',
    'TaskList','default',
    'Task','sampleTask'
]);

const entity = { key: taskKey, data: task };
  
datastore.insert(entity)
    .then(() => {
      // Task inserted successfully.
    });
