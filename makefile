#MakeFile to build and deploy the Sample US CENSUS Name Data using ajax
# For CSC3004 Software Development

# Put your user name below:
USER= braunk

CC= g++

#For Optimization
#CFLAGS= -O2
#For debugging
CFLAGS= -std=c++11

RM= /bin/rm -f

all: PutHTML

PutHTML:
        cp cv.js /var/www/html/class/softdev/$(USER)
        cp cv.html /var/www/html/class/softdev/$(USER)
        cp style.css /var/www/html/class/softdev/$(USER)

        echo "Current contents of your HTML directory: "
        ls -l /var/www/html/class/softdev/$(USER)

