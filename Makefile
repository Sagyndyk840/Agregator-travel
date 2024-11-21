start:
	docker compose up -d

up-build:
	docker compose up -d --build

stop:
	docker compose down --remove-orphans

restart:
	make stop
	make start
