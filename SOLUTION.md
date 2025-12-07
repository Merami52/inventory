# Решение проблемы с Docker-сборкой

## Проблема
При попытке запуска проекта через `docker-compose up --build` возникала следующая ошибка:

```
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./: 
failed to compute cache key: failed to calculate checksum of ref: "/app/.next/standalone": not found
```

## Причина
Ошибка происходила потому, что в Dockerfile.frontend предполагалось, что после выполнения `pnpm run build` будет создана директория `/app/.next/standalone`, но в конфигурации Next.js не была указана опция `output: 'standalone'`.

## Решение
Мы добавили опцию `output: 'standalone'` в файл `next.config.mjs`, что заставляет Next.js генерировать standalone версию приложения, подходящую для Docker-развертывания.

Файл до изменений:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
```

Файл после изменений:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
```

После этого изменения Docker-сборка должна проходить успешно.