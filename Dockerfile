# 使用 Node.js LTS 版本
FROM node:20-alpine

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install --production

# 複製應用程式碼
COPY . .

# 暴露 port 3000
EXPOSE 3000

# 啟動應用
CMD ["node", "server.js"]
