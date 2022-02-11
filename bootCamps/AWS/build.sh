docker build -t bia .
aws ecr get-login-password --region us-east-2 --profile bia | docker login --username AWS --password-stdin 281796985488.dkr.ecr.us-east-2.amazonaws.com/bia
docker tag bia:latest 281796985488.dkr.ecr.us-east-2.amazonaws.com/bia:latest
docker push 281796985488.dkr.ecr.us-east-2.amazonaws.com/bia:latest