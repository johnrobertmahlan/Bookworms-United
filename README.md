# Bookworms United

### About the App

I love to read. But I think I might love going to bookstores even more. If you ask me about my favorite cities, for example, I will probably rank them based on the quality of their bookstores. 

Unfortunately, *finding* good bookstores is difficult. Sometimes I hear about a great bookstore from other book lovers, and sometimes I'm lucky enough to stumble across one in my wanderings. But unlike with restaurants, for example, which have dedicated apps to finding good ones in your area, there is no similar app for bookstores. There is nowhere for fellow book lovers to go to share their experiences with a particular bookstore.

Enter **Bookworms United**. The idea for the app is simple: collect some basic information about bookstores (name, location, popular genres, etc.), and allow users to post their opinions about those bookstores. The goal is to make it easier for book lovers to find new bookstores.

### Getting Started

Go [here](https://bookworms-united.herokuapp.com/) to check out the app!

### Screenshots

The screenshots below were taken on June 18, 2020. The specific date is important as a reference point, since future work on the app will no doubt increase the number of bookstores one can find on the app as well as the appearance and functionality of the app.

1. Here is a screenshot of the landing page. For now it simply says 'Welcome'. This is a placeholder for what a future version of the app would display. I discuss my vision for that later.

![Bookworms United](https://i.imgur.com/waB16m0.jpg)

2. Here is a screenshot of the About page. I felt strongly that having an About page was more professional than explaining the idea behind the app on the landing page. It also will make it easier to scale the app.

![About Bookworms United](https://i.imgur.com/josKmsT.jpg)

3. Here is a screenshot of how the Bookstores index page looks when a user is *not* logged in. These users can see everything that a logged-in user can see *except* for one thing: a button inviting them to add a bookstore to the list. Adding bookstores to the database is a functionality reserved only for users who are logged in. At the time of writing, the display is a simple table. As I discuss below, I eventually want to display bookstores in a more attractive way.

![Bookstores Index (Not Logged In)](https://i.imgur.com/yGMdsG5.jpg)

4. Here is a screenshot of how the Bookstores index page looks when a user *is* logged in. Notice the button at the bottom of the table inviting the user to add a bookstore to the list.

![Bookstores Index (Logged In)](https://i.imgur.com/7Z9FyEC.jpg)

5. Here is a screenshot of a single bookstore's page when a user is *not* logged in. Users who are not logged in are able to see basic information about the bookstore as well as any reviews of that bookstore that have been written. But they are not offered the opportunity to write their own reviews, nor can they see who wrote the existing reviews.

![Single Bookstore View (Not Logged In)](https://i.imgur.com/QasmcnW.jpg)

6. Here is a screenshot of a single bookstore's page when a user *is* logged in. Users who are logged in have the ability to write their own review. I have restricted the functionality so that a user cannot write multiple reviews of the same bookstore. They *can*, however, edit or delete their existing review. If they delete their review, they will be able to write a new one.

![Single Bookstore View (Logged In)](https://i.imgur.com/TGqzT96.jpg)

7. Here is a screenshot of the page that allows users who are logged in to add a new bookstore to the database.

![Add Bookstore Form](https://i.imgur.com/oB04SX6.jpg)

8. Here is a screenshot of the page that allows users to edit their existing review. Since this takes the user to a new page, I included the content of the original review for the user to refer back to when making edits. I also give them the opportunity to delete the review entirely (which is also available on the page displaying a single bookstore). I thought giving them the opportunity to delete the review in multiple places made the app more flexible and easier to navigate.

![Edit Review Page](https://i.imgur.com/ycpe9r2.jpg)

9. Here is a screenshot of the contact page. This is available to any user, and it allows them to send me an email directly.

![Contact Form](https://i.imgur.com/DCrbDMW.jpg)

10. Here is a screenshot of the success page that a user sees when they've successfully sent me an email. Ideally, this would simply be a popup after submission of the form, but for now, having a separate page that tells the user their email was sent successfully and invites them to navigate elsewhere on the site provides a smooth user experience.

![Successful Email Page](https://i.imgur.com/HdN07Jo.jpg)

### How This Project Was Built

This project is a full-stack web application built using the following technologies:

* HTML
* CSS
* JavaScript
* NodeJS (including middleware such as PassportJS and Nodemailer, among others)
* Express
* MongoDB (database hosted on MongoDB Atlas)
* GoogleFonts

### Future Plans for this Project

There are a number of ways that I could improve this project with additional work.

The simplest improvement would be to allow users to upload photographs of bookstores. This might take two different directions. First, I initially thought that it would make the most sense to allow users to upload a single photograph upon creation of the bookstore in the database. This photo would presumably be something like an image of the store from the outside, which would then be displayed on the store's detail page.

But it would also be nice to allow users to share photos of the store in their reviews. If, for example, a user really liked the coffee shop in the store, they might take a photo of it to give other users a sense of the atmosphere there.

Either improvement (or both!) could be implemented using the Multer library for NodeJS.

I would also like to improve the display on the bookstores index page itself. Right now the display is just a table containing key information about each bookstore. But if images of each store were uploaded per the above improvement, then something like a responsive slider might be a more attractive option. If the database were large enough, however, a responsive slider might be tedious for users. That brings me to the main improvement I want to make to the app.

The motivation behind the app stems from my own experience moving and traveling frequently. Finding good bookstores really is difficult, and the purpose of this app is to make that process easier. But right now, the app has a small database of stores in Denver, which is where I currently live. A future version of the app should have a more complex database. 

The current data structure for the app looks like this:

![ERD](https://i.imgur.com/6ChmFgi.jpg)

As you can see, there are three main data entities:

1. User
2. Bookstore
3. Review

Users can add many bookstores to the database, as well as write reviews of many different bookstores. Bookstores, in turn, can have many reviews. These data entities are therefore related in interesting ways.

Although users can add many bookstores to the database, bookstore objects do not have a `createdBy` property storing who created them. Since a bookstore cannot be edited or deleted once created, knowing which user created the bookstore is not essentially. Functionally, then, users and bookstores are independent data entities.

By contrast, reviews are *embedded* in bookstores: when a user writes a review, that review is pushed into an array in the bookstore object. Reviews also *reference* users in their `createdBy` property, which is set to a user's `GoogleID` property. Thus, reviews are doubly dependent: they depend on users to create them, but they also must be attached to a particular bookstore.

A future version of the app would add a fourth main data entity:

4. City

Again, the primary motivation behind the app is to allow travelers or people new to a city to find great bookstores with ease. Thus, a chief data point for the app would have to be cities, which in turn would be related to bookstores in the database.

In this future version of the app, a user would arrive on the landing page and, instead of seeing a welcome message, would be prompted to select a city (probably in a dropdown menu). Once that city has been selected, the app would function much as it does now, allowing the user to browse bookstores in that city and read or write reviews of those bookstores.

I would have to think about the best way to implement this data structure, but it seems to me right now that the best strategy would be to embed bookstores in cities in much the same way that reviews are currently embedded in bookstores. Both relations are one:many, because just as each store can have multiple reviews (but a review is always of exactly one bookstore), each city can have multiple bookstores (but a bookstore is always in exactly one city). Each city would thus have a property called `bookstores` that would consist of an array containing all the bookstores in that city. When a user adds a new bookstore to the database, the information about that bookstore would be pushed to this array in the city object.

With this additional functionality, the app would truly serve its purpose.