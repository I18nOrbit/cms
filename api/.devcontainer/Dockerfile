ARG DEBIAN_FRONTEND=noninteractive
ARG VARIANT=bullseye

FROM mcr.microsoft.com/vscode/devcontainers/base:${VARIANT}

# Installing dependencies required for nvm and node
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    curl \
    ca-certificates \
    git \
    && rm -rf /var/lib/apt/lists/*

# Installing nvm, node, and npm
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 20.11.0

# Install nvm
# Install node and npm
RUN mkdir -p $NVM_DIR \
    && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# Adding node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/versions/node/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH
ENV YARN_CACHE_FOLDER /home/vscode/.cache/yarn

# Allow vscode installs on npm global without sudo
RUN mkdir -p $YARN_CACHE_FOLDER

RUN chown -R vscode:vscode $NVM_DIR
RUN chown -R vscode:vscode $YARN_CACHE_FOLDER

# Setting the default user to vscode
USER vscode

# Installing Yarn globally using npm
RUN npm install -g yarn



