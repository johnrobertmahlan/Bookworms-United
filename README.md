# Bookworms United

### About the App

I love to read. But I think I might love going to bookstores even more. If you ask me about my favorite cities, for example, I will probably rank them based on the quality of their bookstores. 

Unfortunately, *finding* good bookstores is difficult. Sometimes I hear about a great bookstore from other book lovers, and sometimes I'm lucky enough to stumble across one in my wanderings. But unlike restaurants, for example, which have dedicated apps to finding good ones in your area, there is no similar app for bookstores. There is nowhere for fellow book lovers to go to share their experiences with a particular bookstore.

Enter **Bookworms United**. The idea for the app is simple: collect some basic information about bookstores (name, location, popular genres, etc.), and allow users to post their opinions about those bookstores. The goal is to make it easier for book lovers to find new bookstores.

### Getting Started

Go [here](https://bookworms-united.herokuapp.com/) to check out the app!

### Screenshots

The screenshots below were taken on June 18, 2020. The specific date is important as a reference point, since future work on the app will no doubt increase the number of bookstores one can find on the app as well as the appearance and functionality of the app.

1. Here is a screenshot of the landing page. For now it simply says 'Welcome'. This is a placeholder for what a future version of the app would display. I discuss my vision for that later.

![Bookworms United](https://i.imgur.com/waB16m0.jpg)

2. Here is a screenshot of the About page. I felt strongly that having an About page was more professional than explaining the idea behind the app on the landing page. It also will make it easier to scale the app.

![About Bookworms United](https://i.imgur.com/josKmsT.jpg)

3. Here is a screenshot of how the Bookstores index page looks when a user is *not* logged in. They can see everything that a logged-in user can see *except* for one thing: a button inviting them to add a bookstore to the list. Adding bookstores to the database is a functionality reserved only for users who are logged in. At the time of writing, the display is a simple table. As I discuss below, I eventually want to display bookstores in a more attractive way.

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

This project is a full-stack web application built using three main languages: HTML, CSS, and JavaScript. The front end of the project primarily uses NodeJS and Express, but also employs some other frameworks like PassportJS for user authentication and Nodemailer for the email functionality. The back end of the project uses a MongoDB database, hosted by MongoDB Atlas, and the Mongoose framework for interaction with the databse.

### Future Plans for this Project

More on this soon. (Yes, I see the irony.)