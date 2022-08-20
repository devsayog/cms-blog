# 🚀 LearnCode

LearnCode is a static blog about front-end web development. You can read about different articles posted on this blog.

## Table of Contents

- [General Info](#general-info)
- [Technologies used](#technologies-used)
- [Set up](#set-up)
- [feature](#feature)

### General Info

- LearnCode is a static blog about front-end web development.
- You can read about basics of frontend develpment reading different articles posted on this blog.
- It is single page application built with Nextjs.
- Contents are stored in [Hygraph](https://hygraph.com/) which is CMS.

  #### Screenshot

  ##### Homepage

  ![Homepage Screenshot](https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/0te9GWUgQfewBi5GfPUG 'Homepage')

   <form action="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/eVNO87aLTqWluQLgiUII" method="get" target="_blank"><button type="submit">View Full Image</button></form>

  ##### Post description page

  ![Postdescription Screenshot](https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/d4cj9sUMQ522bUMdbEgs 'post description page')

  <form action="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/paRrXijWQ5lYizSYXK3h" method="get" target="_blank"><button type="submit">View Full Image</button></form>

### Technologies used

- Nextjs
- Typescript
- tailwindcss
- @headlessui/react
- graphql
- @apollo/client
- Graphql codegenerator
- hygraph for backend i.e. storing content

### Set up

To run this project, first download or clone this repo

create `.env.local` file and fill

```bash
    NEXT_PUBLIC_GRAPHQL_URL={YOUR HYGRAPH CONTENT API URL}
    GRAPHQL_TOKEN={YOUR HYGRAPH PUBLIC CONTENT API TOKEN}
    HOST={`http://localhost:3000` for development {Your hosted domain name} for production}
```

```bash
    // Install dependencies
    npm install
    // Run in development mode
    npm run dev
    // Build
    npm run build
    // Start Build site
    // npm start
```

<style>
    button{
        background:#db2777;
        cursor:pointer;
        border:0;
        color: white;
        padding: 8px 16px;
        border-radius: 4px;
        box-shadow: 2px 2px 1px rgba(255,255,255,.2);
    }
</style>
