# python-docker-amazon

An example Python app inside Docker containers, which runs on Amazon Elastic Beanstalk.


## Installation

Install the Amazon Elastic Beanstalk Client

    pip install --upgrade --user awsebcli

Add the installed path to your .bash_profile

    export PATH=/Users/username/Library/Python/2.7/bin:$PATH

Then run in terminal

    source ~/.bash_profile

Now run the Amazon Elastic Beanstalk Client and follow the steps:

    eb init

## Running

First build the image:

    docker build -t my-app-image .

Next run the images:

    docker run --rm -p 3000:8080 my-app-image


## Deployment

Now zip your project using:

    git archive --format=zip HEAD > dev.zip