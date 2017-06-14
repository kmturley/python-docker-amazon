# python-docker-amazon (Django)

An example Python app inside a Docker container, which deploys to Amazon Elastic Beanstalk.


## Installation

Install the backend dependencies (Django + Amazon Elastic Beanstalk Client)

    pip install -r requirements.txt
    python manage.py migrate
    python manage.py collectstatic
    python manage.py createsuperuser

Install the frontend dependencies

    cd frontend
    npm install

## Usage

Run the server locally using python:

    python manage.py runserver 0.0.0.0:8080

Run the frontend locally using gulp:

    cd frontend
    npm start

Then visit the address:

    http://localhost:8080/

You can access the admin CMS at:

    http://localhost:8080/admin/


## Deployment

Test the server environment locally using Docker:

    eb local run

Set Elastic Beanstalk project by following the steps:

    eb init --profile home

Deploy your project to Elastic Beanstalk using:

    eb create environment-name --database
    eb status environment-name
    eb deploy environment-name


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