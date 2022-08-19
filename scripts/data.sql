-- REMOVE DATA
DELETE FROM USER WHERE ID > 0;
DELETE FROM CATEGORY WHERE ID > 0;
DELETE FROM PRODUCT WHERE ID > 0;
-- ---------------------------------USER----------------------------------------------
insert into user (id, name, surname, email, birth_date, password, role, avatar, created_at,updated_at)
values (null, "Alejandro", "Soares", "alesoares@gmail.com","1994-12-01","$2a$10$Wt.H2RIwWKjL1tpYw/IMAuUsVwQ08//4m.5ZtMJWgFerEHwqvKsDW",2,"1658443651118.jpg",NOW(),null);

-- ------------------------------CATEGORY---------------------------------------------
insert into category (id, title, img, created_at,updated_at)
values (null, "Cervezas","/img/categories/cervezas.jpg",NOW(),null);

insert into category (id, title, img, created_at,updated_at)
values (null, "Pizzas","/img/categories/pizzas.jpeg", NOW(),null);

insert into category (id, title, img, created_at,updated_at)
values (null, "Picadas","/img/categories/picadas.webp", NOW(),null);

insert into category (id, title, img, created_at,updated_at)
values (null, "Vinos","/img/categories/vinos.jpg", NOW(),null);

insert into category (id, title, img, created_at,updated_at)
values (null, "Jugos", "/img/categories/jugos.webp",NOW(),null);

insert into category (id, title, img, created_at,updated_at)
values (null, "Pollos","/img/categories/pollo.jpg", NOW(),null);

----------------------------PRODUCT----------------------------------------------
insert into product (id, category_id, name, descriptions, price, stock, qr_code, discount, img, created_at, updated_at)
values (null, 1,"Cerveza Patagonia","Cerveza ISIDRA",430,50,null,null,"PackIsidrax24Latas473ml.webp",NOW(),null);
insert into product (id, category_id, name, descriptions, price, stock, qr_code, discount, img, created_at, updated_at)
values (null, 1,"Cerveza Patagonia","Cerveza abrazo de oso",450,50,null,null,"CervezaPatagoniaAbrazodeOsoLata473ml.webp",NOW(),null);

insert into product (id, category_id, name, descriptions, price, stock, qr_code, discount, img, created_at, updated_at)
values (null, 1,"Cerveza Patagonia","Cerveza IPA rubia",450,50,null,null,"preview-full-Patagonia_Ipa_con_Sauco_1000_x_2048_accd2e0c-d6ed-4494-9b17-ab454a3585dc.jpg",NOW(),null);

insert into product (id, category_id, name, descriptions, price, stock, qr_code, discount, img, created_at, updated_at)
values (null, 1,"Cerveza Patagonia","Cerveza  Bohemian Pilsener",450,50,null,null,"Patagonia_BohemianPilsener_410ml_1000x1000px.webp",NOW(),null);

insert into product (id, category_id, name, descriptions, price, stock, qr_code, discount, img, created_at, updated_at)
values (null, 1,"Cerveza Patagonia","Cerveza Amber Lager",450,50,null,null,"Patagonia_AmberLager_410ml_1000x1000px.webp",NOW(),null);

insert into product (id, category_id, name, descriptions, price, stock, qr_code, discount, img, created_at, updated_at)
values (null, 2,"Pizza peperoni" , "Variedades de pizzas a tu gusto",900,20,null,null,"pizza-pepperoni.jpg",NOW(),null);

insert into product (id, category_id, name, descriptions, price, stock, qr_code, discount, img, created_at, updated_at)
values (null, 2,"Pizza rucula" , "Variedades de pizzas a tu gusto",950,20,null,null,"pizza-rucula.jpg",NOW(),null);

insert into product (id, category_id, name, descriptions, price, stock, qr_code, discount, img, created_at, updated_at)
values (null, 2,"Pizza con huevo", "Variedades de pizzas a tu gusto",1000,20,null,null,"pizza-huevo.jpg",NOW(),null);

insert into product (id, category_id, name, descriptions, price, stock, qr_code, discount, img, created_at, updated_at)
values (null, 6,"Pollo con ensaladas y papas", "Pollo recien cocinado fresquito",1000,10,null,null,"Roast_Chicken.jpg",NOW(),null);

insert into product (id, category_id, name, descriptions, price, stock, qr_code, discount, img, created_at, updated_at)
values (null, 3,"Picadas varias", "Todo tipo de picada",700,10,null,null,"picadavariada.png",NOW(),null);

insert into product (id, category_id, name, descriptions, price, stock, qr_code, discount, img, created_at, updated_at)
values (null, 3,"Picadas original", "Picadas original",700,10,null,null,"santi-cheese-2.jpg",NOW(),null);

insert into product (id, category_id, name, descriptions, price, stock, qr_code, discount, img, created_at, updated_at)
values (null, 4,"Vino Dada", "Vino Tinto",800,10,null,null,"botella_vino_-a.jpg",NOW(),null);

insert into product (id, category_id, name, descriptions, price, stock, qr_code, discount, img, created_at, updated_at)
values (null, 4,"Vino Leyenda 890 ml", "Vino Blanco",1000,10,null,null,"vino-blanco.webp",NOW(),null);

insert into product (id, category_id, name, descriptions, price, stock, qr_code, discount, img, created_at, updated_at)
values (null, 5,"Jugo natural naranja", "Naturales",500,10,null,null,"jugo-naranja.webp",NOW(),null);

insert into product (id, category_id, name, descriptions, price, stock, qr_code, discount, img, created_at, updated_at)
values (null, 5,"Jugo natural naranja-kiwi", "Naturales",500,10,null,null,"jugo-kiwi-naranja.jpg",NOW(),null);

insert into product (id, category_id, name, descriptions, price, stock, qr_code, discount, img, created_at, updated_at)
values (null, 5,"Jugo natural anana", "Naturales",500,10,null,null, "anana.jpg",NOW(),null);

insert into product (id, category_id, name, descriptions, price, stock, qr_code, discount, img, created_at, updated_at)
values (null, 5, "Jugo natural limon", "Naturales",500,10,null,null, "limon.jpg",NOW(),null);

insert into product (id, category_id, name, descriptions, price, stock, qr_code, discount, img, created_at, updated_at)
values (null, 5, "Jugo natural Sandia", "Naturales",500,10,null,null, "sandiazumo1.jpg",NOW(),null);
