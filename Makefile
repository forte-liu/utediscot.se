LESSC = lessc

CSS_EXTERNAL = bower_components/bootstrap/dist/css/bootstrap.css

LESS_INPUT = $(shell find static/less -name "*.less")

CSS_OUTPUT = static/css/style.css

all:
	$(LESSC) $(LESS_INPUT) $(CSS_OUTPUT)

watch: all
		@echo Waiting for changes...
		@watchmedo shell-command \
					--wait \
					--recursive \
					--patterns="*.less" \
					--ignore-patterns="*build*" \
					--command="make all"

clean:
	rm build/*
