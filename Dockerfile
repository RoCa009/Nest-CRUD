FROM node:12

#Creación del directorio de la app (Dentro del contenedor)
WORKDIR /usr/src/app

#Copiar el package.json
COPY package*.json ./

#Se procede a instalar npm
RUN npm install 

#Bundle App source : )
COPY . .

#Creación del comando para hacer el build de la app
RUN npm run build

ENV PORT=8080 

#Mapear al puerto 8080 para el docker daemon 
EXPOSE 8080

#Sólo puede haber 1 por Dockerfile y le dice al contenedor como correr la app mediante EXEC FORM 
CMD [ "node", "dist/main" ]

