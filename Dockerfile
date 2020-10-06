FROM python:3.8

WORKDIR /usr/src/flask_credit

RUN pip install Flask

COPY . .

CMD ["python", "flask_credit.py"]

