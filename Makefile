YARN=yarn
NODE=node

.PHONY: test

install: src/env.ts
	$(YARN) install

build: src/env.ts
	$(YARN) run build

build/watch: src/env.ts
	$(YARN) run watch

test:
	$(YARN) test

src/env.ts:
	cp -f ./env.ts.sample $@
