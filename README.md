# Getting started

## Run MongoDB

To pull the image and run the container for the first time, run the following commands:

```
docker pull mongo
docker run -d -p 27017-27019:27017-27019 --name mongo mongo:latest
```

After that, you can start the already existing container like this:

```
docker container start mongo
```

You can enter the docker container's bash terminal with the following command. Run `mongo` in there to inspect the database:

```
docker exec -it mongo bash
```

## Run the app

After having a running mongo instance, you can execute the following command to start the web application

```
npm start
```

