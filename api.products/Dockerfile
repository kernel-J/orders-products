FROM ruby:3.1.0

RUN apt-get update
RUN apt-get install -y ruby-mysql2 libmariadb-dev-compat libmariadb-dev

WORKDIR /api.products

COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock

RUN bundle install
COPY . .

ENTRYPOINT [ "bin/rails" ]
CMD ["s", "-b", "0.0.0.0"]

EXPOSE 3001