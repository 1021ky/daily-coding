#/bin/sh
docker build . -t myapp
docker run  --rm -it --name myapp myapp