# vivint-bowling
Hi Taylor and Travis, this is the bowling application for the homework portion of the interview.

#Installing
- Fork or clone the repository
- At the root folder (/vivint-bowling), run ``npm install``
- Navigate to the client folder (/vivint-bowling/client), and run ``npm install``

#Running
- At the root folder, run the following commands in order:
- ``mongod``
- ``npm run server``
- After the server is initialized, ``npm run client``

#BUG
- It does not properly go through with the PATCH operation if the buttons (strike, spare, or add score) are pressed many times in small amount of time. It might because of an inefficient PATCH operation
