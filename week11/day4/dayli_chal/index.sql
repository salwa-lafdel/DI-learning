CREATE FUNCTION calculate_order_total(order_id INT) RETURNS DECIMAL(10,2)
BEGIN
    DECLARE total DECIMAL(10,2);
    SELECT SUM(price) INTO total
    FROM items
    WHERE order_id = order_id;
    RETURN total;
END;

CREATE FUNCTION calculate_user_order_total(user_id INT, order_id INT) RETURNS DECIMAL(10,2)
BEGIN
    DECLARE total DECIMAL(10,2);
    SELECT SUM(i.price) INTO total
    FROM items AS i
    JOIN product_orders AS po ON i.order_id = po.order_id
    WHERE po.user_id = user_id AND po.order_id = order_id;
    RETURN total;
END;



