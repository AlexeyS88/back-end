# Back-End JavaScript Project

## Описание

Этот проект представляет собой серверную часть приложения, написанную на JavaScript.

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone <URL репозитория>
   ```
2. Перейдите в директорию проекта:
   ```bash
   cd back-end
   ```
3. Установите зависимости:
   ```bash
   npm install
   ```
4. Добавьте порт и базу данных:
   ```bash
      touch .env
      echo "PORT = {номер}" > .env
      echo "DATABASE_URL="postgresql://postgres:{password}@localhost:{PORT}/{название базы}?schema=public" >> .env
   ```

## Использование

Запустите сервер:

```bash
npm run dev
```

## Вклад

Если вы хотите внести вклад в проект, пожалуйста, создайте pull request.

## Лицензия

Этот проект лицензирован под лицензией MIT.
