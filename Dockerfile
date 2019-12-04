FROM ubuntu:18.04

LABEL "com.github.actions.name"="test"
LABEL "com.github.actions.description"="test."

RUN apt-get update \
    && apt-get install wget -y \
    && wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb \
    && dpkg -i packages-microsoft-prod.deb \
    && apt-get update \
    && apt-get install -y powershell

ADD test.ps1 /test.ps1
ENTRYPOINT ["pwsh", "/test.ps1"]
