---
toc: true
layout: post
title: Deployment Blog
description: This is our groups deployment blog.
---
## AWS Deployment Process for Backend/Database

### Prerequisites

1. **AWS Account**: Get the active AWS account from Mr. Mortensen. [AWS](https://aws.amazon.com/).
2. **IAM User**: Create an IAM user - Identity and Access Management, so that we have permissions we need.
3. **AWS CLI**: Install and configure the AWS CLI on local machine. Follow the instructions [here](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html).
4. **Test Server**: Ensure that we have a working frontend-to-backend test server (live review with Mr.Mort). If it does not work locally, there is no need to try it on deployment.
![Deployment Diagram]({{ site.baseurl }}/images/cicd-pipeline-diagram.png)
This is a general process that we will follow for deployment.

### Key Terms used in deployment
- Amazon Web Services (AWS) Management Console: A web-based interface that allows users to manage and interact with AWS services, providing an intuitive way to configure resources, monitor performance, and access a wide range of cloud tools.
- Amazon EC2 (Elastic Compute Cloud): A cloud service that offers scalable computing power, enabling users to run applications on virtual servers with flexible resource management.
- Docker: A platform that simplifies the deployment of applications within lightweight containers, ensuring consistent environments across different stages of development and production.
- Docker Compose: A tool for managing multi-container Docker applications, using a YAML file to configure services, networks, and volumes for the application.
- Nginx: A high-performance web and reverse proxy server that efficiently directs incoming traffic to the appropriate backend services, improving load balancing and scalability.
- Route 53: AWS's scalable DNS service that converts domain names into IP addresses, efficiently routing user requests to applications hosted on AWS or on-premises.
- Certbot: A tool that automates the process of obtaining and renewing Let’s Encrypt SSL/TLS certificates, enabling HTTPS on websites managed manually.
- Cockpit: A web-based server management tool that allows users to monitor and manage their Linux servers through a simple and user-friendly interface, providing features like system performance monitoring, logs, and container management.


### Subdomain

Setup DNS endpoint through AWS Route 53.

```yml
Server: https://intertravel.stu.nighthawkcodingsociety.com/
Domain: nighthawkcodingsociety.com
Subdomain: intertravel.stu
```

### Port (Backend)

Select a unique port for the application. Update all locations:

- **main.py**: Prepare the localhost test server port to run on the same port for consistency.
Changed port to 8101
  ```python
  if __name__ == "__main__":
      app.run(debug=True, host="0.0.0.0", port="8101")
  ```

- **Dockerfile**: Prepare this file to run a server as a virtual machine on the deployment host.
  ```dockerfile
  FROM docker.io/python:3.11
  WORKDIR /
  RUN apt-get update && apt-get upgrade -y && \
      apt-get install -y python3 python3-pip git
  COPY . /
  RUN pip install --no-cache-dir -r requirements.txt
  RUN pip install gunicorn
  ENV GUNICORN_CMD_ARGS="--workers=1 --bind=0.0.0.0:8101"
  EXPOSE 8101
  ENV FLASK_ENV=production
  CMD [ "gunicorn", "main:app" ]
  ```

- **docker-compose.yml**: Prepare this file to serve as the “make” for Docker.
  ```yaml
  version: '3'
  services:
      web:
          image: inter_travel
          build: .
          env_file:
              - .env
          ports:
              - "8101:8101"
          volumes:
              - ./instance:/instance
          restart: unless-stopped
  ```

- **nginx_file**: Prepare this file for reverse proxy (the way this works is that the information is sent from the internet to the application and back to the requester.)
  ```nginx
  server {
      listen 80;
      listen [::]:80;
      server_name https://intertravel.stu.nighthawkcodingsociety.com;
      location / {
          proxy_pass http://localhost:8101; (MINE)
          if ($request_method = OPTIONS) {
              add_header "Access-Control-Allow-Credentials" "true" always;
              add_header "Access-Control-Allow-Origin"  "https://nighthawkcoders.github.io" always;
              add_header "Access-Control-Allow-Methods" "GET, POST, PUT, DELETE, OPTIONS, HEAD" always;
              add_header "Access-Control-Allow-MaxAge" 600 always;
              add_header "Access-Control-Allow-Headers" "Authorization, Origin, X-Origin, X-Requested-With, Content-Type, Accept" always;
              return 204;
          }
      }
  }
  ```

### Port (Frontend)

Prepare the frontend to access our domain and ports to match our localhost, port 8101 (OURS OURS OURS OURS OURS), and domain settings.

- **assets/api/config.js**:
Changed port to 8101

  ```javascript
  export var pythonURI;
  if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
      pythonURI = "http://127.0.0.1:8101"; 
  } else {
      pythonURI = "https://intertravel.stu.nighthawkcodingsociety.com/";
  }
  ```

## Accessing AWS EC2

Login to AWS Console using our account.
Access EC2 Dashboard and launch an instance.
Select CSP

<!-- ![Our EC2]({{site.baseurl}}/assets/images/fake_ec2.png) -->

Alternatively, use Cockpit:

At cockpit.stu.nighthawkcodingsociety.com
Username is ubuntu
Password hint is 3 Musketeers

<!-- ![Cockpit](https://files.slack.com/files-tmb/TUDAF53UJ-F08BBR3MV8A-a30e06c6f3/image_720.png) -->

## Application Setup

1. **Finding a Port**: Run `docker ps` to make sure port 8101 is open
2. **On localhost setup Docker files using VSCode**: Make sure the Dockerfile and docker-compose.yml match port 8101 on AWS EC2.
- Use docker-compose up in the repo folder
- Access the server after it's done building in browser on localhost:8101

## Server Setup

Clone backend repo: git clone https://github.com/Kiruthic-Selvakumar/travel_backend.git
Navigate to repo: cd travel_backend
# ./scripts/db_init.py
Build site: docker-compose up -d --build
Test site: curl localhost:8101

### Route 53 DNS

Go to AWS Route 53 and setup DNS subdomain for backend server.

### Nginx setup

1. **Navigate to nginx**: `cd /etc/nginx/sites-available`
2. **Create an nginx config file**: `sudo nano travel_backend`
3. **Activate configuration**: `cd /etc/nginx/sites-enabled`, then `sudo ln -s /etc/nginx/sites-available/travel_backend /etc/nginx/sites-enabled`
4. **Validate**: `sudo nginx -t`
5. **Restart nginx**: `sudo systemctl restart nginx`

### Certbot Config

Run command below and follow prompts:
```bash
sudo certbot --nginx
```

### Changing Code will require Deployment Updates

1. **Run git pull before making changes**
2. **Open terminal in VSCode and run python main.py**
3. **Make changes that are needed**
4. **Commit the changes locally**
5. **Test docker-compose up or sudo docker-compose up in VSCode terminal**
6. **Sync change from UI/git push from terminal**

### Pulling Changes into AWS EC2 deployment

1. **Navigate to repo**: `cd ~/travel_backend`
2. **docker-compose down**
3. **git pull**
4. **Rebuild docker container**: `docker-compose up -d --build`

### Troubleshooting checks on AWS EC2

1. **Try to curl**: `curl localhost:8101`
2. **Run docker-compose ps**
3. **Run docker ps**

# AWS Flowchart (How it works/Process)


<h2>Quick Notes on Deployment From Mr. Mort</h2>


<p>In order to login to the deployment server on AWS EC2 you will use the cockpit backdoor.
https://cockpit.stu.nighthawkcodingsociety.com/

The username for the account is "ubuntu".

You will need to DM Mr. Mort if you shared Deployment blog and will be Deployment admin, with the password that has a hint of "3 Musketeers".
</p>

<h2>First time Install</h2>

<h3>1. In your project directory, create a .env file with passwords of the users</h3>

<h3>2. Run ./scripts/db_init.py</h3>

- This will initialize the database and reset all the data tables.

<h3>3. In your repo run Docker commands</h3>

- Run: ```docker-compose build```
- Run: ```docker-compose up -d```

<h3>Test your server</h3>

- Curl provides text response of your requested page

- Look for your application and port: ```docker ps```
- Verify your application is working: ```curl localhost:8101```

<h3>Note</h3>

- Do not put user passwords in your blogs or in your code since it's a security risk
- Do not commit them to GitHub
- Use the ```.env``` files to store passwords. Add ```.env``` to your ```.gitignore``` file.


---

## **NGINX & Certbot Setup**

### **Route 53 DNS**

Go to AWS Route 53 and set up a DNS subdomain for the backend server.

### **NGINX Setup**

1.  **Go to nginx directory and create an Nginx config file**:
    
    ```bash
    cd /etc/nginx/sites-available
    sudo nano travel_backend
    
    ```
    
2.  **Add the following config:**
    
    ```nginx
    server {
        listen 80;
        listen [::]:80;
        server_name https://intertravel.stu.nighthawkcodingsociety.com/;
        location / {
            proxy_pass http://localhost:8101;
            if ($request_method = OPTIONS) {
                add_header "Access-Control-Allow-Credentials" "true" always;
                add_header "Access-Control-Allow-Origin"  "https://nighthawkcoders.github.io" always;
                add_header "Access-Control-Allow-Methods" "GET, POST, PUT, DELETE, OPTIONS, HEAD" always;
                add_header "Access-Control-Allow-MaxAge" 600 always;
                add_header "Access-Control-Allow-Headers" "Authorization, Origin, X-Origin, X-Requested-With, Content-Type, Accept" always;
                return 204;
            }
        }
    }
    
    ```
    
3.  **Save the file** (`Ctrl + X`, then `Y`, then `Enter`).
    
4.  **Activate configuration**:
    
    ```bash
    cd /etc/nginx/sites-enabled
    sudo ln -s /etc/nginx/sites-available/travel_backend /etc/nginx/sites-enabled
    
    ```
    
5.  **Check for all proper configs and restart Nginx**:
    
    ```bash
    sudo nginx -t
    sudo systemctl restart nginx
    
    ```
    
6.  **Test if Nginx is serving requests**:  
    Open **[https://intertravel.stu.nighthawkcodingsociety.com](https://intertravel.stu.nighthawkcodingsociety.com/)** in our browser.
    

----------

### **Certbot Configuration for HTTPS**

Here are all the steps we will follow to install Certbot to deploy our site

1.  **Install Certbot**:
    
    ```bash
    sudo apt-get install certbot python3-certbot-nginx
    ```
    
2.  **Run Certbot to get SSL certificate**:
    
    ```bash
    sudo certbot --nginx
    ```
    
3.  **Follow the prompts**:
    -   Select `https://intertravel.stu.nighthawkcodingsociety.com` from the list.
    -   Choose option `2` because it will redirect us from HTTP to HTTPS, which is more secure.
4.  **Restart Nginx**:
    
    ```bash
    sudo systemctl restart nginx
    ```
    
5.  **Test HTTPS access**:  
    Open **[https://intertravel.stu.nighthawkcodingsociety.com](https://intertravel.stu.nighthawkcodingsociety.com/)** in our browser.

----------

## **Updating Deployment**

### **Changing Code in VSCode**

Steps:
1.  **Run `git pull` before making changes**.
2.  **Open terminal in VSCode and run `python main.py`**.
3.  **Make changes that are needed**.
4.  **Commit the changes locally**.
5.  **Test `docker-compose up` or `sudo docker-compose up` in VSCode terminal**.
6.  **Push changes to GitHub**.

7.  **Rebuild the docker container**:
    
    ```bash
    docker-compose up -d --build
    ```
    

----------

## **Debugging NGINX**

  - If something fails, we will **check Nginx logs**:
    
    ```bash
    sudo tail -f /var/log/nginx/error.log
    ```
    

----------