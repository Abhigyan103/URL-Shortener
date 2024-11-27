#Prisma Notes
npx prisma init --datasource-provider postgresql
npx prisma migrate dev --name init
npx prisma generate
sudo -i -u postgres
psql
createdb url-shortener
psql -d url-shortener