# BBC News Trainee, Web JS Coding Challenge: by Hamza Abdullah

Repository for the coding challenge. Created over the span of three days.

## UI Design (Layout and Styling)

-   Follows, as closely as possible and where applicable, the foundation design guidelines set out in the [BBC GEL](https://www.bbc.co.uk/gel/guidelines/category/foundations) Guidelines
-   Designed with a mobile-first approach
-   CSS uses scalable class names

-   Responsiveness

    -   Makes use of the CSS Grid Layout Module, which is supported in the vast majority of modern browsers, to define a grid layout
    -   Has defined breakpoints for both typography, and the layout. Adapts, according these breakpoints
    -   Resizes, scales, and structures the content appropriately

-   Accessibility
    -   Follows the guideline's typography advice for type size, and colour contrast

## User Experience Considerations

-   The page is structured in a clear and concise layout.
-   The heading is always bold, and at the top of the page.
    -   Spans a slightly larger width on medium and larger sized screens
    -   Allows for a distinction between the heading and the content of the article
-   If viewed on a larger tablet or desktop screen, the first paragraph is positioned to the left of the first/feature image (if there is one) which is positioned to the right.
    -   This prevents the user from mistakenly starting to read the second paragraph before the first one, which may have occured if the image was positioned to the left.
    -   The reasoning here is that our eyes generally look at the top-left of a page first, before looking anywhere else.
-   The navigation links are positioned at the end of the article.
    -   Prevents users from having to scroll back to the top

## Functionality

-   I make use of modern JavaScript features, such as let, const, and template literals.
-   Unfortunately, I'm quite new to JavaScript, but chose it since I think it makes the most sense from a web application aspect, and considering the move to Node.js frameworks such as React, and is something I'm interested in.
-   A HTTP GET request is made on load of the page for the first article.
    -   The json file location has been hard coded into the request. This of course is not ideal and would have been made dynamic.
-   An event listener should have been assigned to the "Next" link, and called a function to update the page with the subsequent article.
-   After the final article had been viewed, the five rating links would have been repeated for each article title.
    -   Clicking this link should have stored the rankings via a POST request.
