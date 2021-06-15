# Stakater Frontend!

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Dockerfile

Everything related to the images and containers was created using Docker Desktop Version 3.3.3 (64133) on Windows. The following are the commands for building the image and run a container.
```
docker build -t luisjavierjn/stakater-angular-app:1.0 .
docker run --rm -p 9000:80 luisjavierjn/stakater-angular-app:1.0
```
As you might notice to run the container the port is mapped from 80 to 9000 which is the one allowed by the Backend to accept requests from the Frontend. The image was uploaded to the following repository:

https://hub.docker.com/repository/docker/luisjavierjn/stakater-angular-app

![GET Endpoint](browser-answer.PNG)

# Kubernetes

The folder Kubernetes contains the yaml file auto-generated when a resource is created through the Kubernetes dashboard out of the image previously loaded in docker**hub**. Docker Desktop brings Kubernetes v1.19.7 as a single-node cluster, it is part of the options that can be enabled to start off along with Docker.
