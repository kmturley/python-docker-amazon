# python-docker-amazon

An example Python app inside a Docker container, which deploys to Amazon Elastic Beanstalk.


## Installation

First build the image:

    docker build -t python-docker-amazon .


## Usage

Run the server image using:

    docker run -it -p 3000:8080 python-docker-amazon

Then visit the address:

    http://localhost:3000/


## Deployment

Install the Amazon Elastic Beanstalk Client

    brew install awsebcli

Then run init and follow the steps to auth:

    eb init

You can deploy your project to the cloud using:

    eb deploy