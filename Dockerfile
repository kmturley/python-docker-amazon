# Use the AWS Elastic Beanstalk Python 3.4 image
FROM amazon/aws-eb-python:3.4.2-onbuild-3.5.1

# Update server packages
RUN apt-get update
RUN apt-get install -y nodejs npm
RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10

# Build frontend
RUN cd /var/app/frontend && npm install
RUN cd /var/app/frontend && npm run build

# Expose port 8080
EXPOSE 8080