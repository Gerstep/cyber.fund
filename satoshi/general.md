# Positioning

As we expect more and more people and organisations to join the blockchain investment space it is crucial to provide a comprehensive tool to learn, explore and track crypto portfolios. If hypothesis that cyber•Fund wants to become #1 destination for crypto investors is correct, it makes sense to focus on the following two goals in its product design:
* (1) Depth of its data and data analytics regarding various blockchain assets
* (2) Ease of use and onboarding speed for new users

# Product Design

Correct approach for building high-performance cross-platfrom service would be to modularize various logical blocks on the website in order to minimize code duplication and simplify UI by unifying it.

My recommendation would be to first split current /system/ page layout into contextual blocks, then come up with the most efficient way of displaying information within the block (taking into account both layout of this page and all other target pages to display a specific block). Once complete, it would make sense to create a page layout that would include required blocks based on following product goals:
* User target action — what do we want user to do on the page
* Usability and ease-of-use
* Elegance and design

Page composition should also reflect the cross-site blocks, such as list of crowdsales, top performers or any other highly valuable information that would increase overall engagement and depth of site exploration.

## Portfolio 

### Entities

Three levels of separate entities (Profile, Account, Portfolio) is complex and hard to understand for new users.

I propose having a single cross-service **profile** (user account) with an option to have one or multiple **protfolios** which consists of one or many **assets**.

### Use cases

It seems like there is two main use cases for the portfolio part of the app:
* (1) Manage and track your own crypto portfolio
* (2) Follow and exlore public portfolios

I propose splitting the UI composition based on the use cases above with a strong focus on analytics and recommendations in the use case (1) and focus on visualizaion and social aspects in (2).

## Assets

### Asset Summary
[Imgur](http://i.imgur.com/FZvqVPW.png)

### Asset Information Extended

### Price Chart
[Imgur](http://i.imgur.com/2IafUGC.png)

### Price Chart Extended

### News
[Imgur](http://i.imgur.com/Tj6ZSAZ.png)