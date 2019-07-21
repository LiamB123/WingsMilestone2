Dublin Wings Bible

Link to Deployed : https://liamb123.github.io/WingsMilestone2/
My website is a simple interactive site for tourists to dublin to pick between the best 5 chicken wing locations (in my opinion and some poll results!).
The website allows toursists to compare prices, experience ratings we provide and all contact details for each establishment.

It is a comparison page with potential to grow with the addition of more features, including a possible community element were there an email list or a newsletter option added.
Essentially, this part is your sales pitch.

UX


The user stories i mainly targeted were chicken wing lovers, or generally hungry people looking for some shiny charts to click on.
To give an idea of the user i would be targeting (broadly) ive created the following 3 user stories
As a foreign tourist in ireland im travelling to dublin and want some chicken wings, but where do i go? i want a platform that will easily narrow down my choices as theres loads of restaurants in dublin. i also want some sort of idea how much ill be charged and what the place will be like, but i really dont wanna spend too much time on this.

As a local tourist to dublin i also want wings, but i dont want to be trapped in the usual temple bar kind of places. I want to see how the overall experience is, a price idea and directions to the place.

I'm an opinated wings fanatic and i must eat every top chicken wing in dublin, but ive only a day stop over on my euro trip. i want to see the best, where they are and how much they cost. I also want to know easiest ways to get there as i dont have a vehicle forr transport.

These 
Features
In this section, you should go over the different parts of your project, and describe each in a sentence or so.

Existing Features
Feature 1 - allows users X to achieve Y, by having them fill out Z
...
Feature 1 - Navigation Bar
A simple bootstrap scolling Nav Bar which allows the user to skip to particular sections, reset the graphs and jump to the contact information section for return users.
Allows the user to achieve any of these tasks with a simple click.
This feature was deployed using bootstrap documentation and some minor personalised css classes added by myself

Feature 2 - Location Pie Chart

This allows users to easily see the 5 featured restaurants in a visually pleasing way, as individual sections of a pie chart as the page loads. 
The inital loading transition is done over a short period to add to the interactive nature of the page and to get the user clicking!
This really is just to show off the range being reviewed in a clean and pleasing fashion.
I used inspiration from the Code Institute LMS to create this chart.

Feature 3 - Select Menu Bar

This feature instantly allows the user to narrow there search, from city center locations to outer county dublin locations.
This would be particularly useful for users without a car at their disposal. This feature interacts with all graphs pesonalising the page per the users
choice. This allows the user to achieve a narrowed field by selecting "Town" or "County" from the drop down menu.

Feature 4 - Price Bar Chart

This Feature allows the user to see the expected price of a portion of wings in each location. This is demonstrated through a bar chart as it makes the 
information easier to absorb and gives a user fair warning before travelling to the Restaurant.
The user is shown the data immediately but can see individual locations prices easier with the mouse hover function.
This allows the user get an idea of what to expect price wise and allows them make a rounded decision on where to go.

Feature 5 - Rankings Pie Chart

This feature shows the locations rankings score based on the websites own ranking system.
Our scoring system is explained and demonstrated, this graph can be effected from the selected menu.
This is my version of a 5 star rating but a bit more indepth, it gives users an idea of what to expect.


Features Left to Implement
Stacked Bar Chart for rankings
    The Pie chart ranking is more a filler, i had hoped to show the data in a stacked bar chart individually showing the rankings for each location
    however due to time constraints I was unable to fulfill this, but i will have it for my resubmission.
    
    Google Map
    I would like to intergrate an API of a Google map with location pins for each of the restaurants, this would enhance the interactive nature of the site
    and make it easier for users unfamiliar with Dublin to find the restaurants.
    
    Peer Review function
        I would like to be able to have user generated reviews on the restaurants, this would add to the community aspect and could allow us to tailor our
        rankings based on the community feedback.




Technologies Used

My key three languages utilised were HTML, CSS and  JavaScript.
I utilised libraries for CSS and JavaScript to ease the process and create a responsive and clean webiste.
Bootstrap
https://getbootstrap.com/
Bootstrap was utilised to help with simplifying the navigation bar and the layout of the page, making it dynamic for different screen sizes.

JQuery
https://jquery.com/
This was used to simplify the dom manipulation

DC and D3, Queue and Crossfilter
https://dc-js.github.io/dc.js/
https://d3js.org/
https://cdnjs.com/libraries/crossfilter
https://cdnjs.com/libraries/queue-async


These were utilised to create the data dashboards, allowing the data to be queued, extracted and manipulated into the interactive and responsive elements to the page
These libraries allowed the manipulation of the data and made the development process much easier dealing with JavaScript.


Testing
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

For my Html files i 

For my css files i ran the files through CodeBeautify, w3 schools validator and 

For my JavaScript files i ran it through a variety of online validators to check the accuracy and functionality of the code i'd written.
The main sites i used were JSON Lint, CodeBeautify js validator and Esprima Synthax validator


From a User perspective i attempted to break each of the graphs and became succesful easier than i would have liked. 
Although individually clicked the graphs work fine, if a once clicked graph then selects a shadowed element, it will crash the graph.
This has been rectified by the refresh graph button added to the nav bar which is always on screen for the user to reset the graphs back to a functioning level.
Really the graphs only need to be clicked once but it is ignorant to assume a user will behave in such a kind fashion!
At my current understanding level of the topic it is the best solution i could provide.

The use of Bootstrap allowed me test with Chrome Developer Tools the responsiveness of the pages sizing and boxes,
I went through all avaialable screen sizes, which led to slight changes within the html code for sizing, to provide an optimal experience for the user regardless of the medium utilised.

The best bug I encountered was after i had begun i spent days trying to figure why the dashboard wouldn't load, every validator approved the code, my mentor and member of the tutoring team said what had happened 
shouldn't be possible.
The only answer wise to fine comb the code to a fantastic result. I had linked a different version of the d3.js and it really thought me a lesson in meticulousness, as although it may have seemed perfect,
check every keystroke twice!

Deployment
This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).
The Deployment of this website was hosted on GitHub pages 
The Link is avaialable here https://liamb123.github.io/WingsMilestone2/

The pre deployment versions of the webiste included attempts at the stacked bar chart and the slight styling changes

Credits

I had some input and bug help from both my mentor Ali Ashik and my brother Darragh Browne a graduate of the course.

Content

The Text for each contact info section was written by myself, aswell as the data used for the creation of the dashboard.
The information regards contact, website and transport were pulled from their individual sights which are linked in the deployed page.


Acknowledgements
I reveived inspiration for this project as Dublin hosted a wings festival the day before submission and felt it was rather a fitting and entertaining topic 
to work on, while keeping it light hearted and i truely believe there is a market for this kind of page with toursist and locals alike.
I also feel this site is an improvement on my first milestone attempt but it still lacks what i would have liked to achieve with the page.
The resubmission will hopefully address these short comings and improve my final grade.