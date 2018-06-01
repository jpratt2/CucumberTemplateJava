SET COMMAND="mvn clean test -P chrome"

START POWERSHELL -NoExit %COMMAND% || CMD /K %COMMAND%

