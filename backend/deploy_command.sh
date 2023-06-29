python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --noinput
gunicorn core.wsgi --bind 0.0.0.0:8003 --access-logfile -  --error-logfile -
