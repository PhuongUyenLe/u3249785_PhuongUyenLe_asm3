 # ASM3

## aimed
 In the pursuit of creating an entertainment platform like Netflix, yet uniquely focused on facilitating user feedback, I engaged in the development of a movie-oriented website. We designed this platform to provide users with comprehensive insights and critiques related to their potential movie choices. To achieve this, I commissioned ChatGPT to outline a website framework comprising three principal segments: a welcoming landing page, a robust browsing interface, and genre-specific sections. Subsequently, I meticulously refine and tailor this framework to ensure alignment with the intended user experience and operational objectives of the platform.

### Here is the structure that ChatGPT generated for my website: 
**Dashboard**
 ![Dashboard page](img-demo/dashdoard.jpg)
 **Browse**
 ![Browse page](img-demo/browse.jpg)
 **Details**
 ![Details page](img-demo/details.jpg)
 **Genre**
 ![Genre page](img-demo/genre.jpg)

## Website Structure and Features:
- Welcome Page: The landing page serves as the initial point of entry for users. It features a prominent "Get Started" button, guiding users to the browsing interface. 
- Browsing Interface: The browsing interface resembles a web browser running on a movie streaming website. Tabs and bookmark icons at the top indicate user interests. The interface showcases a highlighted movie and offers a horizontal scroll of available movies and series, each accompanied by a thumbnail image, title, IMDb rating, and a 'Play' button.
- Movie Information Page: Clicking on the 'Play' button directs users to the information page of the selected movie. This page displays a large thumbnail image, along with details such as a short description, category, rating, and recommendations for similar movies.

## Technologies Used:
- Bootstrap CSS was used to improve the website's visual appeal, such as the header (navigation bar) and banner displayed as a carousel slide.
- JQuery: Utilising jQuery, a JavaScript library, helped streamline the process of querying and manipulating elements.
- Splide: Splide, a library for creating horizontal slides, was used to showcase movies, enhancing the user experience with its smooth functionality.

## Challenges and Solutions:
- Bootstrap Slide Issue: Initially faced difficulties in illustrating three movies using Bootstrap. Resolved by utilizing Splide to display more options effectively.
- Repetitive Data Usage: Addressed the challenge of using the same information across multiple pages by implementing JSON data structures, following ChatGPT's recommendation.
- JQuery Functionality: Encountered issues with jQuery implementation; sought assistance from peers to devise functions for generating views effectively.

## Responsive 
I also optimized our website's layout and functionality to ensure seamless viewing on mobile phones, tablets, and laptops, prioritizing responsiveness across diverse devices for an enhanced user experience.

Throughout the project, I conducted extensive research, discovering additional CSS libraries such as jQuery, JSON data structures, and Splide. ChatGPT played a significant role in transforming the website structure and provided invaluable assistance in consolidating and completing the project.

In conclusion, the development process involved overcoming challenges, leveraging innovative technologies  to deliver an engaging movie-oriented website.

## Reference list 
- Mark Otto, J. T. (n.d.). Bootstrap. Bootstrap · The most popular HTML, CSS, and JS library in the world. https://getbootstrap.com/ 
- openjsf.org, O. F.-. (n.d.). JQuery. https://jquery.com/ 
- Splide. The lightweight, flexible and accessible slider/carousel. (n.d.). https://splidejs.com/ 