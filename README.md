#  Тестовое задание
1.1, можно вынести event_id, event_date в отдельную таблицу. Далее сделать отдельную таблицу для билетов, ticket_type (adult, kid, льготный, групповой), будет ещё поле price и ссылка на таблицу events (event_id). Далее таблица orders, где есть user_id, created, barcode и доп таблица для связи orders и tickets. Equal_price избыточен, но можно хранить для оптимизации. 

По поводу 1.2, можно перенести barcode в связующую таблицу, и убрать оттуда quantity.

Далее идут файлы программы задания 2.
