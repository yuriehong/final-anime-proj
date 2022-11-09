# README
Description:
An anime list app where users can search an extensive anime list to add animes to their list, rate animes, add reviews, edit reviews, delete reviews which deletes the anime from their list, and see the top animes for all the users based on their reviews.
![image](https://user-images.githubusercontent.com/54913649/200929042-f75d2ca4-fe75-464b-b1d1-de227771371e.png)

![image](https://user-images.githubusercontent.com/54913649/200929314-83335034-9115-44d2-8e22-6e64c8a1d212.png)

•install postgresql:

$ sudo apt update

$ sudo apt install postgresql postgresql-contrib libpq-dev

start the postgresql service: $ sudo service postgresql start

Create a database user so that you are able to connect to the database from Rails:

run $ whoami to check your operating system username ("username")

create a user by running $ sudo -u postgres -i

$ createuser -sr "username"
•run bundle install

•run rails s to start up the server

•run npm install, npm start --prefix client to start up the backend

•This application uses Rails 7.
