# DevTinder Frontend Deployment on AWS EC2

## AWS Setup

1. Sign up/Login to AWS
2. Launch a new EC2 Instance (Ubuntu)
3. Download the .pem key file
4. Open terminal and go to the folder containing the key

```bash
ssh -i "devTinder-secret.pem" ubuntu@<EC2_PUBLIC_IP>
```

---

## Install Node.js

```bash
sudo apt update

# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# Load NVM
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"

# Verify NVM
nvm --version

# Install Node 20
nvm install 20.20.2

# Use Node 20
nvm use 20

# Make default
nvm alias default 20

# Verify
node -v
npm -v
```

---

## Install Git

```bash
sudo apt install git -y
git --version
```

---

## Clone Projects

```bash
git clone <backend_repo_url>
git clone <frontend_repo_url>
```

---

# Frontend Deployment (devTinder-web)

### Go to Frontend Folder

```bash
cd devTinder-web
```

### Install Dependencies

```bash
npm install
```

### Build Project

```bash
npm run build
```

This creates a production build inside:

```bash
dist/
```

---

## Install Nginx

```bash
sudo apt update
sudo apt install nginx -y
```

### Start Nginx

```bash
sudo systemctl start nginx
```

### Enable Nginx on Reboot

```bash
sudo systemctl enable nginx
```

---

## Copy Build Files to Nginx

Go to Nginx root:

```bash
cd /var/www/html
```

Copy frontend build files:

```bash
sudo cp -r ~/devTinder-web/dist/* /var/www/html/
```

Verify:

```bash
ls
```

Expected:

```bash
assets
favicon.svg
icons.svg
index.html
```

---

## Security Group

Enable these inbound ports:

```text
22   SSH
80   HTTP
443  HTTPS
```

---

## Restart Nginx

```bash
sudo systemctl restart nginx
```

---

## Access Application

```text
http://<EC2_PUBLIC_IP>
```

If everything is configured correctly, the DevTinder frontend will be live.
