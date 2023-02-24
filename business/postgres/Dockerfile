FROM postgis/postgis

COPY ./init-scripts /docker-entrypoint-initdb.d/

RUN chmod -R +x /docker-entrypoint-initdb.d/
RUN chown -R postgres:postgres /docker-entrypoint-initdb.d/