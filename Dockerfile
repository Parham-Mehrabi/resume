FROM python:3.8-slim-buster

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app
COPY ./backend /app/
RUN apt update
RUN apt install -y gunicorn
RUN pip3 install --upgrade pip
RUN pip3 install -r ./req.txt
