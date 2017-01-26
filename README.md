# python-docker-amazon

An example Python app inside a Docker container, which deploys to Amazon Elastic Beanstalk.


## Installation

Install the Amazon Elastic Beanstalk Client

    brew install awsebcli


## Usage

Run the server locally using python:

    cd backend/
    python manage.py runserver

Or run the full server environment using:

    eb local run

Then visit the address:

    http://localhost:8080/


## Deployment

Then run init and follow the steps to auth:

    eb init

You can deploy your project to the cloud using:

    eb deploy


## Docker (optional)

If you like, you can use docker directly using:

    docker build -t python-docker-amazon .
    docker run -it -p 3000:8080 python-docker-amazon
    sudo docker exec -i -t 77eeb1e49d5c /bin/bash