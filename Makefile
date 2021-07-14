YARN=yarn
NODE=node

.PHONY: test

install:
	$(YARN) install

build:
	$(YARN) run build

build/watch:
	$(YARN) run watch


test:
	$(YARN) test
