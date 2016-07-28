# Positioning

As we expect more and more people and organisations to join the blockchain investment space it is crucial to provide a comprehensive tool to learn, explore and track crypto portfolios. If hypothesis that cyber•Fund wants to become #1 destination for crypto investors is correct, it makes sense to focus on the following two goals in its product design:
* (1) Depth of its data and data analytics regarding various blockchain assets
* (2) Ease of use and onboarding speed for new users

# Product Design

Correct approach for building high-performance cross-platfrom service would be to modularize various logical blocks on the website in order to minimize code duplication and simplify UI by unifying it.

My recommendation would be to first split current **asset** and **portfolio** pages' layout into contextual blocks, then come up with design of the most elegant way of displaying information within the blocks (taking into account both layout of this page and all other target pages to display a specific block). Once complete, it would make sense to create a page layout that would include required blocks based on following product goals:
* User target action — what do we want user to do on the page
* Usability and ease-of-use
* Elegance and design

Page composition should also reflect the cross-site blocks, such as list of crowdsales, top performers or any other highly valuable information that would increase overall engagement and depth of site exploration.

## Portfolio 

### Research

#### How do leading financial apps display portfolio?

![Imgur](http://i.imgur.com/Rt7O1lk.png)
![Imgur](http://i.imgur.com/F1Ja1q4.jpg)
![Imgur](http://i.imgur.com/SLiXxFc.png)
![Imgur](http://i.imgur.com/hkcWVOC.png)
![Imgur](http://i.imgur.com/CJCWfYb.png)
![Imgur](http://i.imgur.com/cxQYqo5.png)

### Recommendations

#### Entities

Three levels of separate entities (Profile, Account, Portfolio) is complex and hard to understand for new users.

I propose having a single cross-service **profile** (user account) with an option to have one or multiple **portfolios** which consists of one or many **assets**.

#### Editing

Having all portfolio editing option on the same app screen is quite heavy visually, so I propose taking portfolio creation and editing functionality on a separate window which might be an overlay pop-up or just a separate page.

#### Use cases

It seems like there is two main use cases for the portfolio part of the app:
* (1) Manage and track your own crypto portfolio
* (2) Follow and explore public portfolios

I propose splitting the UI composition based on the use cases above with a strong focus on analytics and recommendations in the use case (1) and focus on visualizaion and social aspects in (2). Although UI difference won't affect the layout, the block composition and order on the page should be adapted to the use case.

#### Charts

In order not to overload the page I'd only show one chart — pie chart with an asset distribution in the portfolio. Performance graph is either expandable by a switch (or tab), or lives on a separate page (overlay).

## Assets

### Asset Summary
![Imgur](http://i.imgur.com/FZvqVPW.png)

### Asset Information Extended

### Price Chart
![Imgur](http://i.imgur.com/2IafUGC.png)

### Price Chart Extended

### News
![Imgur](http://i.imgur.com/Tj6ZSAZ.png)