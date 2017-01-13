

Express Server
--------------

This is a small express server that allows you to concentrate on coding your client and API, as opposed to fiddling with things like express itself or logging etc. A lot of the work in here is mine, but i've heavily leaned on some work by:
	EXPRESS STUFF
	LOGGING STUFF

**What is it ?**
In simple terms, it's how i like to organise my projects. Usually there's a HTML client of some kind, served up from the root that will interrogate a REST API that provides all the nice things to make the client work.
To this end, i keep all of the code for the API in a folder called API, and all the code for the client in a folder called CLIENT. (keep it simple !)

**How do i make it work ?**
It's quite simple, just clone the GIT repository to a folder on your hard disk. Then navigate there with your command line and issue the all powerful NPM INSTALL command.
This will summon the demons of the NPM ecosystem to install all of the dependencies you need to get going.
Once the NPM command is complete, you can start the server using the NODE SERVER.JS command.

This will start off a server on a given port, and allow you to serve a client and API in one node service.

Development time
----------------
So, now we have a server framework up and ready, we can start to look at the important parts and navigate, code and run your idea.


> Written with [StackEdit](https://stackedit.io/).