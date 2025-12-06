# StoreAdmin - Многосервисная система управления магазином

Это многосервисное веб-приложение, построенное с использованием современных технологий и архитектурных паттернов. Проект включает в себя фронтенд на Next.js/React, бэкенд на Python (FastAPI), API-шлюз и несколько баз данных (PostgreSQL, MySQL, MongoDB).

## Архитектура

Проект использует микросервисную архитектуру с API Gateway, включающую:
- Frontend: Next.js 14 с TypeScript
- API Gateway: FastAPI
- Backend сервисы: Python (FastAPI)
- Базы данных: PostgreSQL, MySQL, MongoDB
- Контейнеризация: Docker
- Оркестрация: Kubernetes
- CI/CD: Jenkins

## Технологии

- **Языки программирования**: Python, JavaScript, TypeScript
- **Фреймворки**: Next.js, React, FastAPI
- **Базы данных**: PostgreSQL, MySQL, MongoDB
- **Инструменты**: Docker, Kubernetes, Jenkins, Git
- **Дополнительно**: Tailwind CSS, Radix UI, Supabase

## Структура проекта

```
/workspace/
├── api-gateway/          # API Gateway сервис
├── backend/              # Backend сервис на FastAPI
├── app/                  # Frontend на Next.js
├── k8s/                  # Kubernetes конфигурации
├── scripts/              # SQL скрипты инициализации
├── Dockerfile.*          # Docker файлы для сервисов
├── docker-compose.yml    # Docker Compose конфигурация
├── diagrams/             # Диаграммы UML, DFD, ER
└── ...
```

## Установка и запуск

### Предварительные требования

- Docker (v20.10+)
- Docker Compose (v2.0+)
- Node.js (v18+)
- pnpm (рекомендуется)

### Запуск с использованием Docker Compose (рекомендуется)

1. Клонируйте репозиторий:
```bash
git clone <URL_репозитория>
cd workspace
```

2. Скопируйте файл конфигурации:
```bash
cp .env.example .env
# При необходимости отредактируйте .env под свои требования
```

3. Запустите все сервисы:
```bash
docker-compose up --build
```

4. Приложение будет доступно по адресу: http://localhost:3000
   - API Gateway: http://localhost:8080
   - Backend: http://localhost:8000
   - Jenkins: http://localhost:8081

### Локальный запуск (для разработки)

1. Установите зависимости для фронтенда:
```bash
cd app
npm install
# или
pnpm install
```

2. Установите Python зависимости:
```bash
cd backend
pip install -r requirements.txt

cd ../api-gateway
pip install -r requirements.txt
```

3. Запустите базы данных с помощью Docker:
```bash
docker-compose up -d db mysql mongo
```

4. Запустите backend сервис:
```bash
cd backend
python main.py
```

5. Запустите API Gateway:
```bash
cd api-gateway
python main.py
```

6. В новом терминале запустите фронтенд:
```bash
cd app
npm run dev
# или
pnpm dev
```

Приложение будет доступно по адресу: http://localhost:3000

## Конфигурация

### Переменные окружения

Для запуска приложения требуются следующие переменные окружения:

#### Frontend (.env.local в папке app)
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_API_URL=http://localhost:8080
```

#### Backend (.env в папке backend)
```
DATABASE_URL=postgresql://user:password@localhost:5432/storeadmin
DATABASE_URL_MYSQL=mysql://user:password@localhost:3306/storeadmin
DATABASE_URL_MONGO=mongodb://localhost:27017/storeadmin
```

#### API Gateway (.env в папке api-gateway)
```
BACKEND_SERVICE_URL=http://localhost:8000
FRONTEND_URL=http://localhost:3000
```

#### Docker Compose (.env в корне проекта)
Для удобства в корне проекта создан файл `.env.example`, который можно скопировать в `.env` и настроить под свои нужды:

```bash
cp .env.example .env
# Затем отредактируйте .env под свои требования
```

## Использование

После запуска приложения:

1. Перейдите на http://localhost:3000
2. Используйте веб-интерфейс для управления магазином
3. Данные будут храниться в PostgreSQL, MySQL и MongoDB
4. API Gateway будет направлять запросы к соответствующим микросервисам
5. Для администрирования CI/CD перейдите на http://localhost:8081 (Jenkins)

## Kubernetes

Для запуска в Kubernetes:
```bash
kubectl apply -f k8s/
```

## CI/CD

Jenkins конфигурация включена в docker-compose.yml и может быть использована для автоматизации процессов сборки и деплоя.

## Диаграммы

Диаграммы архитектуры находятся в папке `/diagrams/` и включают:
- UML диаграммы
- DFD (Data Flow Diagram)
- ER диаграммы

## Управление базами данных

SQL скрипты для инициализации базы данных находятся в папке `/scripts/`:
- `001_create_database_schema.sql` - создание схемы
- `002_create_user_trigger.sql` - триггера
- `003_seed_data.sql` - тестовые данные
- `004_create_test_user.sql` - создание тестового пользователя

## Архитектурные паттерны

Проект реализует следующие архитектурные паттерны:
- Микросервисная архитектура: каждый компонент приложения (фронтенд, бэкенд, шлюз) разработан как отдельный сервис
- API Gateway: централизованная точка входа для всех запросов клиента
- MVC (Model-View-Controller): используется в бэкенд-сервисах для разделения логики