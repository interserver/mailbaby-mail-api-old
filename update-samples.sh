#!/bin/bash
wget https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/3.0.25/swagger-codegen-cli-3.0.25.jar -O swagger-codegen-cli.jar
for i in $(java -jar swagger-codegen-cli.jar langs 2>&1|cut -d\[ -f2-|cut -d\] -f1|sed s#","#""#g); do
	mkdir -p samples/$i; java -jar swagger-codegen-cli.jar generate -i https://relay.mailbaby.net/openapi.yaml -l $i -o samples/$i;
	 echo finished $i;
done
swagger-codegen-cli.jar
