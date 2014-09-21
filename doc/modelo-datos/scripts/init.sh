#!/bin/sh

printf "(!) Please runme as a root privileged user\n"

if [ $# -ne 3 ]; then
	echo "Wrong parameters number"
    echo "(!) Usage: sh all.sh DBNAME USER SCHEMA"
    exit 1
fi


sed -i -e 's/<DBNAME>/'$1'/g' -e 's/<USER>/'$2'/g' -e 's/<SCHEMA>/'$3'/g' *.sql

rm -rf init.log
printf "~~~~~~~~~~~~~~~~~~~~~\n" >> init.log
printf " DB Installation Log \n" >> init.log
printf "~~~~~~~~~~~~~~~~~~~~~\n">> init.log

printf "~~~~~~~~~~~~~~~~~~~~~~~~\n"
printf " Creating DB and Schema \n"
printf "~~~~~~~~~~~~~~~~~~~~~~~~\n"
(psql -h localhost -U postgres -f init_db.sql) >> init.log 2>&1


cat << EOF

~~~~~~~~~~~~~~~
Useful Commands
~~~~~~~~~~~~~~~

	psql -h localhost -U $2 -d $1
	psql -h <IP Address> -U $2 -d $1
	set search_path TO $3;

	For more detail see  :: all.log :: file
EOF

sed -i -e 's/'$1'/<DBNAME>/g' -e 's/'$2'/<USER>/g' -e 's/'$3'/<SCHEMA>/g' *.sql
printf "\n"

