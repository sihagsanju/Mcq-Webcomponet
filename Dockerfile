FROM node:11.15.0-alpine as build-stage
WORKDIR /app
COPY package*.json /app/
RUN yarn install
COPY ./ /app/
RUN yarn run build --prod --output-path=./dist/out

FROM nginx:1.15.0-alpine
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]