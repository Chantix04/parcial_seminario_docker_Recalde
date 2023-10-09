# parcial_seminario_docker_Recalde

Para poder hacer funcionar esta app, debemos tener instalado node:18.15 en nuestro Docker. Nos posicionamos en la carpeta app y colocamos el comando npm i para instalar las dependencias

Primero, nos posicionaremos en la carpeta app con la terminal, luego colocaremmos el comando docker build -t parcial
Después, nos posicionaremos una carpeta antes con cd .. y el siguiente comando es: docker stack deploy -c argentina_news.yml service_parcial

Para comprobar que todo esté funcionando, nos dirigimos al navegador y colocamos localhost:3000/ para ver que todo funcione correctamente.

Muchas gracias!
#Apruebemeprofe
