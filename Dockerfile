FROM node AS build

WORKDIR /client

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn run build

FROM nginx:stable-alpine
COPY --from=build /client/dist/ /usr/share/nginx/html
COPY --from=build /client/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]