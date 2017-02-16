# knitsights

[Knitsights](http://laurenfb.github.io/knitsights) is my capstone project for [Ada Developers Academy](http://adadevelopersacademy.org/), cohort 6. The frontend (this repository) is built using Backbone.JS, and talks to a Flask backend (repository [here](https://github.com/laurenfb/knitsights-backend)).  

See slides from my presentation [here](https://docs.google.com/presentation/d/13kHu_l4GTG-VbGCb9CVdQgDdnRv-vxBrzCDKWX7gTKA/edit?usp=sharing).

# about

A knitter doesn't often know how fast she knits. Even with the wealth of data that many knitters keep in their [Ravelry](http://www.ravelry.com/) account -- a database/social networking site with nearly 7 million users -- a knitter might not know how quickly she knits and whether her time is too limited for a certain project's ambition.

Using Knitsights, a knitter can gain better understanding of her speed and capabilities. Knitsights uses data from a user's Ravelry account to determine whether she can finish those 7 pairs of socks before Christmas, or if there is really enough time to bang out a baby sweater before her sister-in-law's third baby shower in as many years.

# functionality

After importing her data, the user is shown categories, with projects nested inside of them. For instance, she may have "sweaters," "socks," "blankets," and "misc" categories. Clicking on a project brings up a menu that allows her to change which category her project belongs to, or remove it entirely from consideration. She may want to do this for a project that took a particularly long or short time to finish, so that it doesn't over-impact her averages.

When she is satisfied with the sorting of her projects and clicks save, the knitter is shown a top-level view of each category along with her shortest, longest, and average time to complete a project of that category.

# future improvements

* The next hurdle for me to face is authentication. For the moment, visitors to Knitsights can use the site with my own personal data, but cannot import their own. This was a major focus for me in the final few days of Capstone, but I ran out of time to fully implement Oauth through Ravelry.
* I'd like to build out the UX for new users' workflow to make visitors more comfortable and confident in navigation.
* Routing, enabling the user to bookmark and refresh, is essential for future usability.
* While the site is technically responsive, it's much more attractive on desktop and I'd like to extend that to mobile.
* Finally, the ability to set goals, and to receive notifications via email or text to keep the user on track towards those goals, would be a great asset to keep traffic coming back.

# technologies

Frontend
* Javascript
* Backbone.JS
* Webpack
* Github Pages

Backend
* Python
* Flask
* [Ravelry API](http://www.ravelry.com/api)
* PostgreSQL
* Heroku

# questions?

I'm happy to talk more about this project or about Ada! You can reach me at laurenfriesbrink@gmail.com.
