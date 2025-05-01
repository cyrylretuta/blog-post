# Blog-Post-Viewer App

This is a React-based blog post viewer application that fetches and displays a list of blog posts using Axios from an API. The application includes error handling through the implementation of an ErrorBoundary component to gracefully catch errors that may occur during data fetching or rendering.

## How Axios is Used to Fetch Data

Axios is used to make HTTP requests to the API endpoint https://jsonplaceholder.typicode.com/posts to fetch a list of blog posts. The following process is used:

useEffect hook: This React hook is used to fetch data when the component mounts.

Axios GET Request: The axios.get() method is used to fetch the blog posts from the API. Once the data is fetched, it is stored in the posts state.

Error Handling: If an error occurs while fetching the data, the error message is captured and stored in the error state.

## Explanation of How the ErrorBoundary is Implemented and Used

The ErrorBoundary component is a higher-order component that wraps the BlogPostList component to handle any errors that occur during rendering. If an error is thrown, the ErrorBoundary displays a fallback UI (such as a message that an error occurred) instead of crashing the app.

## Key Features

If there is an issue while rendering the list of blog posts, the error boundary will catch the error and display a user-friendly message instead of crashing the app.

It’s wrapped around components that are prone to errors, such as fetching data from external APIs or rendering content dynamically.

## Challenges Faced During Implementation

Learning Error Boundaries: Understanding how to implement and use React’s ErrorBoundary was a bit challenging, especially with handling the fallback UI and ensuring that the app didn’t break when an error occurred.

Managing Axios Requests: Handling asynchronous data fetching with useEffect and Axios took some trial and error to ensure data was properly fetched and errors were properly handled.

Git and Deployment Issues: Initially faced some issues with pushing changes to GitHub and linking the repository with deployment services like Vercel.

## Deployment

Live demo here: (https://cyrylretuta.github.io/blog-post/)
