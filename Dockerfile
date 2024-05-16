FROM mongo
COPY *.json .
EXPOSE 27017
CMD ["mongod"]
