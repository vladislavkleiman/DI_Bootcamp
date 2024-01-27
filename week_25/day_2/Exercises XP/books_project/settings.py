INSTALLED_APPS = [
    # ...
    'books',
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'books_xp',
        'USER': 'vl',
        'PASSWORD': 'rgawREGQWRHGRH',
        'HOST': 'db_BOOK',
        'PORT': '5432',
    }
}
