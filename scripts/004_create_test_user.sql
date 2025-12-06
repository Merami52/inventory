-- Создание тестового пользователя для быстрого входа в систему
-- Email: admin@storeadmin.com
-- Password: admin123456

-- Примечание: Этот скрипт создает пользователя через Supabase Auth
-- Пароль будет автоматически хеширован системой Supabase

-- Для создания пользователя вам нужно:
-- 1. Либо зарегистрироваться через форму регистрации (/auth/sign-up)
-- 2. Либо использовать Supabase Dashboard для создания пользователя вручную

-- Альтернатива: выполните следующий код через Supabase Dashboard SQL Editor:
/*
-- Вставка тестового пользователя напрямую в auth.users (только для разработки!)
INSERT INTO auth.users (
  id,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  raw_app_meta_data,
  raw_user_meta_data,
  is_super_admin,
  role
) VALUES (
  gen_random_uuid(),
  'admin@storeadmin.com',
  crypt('admin123456', gen_salt('bf')),
  now(),
  now(),
  now(),
  '{"provider":"email","providers":["email"]}',
  '{}',
  false,
  'authenticated'
);
*/

-- Создание соответствующей записи в таблице admins
-- Сначала получаем ID созданного пользователя
DO $$
DECLARE
  user_id uuid;
BEGIN
  -- Находим пользователя по email
  SELECT id INTO user_id FROM auth.users WHERE email = 'admin@storeadmin.com';
  
  -- Если пользователь существует, создаем запись админа
  IF user_id IS NOT NULL THEN
    INSERT INTO public.admins (id, email, full_name, role, created_at)
    VALUES (
      user_id,
      'admin@storeadmin.com',
      'Test Administrator',
      'admin',
      now()
    )
    ON CONFLICT (id) DO NOTHING;
  END IF;
END $$;
