# Nakamoto-simulator <br /> 
## end-points repo <br /> <br /> 

> Structure of this repo (and the proxy repo) <br />
>> **end_points** contains the end-points we will lever later for our block_explorer <br />
>> **end_points/src** contains the main code for the endpoints <br />
>> **end_points/src/components/endPoints** contains the code for accessing the endpoints <br />
>> **end_points/src/components/coreContainers** contains the containers for holding data from the endpoints <br />
>> **Proxy** contains a Javascript proxy to avoid CORS while running the block_explorer <br /> <br />

> After cloning this repo: <br />
>> cd nakamoto-simulator  <br /> <br />

> <br />
> To run the end_points you must use two terminals: **terminal 1** and **terminal 2** <br /> <br />


> In **terminal 1** <br />
> <br />
>> git clone https://github.com/wonder-phil/Nakamoto-simulator/blob/main/proxy <br />
>> cd proxy <br />
>> npm init -y <br />
>> npm install cors <br />
>> npm install express <br />
>> node proxyJS.js <br />
> <br />

> In **terminal 2** <br />
>> git clone https://github.com/wonder-phil/Nakamoto-simulator/tree/main/end-points <br />
>> cd end_points <br />
>> npm install <br />
>> npm start <br />

