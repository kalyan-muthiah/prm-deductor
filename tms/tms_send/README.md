# Starting up the Spine MTH Server in the Testbench
1. From the home directory of your Testbench, open the following file: `$ITK_HOME/config/SPINE_MTH/tkw.properties` and uncomment line 68 and comment out line 69.

2. From `$ITK_HOME/config/SPINE_MTH/`, run `java -jar ../../TKW.jar -simulator tkw.properties`

# Setting up server to receive response
To receive asynchronous responses from the MTH server, start the server like so:

From `../tms_receive/`, start the server by typing `node main.js`.