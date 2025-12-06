-- Insert categories
INSERT INTO public.categories (id, name, description) VALUES
  ('550e8400-e29b-41d4-a716-446655440001', 'Electronics', 'Electronic devices and accessories'),
  ('550e8400-e29b-41d4-a716-446655440002', 'Clothing', 'Fashion and apparel'),
  ('550e8400-e29b-41d4-a716-446655440003', 'Books', 'Books and educational materials'),
  ('550e8400-e29b-41d4-a716-446655440004', 'Home & Garden', 'Home improvement and garden supplies'),
  ('550e8400-e29b-41d4-a716-446655440005', 'Sports', 'Sports equipment and accessories')
ON CONFLICT DO NOTHING;

-- Insert products
INSERT INTO public.products (name, description, sku, category_id, price, cost, quantity, status) VALUES
  ('Laptop Pro 15"', 'High-performance laptop with 16GB RAM', 'ELEC-LAP-001', '550e8400-e29b-41d4-a716-446655440001', 1299.99, 850.00, 25, 'active'),
  ('Wireless Mouse', 'Ergonomic wireless mouse with USB receiver', 'ELEC-MOU-001', '550e8400-e29b-41d4-a716-446655440001', 29.99, 12.50, 150, 'active'),
  ('Mechanical Keyboard', 'RGB mechanical gaming keyboard', 'ELEC-KEY-001', '550e8400-e29b-41d4-a716-446655440001', 89.99, 45.00, 80, 'active'),
  ('USB-C Cable 2m', 'Fast charging USB-C to USB-C cable', 'ELEC-CAB-001', '550e8400-e29b-41d4-a716-446655440001', 19.99, 5.00, 200, 'active'),
  ('Smartphone Stand', 'Adjustable aluminum phone stand', 'ELEC-STA-001', '550e8400-e29b-41d4-a716-446655440001', 24.99, 8.00, 120, 'active'),
  
  ('T-Shirt Basic White', 'Cotton basic white t-shirt', 'CLOT-TSH-001', '550e8400-e29b-41d4-a716-446655440002', 19.99, 7.00, 300, 'active'),
  ('Jeans Classic Blue', 'Classic blue denim jeans', 'CLOT-JEA-001', '550e8400-e29b-41d4-a716-446655440002', 59.99, 25.00, 100, 'active'),
  ('Hoodie Gray', 'Comfortable gray cotton hoodie', 'CLOT-HOO-001', '550e8400-e29b-41d4-a716-446655440002', 49.99, 20.00, 75, 'active'),
  ('Sneakers Sport', 'Lightweight sports sneakers', 'CLOT-SNE-001', '550e8400-e29b-41d4-a716-446655440002', 79.99, 35.00, 60, 'active'),
  ('Baseball Cap', 'Adjustable baseball cap', 'CLOT-CAP-001', '550e8400-e29b-41d4-a716-446655440002', 24.99, 10.00, 150, 'active'),
  
  ('The Great Novel', 'Bestselling fiction novel', 'BOOK-NOV-001', '550e8400-e29b-41d4-a716-446655440003', 14.99, 5.00, 200, 'active'),
  ('Programming Guide', 'Complete programming guide for beginners', 'BOOK-PRO-001', '550e8400-e29b-41d4-a716-446655440003', 39.99, 15.00, 80, 'active'),
  ('Cookbook Deluxe', 'International recipes cookbook', 'BOOK-COO-001', '550e8400-e29b-41d4-a716-446655440003', 29.99, 12.00, 50, 'active'),
  
  ('LED Desk Lamp', 'Adjustable LED desk lamp with USB port', 'HOME-LAM-001', '550e8400-e29b-41d4-a716-446655440004', 34.99, 15.00, 90, 'active'),
  ('Plant Pot Set', 'Set of 3 ceramic plant pots', 'HOME-POT-001', '550e8400-e29b-41d4-a716-446655440004', 29.99, 10.00, 120, 'active'),
  ('Tool Set 50pcs', 'Complete home tool set', 'HOME-TOO-001', '550e8400-e29b-41d4-a716-446655440004', 79.99, 35.00, 40, 'active'),
  
  ('Yoga Mat Premium', 'Non-slip premium yoga mat', 'SPOR-YOG-001', '550e8400-e29b-41d4-a716-446655440005', 39.99, 15.00, 100, 'active'),
  ('Dumbbell Set 20kg', 'Adjustable dumbbell set', 'SPOR-DUM-001', '550e8400-e29b-41d4-a716-446655440005', 129.99, 60.00, 30, 'active'),
  ('Resistance Bands', 'Set of 5 resistance bands', 'SPOR-BAN-001', '550e8400-e29b-41d4-a716-446655440005', 24.99, 8.00, 150, 'active'),
  ('Water Bottle 1L', 'Stainless steel water bottle', 'SPOR-BOT-001', '550e8400-e29b-41d4-a716-446655440005', 19.99, 7.00, 200, 'active')
ON CONFLICT DO NOTHING;

-- Insert customers
INSERT INTO public.customers (id, full_name, email, phone, address, city, country) VALUES
  ('650e8400-e29b-41d4-a716-446655440001', 'John Smith', 'john.smith@example.com', '+1-555-0101', '123 Main St', 'New York', 'USA'),
  ('650e8400-e29b-41d4-a716-446655440002', 'Maria Garcia', 'maria.garcia@example.com', '+1-555-0102', '456 Oak Ave', 'Los Angeles', 'USA'),
  ('650e8400-e29b-41d4-a716-446655440003', 'James Wilson', 'james.wilson@example.com', '+44-20-7123-4567', '789 High St', 'London', 'UK'),
  ('650e8400-e29b-41d4-a716-446655440004', 'Emma Brown', 'emma.brown@example.com', '+1-555-0104', '321 Elm St', 'Chicago', 'USA'),
  ('650e8400-e29b-41d4-a716-446655440005', 'Liu Wei', 'liu.wei@example.com', '+86-10-1234-5678', '567 Beijing Rd', 'Beijing', 'China'),
  ('650e8400-e29b-41d4-a716-446655440006', 'Anna Kowalski', 'anna.kowalski@example.com', '+48-22-123-4567', '890 Warsaw St', 'Warsaw', 'Poland'),
  ('650e8400-e29b-41d4-a716-446655440007', 'Carlos Rodriguez', 'carlos.rodriguez@example.com', '+34-91-123-4567', '234 Madrid Ave', 'Madrid', 'Spain'),
  ('650e8400-e29b-41d4-a716-446655440008', 'Yuki Tanaka', 'yuki.tanaka@example.com', '+81-3-1234-5678', '678 Tokyo St', 'Tokyo', 'Japan')
ON CONFLICT DO NOTHING;

-- Insert orders
INSERT INTO public.orders (id, order_number, customer_id, status, total_amount, total_cost, shipping_address, created_at) VALUES
  ('750e8400-e29b-41d4-a716-446655440001', 'ORD-2024-001', '650e8400-e29b-41d4-a716-446655440001', 'delivered', 1349.97, 867.50, '123 Main St, New York, USA', NOW() - INTERVAL '15 days'),
  ('750e8400-e29b-41d4-a716-446655440002', 'ORD-2024-002', '650e8400-e29b-41d4-a716-446655440002', 'delivered', 109.97, 52.00, '456 Oak Ave, Los Angeles, USA', NOW() - INTERVAL '12 days'),
  ('750e8400-e29b-41d4-a716-446655440003', 'ORD-2024-003', '650e8400-e29b-41d4-a716-446655440003', 'shipped', 169.96, 80.00, '789 High St, London, UK', NOW() - INTERVAL '5 days'),
  ('750e8400-e29b-41d4-a716-446655440004', 'ORD-2024-004', '650e8400-e29b-41d4-a716-446655440004', 'processing', 84.97, 35.00, '321 Elm St, Chicago, USA', NOW() - INTERVAL '2 days'),
  ('750e8400-e29b-41d4-a716-446655440005', 'ORD-2024-005', '650e8400-e29b-41d4-a716-446655440005', 'pending', 229.95, 105.00, '567 Beijing Rd, Beijing, China', NOW() - INTERVAL '1 day'),
  ('750e8400-e29b-41d4-a716-446655440006', 'ORD-2024-006', '650e8400-e29b-41d4-a716-446655440001', 'delivered', 44.98, 17.00, '123 Main St, New York, USA', NOW() - INTERVAL '8 days'),
  ('750e8400-e29b-41d4-a716-446655440007', 'ORD-2024-007', '650e8400-e29b-41d4-a716-446655440006', 'shipped', 139.96, 60.00, '890 Warsaw St, Warsaw, Poland', NOW() - INTERVAL '3 days'),
  ('750e8400-e29b-41d4-a716-446655440008', 'ORD-2024-008', '650e8400-e29b-41d4-a716-446655440007', 'processing', 79.98, 32.00, '234 Madrid Ave, Madrid, Spain', NOW() - INTERVAL '1 day')
ON CONFLICT DO NOTHING;

-- Insert order items for order 1
INSERT INTO public.order_items (order_id, product_id, product_name, quantity, price, cost) 
SELECT '750e8400-e29b-41d4-a716-446655440001', id, name, 1, price, cost FROM public.products WHERE sku = 'ELEC-LAP-001';
INSERT INTO public.order_items (order_id, product_id, product_name, quantity, price, cost) 
SELECT '750e8400-e29b-41d4-a716-446655440001', id, name, 1, price, cost FROM public.products WHERE sku = 'ELEC-MOU-001';
INSERT INTO public.order_items (order_id, product_id, product_name, quantity, price, cost) 
SELECT '750e8400-e29b-41d4-a716-446655440001', id, name, 1, price, cost FROM public.products WHERE sku = 'ELEC-CAB-001';

-- Insert order items for order 2
INSERT INTO public.order_items (order_id, product_id, product_name, quantity, price, cost) 
SELECT '750e8400-e29b-41d4-a716-446655440002', id, name, 1, price, cost FROM public.products WHERE sku = 'ELEC-KEY-001';
INSERT INTO public.order_items (order_id, product_id, product_name, quantity, price, cost) 
SELECT '750e8400-e29b-41d4-a716-446655440002', id, name, 1, price, cost FROM public.products WHERE sku = 'ELEC-CAB-001';

-- Insert order items for order 3
INSERT INTO public.order_items (order_id, product_id, product_name, quantity, price, cost) 
SELECT '750e8400-e29b-41d4-a716-446655440003', id, name, 2, price, cost FROM public.products WHERE sku = 'CLOT-TSH-001';
INSERT INTO public.order_items (order_id, product_id, product_name, quantity, price, cost) 
SELECT '750e8400-e29b-41d4-a716-446655440003', id, name, 1, price, cost FROM public.products WHERE sku = 'CLOT-JEA-001';
INSERT INTO public.order_items (order_id, product_id, product_name, quantity, price, cost) 
SELECT '750e8400-e29b-41d4-a716-446655440003', id, name, 1, price, cost FROM public.products WHERE sku = 'CLOT-HOO-001';

-- Insert order items for order 4
INSERT INTO public.order_items (order_id, product_id, product_name, quantity, price, cost) 
SELECT '750e8400-e29b-41d4-a716-446655440004', id, name, 1, price, cost FROM public.products WHERE sku = 'CLOT-SNE-001';
INSERT INTO public.order_items (order_id, product_id, product_name, quantity, price, cost) 
SELECT '750e8400-e29b-41d4-a716-446655440004', id, name, 1, price, cost FROM public.products WHERE sku = 'ELEC-STA-001';

-- Insert order items for order 5
INSERT INTO public.order_items (order_id, product_id, product_name, quantity, price, cost) 
SELECT '750e8400-e29b-41d4-a716-446655440005', id, name, 1, price, cost FROM public.products WHERE sku = 'SPOR-DUM-001';
INSERT INTO public.order_items (order_id, product_id, product_name, quantity, price, cost) 
SELECT '750e8400-e29b-41d4-a716-446655440005', id, name, 2, price, cost FROM public.products WHERE sku = 'SPOR-YOG-001';
INSERT INTO public.order_items (order_id, product_id, product_name, quantity, price, cost) 
SELECT '750e8400-e29b-41d4-a716-446655440005', id, name, 1, price, cost FROM public.products WHERE sku = 'SPOR-BOT-001';

-- Insert order items for order 6
INSERT INTO public.order_items (order_id, product_id, product_name, quantity, price, cost) 
SELECT '750e8400-e29b-41d4-a716-446655440006', id, name, 1, price, cost FROM public.products WHERE sku = 'BOOK-NOV-001';
INSERT INTO public.order_items (order_id, product_id, product_name, quantity, price, cost) 
SELECT '750e8400-e29b-41d4-a716-446655440006', id, name, 1, price, cost FROM public.products WHERE sku = 'BOOK-COO-001';

-- Insert order items for order 7
INSERT INTO public.order_items (order_id, product_id, product_name, quantity, price, cost) 
SELECT '750e8400-e29b-41d4-a716-446655440007', id, name, 1, price, cost FROM public.products WHERE sku = 'HOME-LAM-001';
INSERT INTO public.order_items (order_id, product_id, product_name, quantity, price, cost) 
SELECT '750e8400-e29b-41d4-a716-446655440007', id, name, 2, price, cost FROM public.products WHERE sku = 'HOME-POT-001';
INSERT INTO public.order_items (order_id, product_id, product_name, quantity, price, cost) 
SELECT '750e8400-e29b-41d4-a716-446655440007', id, name, 1, price, cost FROM public.products WHERE sku = 'ELEC-MOU-001';

-- Insert order items for order 8
INSERT INTO public.order_items (order_id, product_id, product_name, quantity, price, cost) 
SELECT '750e8400-e29b-41d4-a716-446655440008', id, name, 2, price, cost FROM public.products WHERE sku = 'BOOK-PRO-001';
