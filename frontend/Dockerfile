FROM node:alpine
# EXPOSE 3000
ENV PORT 3000

WORKDIR /usr/src/app

COPY package*.json ./

COPY ./ ./
RUN npm install

# COPY ./ ./

# ENV NODE_ENV production

COPY . .

CMD ["npm", "run", "dev"]