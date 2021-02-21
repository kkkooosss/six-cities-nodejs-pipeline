![Deploy to Amazon ECS](https://github.com/kkkooosss/six-cities-nodejs-pipeline/workflows/Deploy%20to%20Amazon%20ECS/badge.svg)

## CI/CD pipline nodejs website six-cities for AWS ECS deployment

[Origin source code](https://github.com/alexkachar/198060-six-cities-4)


This pipeline runs the Docker container which builds the application from the current repository and export built files to **/nginx** directory.

Then the new build creates an updated image of the application and pushes it to *https://hub.docker.com/repository/docker/kosdockerid/six-cities*

For to load the application run:
```
docker run --name six-cities -p 8800:80 -d kosdockerid/six-cities:nginx
```

The application will be available on *http://localhost:8800*
