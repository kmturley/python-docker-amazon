# python-docker-amazon (Django)

An example Python app inside a Docker container, which deploys to Amazon Elastic Beanstalk.


## Installation

Install the Amazon Elastic Beanstalk Client

    brew install awsebcli


## Usage

Run the server locally using python:

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

To connect to the running container use:

    sudo docker exec -i -t containerid /bin/bash
    cat /var/log/uwsgi/uwsgi.log

## uWSGI (optional)

Run nginx + uWSGI server directly:

    virtualenv env
    source env/bin/activate
    pip install requirements.txt
    uwsgi --http :8080 --wsgi-file backend/wsgi.py --master --processes 1 --threads 15 --uid uwsgi --gid uwsgi --logto2 uwsgi.log