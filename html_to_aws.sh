aws s3 sync --include "*.js" --include "*.html" --include "static/*" --exclude "venv/*" --exclude "*.bat" --exclude "*.swp" --exclude "*.sh" . s3://converter.korneri.fi --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --region eu-central-1 --profile reflektori_dev
