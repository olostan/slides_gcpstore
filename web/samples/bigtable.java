Connection connection = 
    BigtableConfiguration.connect(projectId, instanceId)
Table table = 
    connection.getTable(TableName.valueOf(TABLE_NAME));

for (int i = 0; i < myData.length; i++) {
    Put put = new Put(Bytes.toBytes("item#"+i));
    put.addColumn(
        COLUMN_FAMILY_NAME, COLUMN_NAME, 
        Bytes.toBytes(myData[i]));
    table.put(put);
}

Result getResult = table.get(
    new Get(Bytes.toBytes("item#2")));
String result = Bytes.toString(
    getResult.getValue(COLUMN_FAMILY_NAME, COLUMN_NAME));
