use appinta_db;


-- REMOVE OLD TABLES

DROP TABLE IF EXISTS PURCHASE;
DROP TABLE IF EXISTS PRODUCT_CART;
DROP TABLE IF EXISTS PAYMENT_METHOD;
DROP TABLE IF EXISTS PRODUCT;
DROP TABLE IF EXISTS CATEGORY;
DROP TABLE IF EXISTS CART;
DROP TABLE IF EXISTS USER;


-- CREATE TABLES
create table CATEGORY (
    id INT AUTO_INCREMENT,
    title VARCHAR (50),
    created_at DATETIME,
    updated_at DATETIME,
    PRIMARY KEY (id)
);

create table PRODUCT (
    id INT AUTO_INCREMENT,
    category_id INT,
    name VARCHAR(50) NOT NULL,
    descriptions VARCHAR (255),
    price DECIMAL (7,2) NOT NULL,
    stock SMALLINT NOT NULL,
    qr_code VARCHAR(500),
    discount TINYINT UNSIGNED,
    img VARCHAR(255),
    created_at DATETIME,
    updated_at DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY(category_id) REFERENCES CATEGORY(id)
);

create table USER (
    id INT AUTO_INCREMENT,
    name VARCHAR (50) NOT NULL,
    surname VARCHAR (50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    birth_date DATE NOT NULL,
    password VARCHAR (255),
    role TINYINT UNSIGNED,
    avatar VARCHAR(255),
    created_at DATETIME,
    updated_at DATETIME,
    PRIMARY KEY (id)
);

create table CART (
    id INT AUTO_INCREMENT,
    user_id INT,
    discount TINYINT UNSIGNED,
    total DECIMAL (7,2) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(user_id) REFERENCES USER(id)
);

create table PRODUCT_CART (
    id INT AUTO_INCREMENT,
    product_id INT,
    cart_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY(product_id) REFERENCES PRODUCT(id),
    FOREIGN KEY(cart_id) REFERENCES CATEGORY(id)
);

create table PAYMENT_METHOD (
    id INT AUTO_INCREMENT,
    name VARCHAR (50),
    commission DECIMAL (4,2) NOT NULL,
    PRIMARY KEY(id)
);

create table PURCHASE (
    id INT AUTO_INCREMENT,
    user_id INT,
    paymente_method_id INT,
    datetime DATETIME NOT NULL,
    payment_status TINYINT UNSIGNED,
    created_at DATETIME,
    updated_at DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY(user_id) REFERENCES USER(id),
    FOREIGN KEY(paymente_method_id) REFERENCES PAYMENT_METHOD (id)
);
