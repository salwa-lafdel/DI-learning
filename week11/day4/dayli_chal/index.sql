-- Create product_orders table
CREATE TABLE product_orders (
  order_id INT PRIMARY KEY,
  order_date DATE,
  customer_id INT 

);

-- Create items table
CREATE TABLE items (
  item_id INT PRIMARY KEY,
  order_id INT,
  item_name VARCHAR(255),
  price DECIMAL(10, 2) 
  FOREIGN KEY (order_id) REFERENCES product_orders (order_id)
);
CREATE FUNCTION calculate_order_total(order_id INT) RETURNS DECIMAL(10, 2)
BEGIN
    DECLARE total DECIMAL(10, 2);
    SELECT SUM(price) INTO total
    FROM items
    WHERE order_id = order_id;
    RETURN total;
END;





