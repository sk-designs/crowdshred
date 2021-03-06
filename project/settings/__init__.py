import os.path
import sys
PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '../'))

# Include apps on the path
sys.path.insert(0, os.path.join(PROJECT_ROOT, "apps"))

# People who get code error notifications when DEBUG=False
ADMINS = (('Your admin name', 'admin@example.com'),)

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(PROJECT_ROOT, 'unrend_development.db'),
    }
}

# Never deploy a site into production with DEBUG turned on!
DEBUG = True

# Address to use for various automated correspondence from the site manager(s).
DEFAULT_FROM_EMAIL = 'webmaster@example.com'

# Set the subject prefix for email messages sent to admins and managers
EMAIL_SUBJECT_PREFIX = '[unrend] '

# Maximum size (in bytes) before an upload gets streamed to the file system.
FILE_UPLOAD_MAX_MEMORY_SIZE = 5242880

# List of locations of the fixture data files, in search order
FIXTURE_DIRS = ()

# A tuple of strings designating all the enabled applications
INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.admindocs',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.messages',
    'django.contrib.sessions',
    'django.contrib.sites',
    'django.contrib.staticfiles',

    'shredder',
    'social_auth',
)

# The language code for this installation
LANGUAGE_CODE = 'en-us'

# Who should get broken-link notifications when SEND_BROKEN_LINK_EMAILS=True
MANAGERS = ADMINS

# Absolute path to the directory that holds stored files.
MEDIA_ROOT = os.path.join(PROJECT_ROOT, '..', 'uploads')

# URL that handles the media served from MEDIA_ROOT (must end in a slash)
MEDIA_URL = '/uploads/'

# A tuple of middleware classes to use
MIDDLEWARE_CLASSES = (
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
)

# Number of digits grouped together on the integer part of a number
NUMBER_GROUPING = 3

# The full Python import path to the root URLconf
ROOT_URLCONF = 'urls'

# Seed for secret-key hashing algorithms
SECRET_KEY = 'c24dc506a9f892b54475b1a0e99f158b874e6c7e4d24344994'

# The ID of the current site in the django_site database table
SITE_ID = 1

# Absolute path to the directory where collectstatic will collect static files
STATIC_ROOT = ''

# Additional locations the staticfiles app will traverse
STATICFILES_DIRS = (os.path.join(PROJECT_ROOT, 'static'),)

# URL to use when referring to static files located in STATIC_ROOT
STATIC_URL = '/static/'

# URL prefix for CSS, JavaScript and images used by the Django admin.
# Use a trailing slash, and to have this be different from MEDIA_URL
# For integration with staticfiles, this should be  STATIC_URL + 'admin/'.
ADMIN_MEDIA_PREFIX = STATIC_URL + 'admin/'

# Display a detailed report for any TemplateSyntaxError.
TEMPLATE_DEBUG = DEBUG

# List of locations of the template source files, in search order
TEMPLATE_DIRS = (
    os.path.join(PROJECT_ROOT, 'templates'),
)

# A tuple of template loader classes, specified as strings
TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
)

# The time zone for this installation
TIME_ZONE = 'America/Los_Angeles'

# Output the "Etag" header. This saves bandwidth but slows down performance
USE_ETAGS = False

# Display numbers using a thousand separator
USE_THOUSAND_SEPARATOR = True

# Enable Django's internationalization system
USE_I18N = True

# Display numbers and dates using the format of the current locale
USE_L10N = True

TEMPLATE_CONTEXT_PROCESSORS = (
    "django.contrib.auth.context_processors.auth",
    "django.core.context_processors.debug",
    "django.core.context_processors.i18n",
    "django.core.context_processors.media",
    "django.core.context_processors.static",
    "django.contrib.messages.context_processors.messages",
    "django.core.context_processors.request"
)
