FROM nginx:alpine
COPY /dist/stakater-ui /usr/share/nginx/html
EXPOSE 80