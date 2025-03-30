# Nakamoto-simulator <br /> 
## end-points <br /> <br /> 

> Structure of this repo (and the proxy repo) <br />
>> **end_points** contains the end-points we will lever later for our block_explorer <br />
>> **end_points/src** contains the main code for the endpoints <br />
>> **end_points/src/components/endPoints** contains the code for accessing the endpoints <br />
>> **end_points/src/components/coreContainers** contains the containers for holding data from the endpoints <br />
>> **Proxy** contains a Javascript proxy to avoid CORS while running the block_explorer <br /> <br />


> Clone this repo: <br />
>> git clone  https://github.com/wonder-phil/Nakamoto-simulator.git <br />
> <br />
> To run the end_points you must use two terminals: **terminal 1** and **terminal 2** <br /> <br />



> In **terminal 1** <br />
> <br />
>> cd Nakamoto-simulator  <br />
>> cd proxy <br />
>> npm init -y <br />
>> npm install cors <br />
>> npm install express <br />
>> node proxyJS.js <br />
> <br />

> In **terminal 2** <br />
>> cd Nakamoto-simulator  <br />
>> cd end_points <br />
>> npm install <br />
>> npm start <br />

