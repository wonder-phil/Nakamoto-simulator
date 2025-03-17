# Nakamoto-simulator <br /> <br />

> Structure of this repo <br />
>> **Architecture** contains architecture documents <br />
>> **block_explorer** contains a basic block explorer <br />
>> **core_components** contains a basic block explorer <br />
>> **Docs** contains documents describing key components  <br />
>> **end_points** contains a end points we will lever for our block_explorer <br />
>> **Proxy** contains a Javascript proxy to avoid CORS while running the block_explorer <br /> <br />

> After cloning this repo: <br />
>> cd nakamoto-simulator  <br /> <br />

> <br />
> To run the end_points you must use two terminals: **terminal 1** and **terminal 2** <br /> <br />


> In **terminal 1** <br />
> <br />
>> cd proxy <br />
>> npm init -y <br />
>> npm install cors <br />
>> npm install express <br />
>> node proxyJS.js <br />
> <br />

> In **terminal 2** <br />
> <br />
>> cd end_points <br />
>> npm install <br />
>> npm start <br />





