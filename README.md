# :fire: The task is to test the freedom to work with React, REST API, React Hooks and custom Hooks :fire:

# :fire: All the code has been prepared accordingly :fire:

# :fire: We do not focus on styling or RWD because I assume this is perfectly mastered :fire:

### :computer: The goal of the task is: 

1. Retrieve data specific to a particular segment from the API
2. Display this data as a list on the home page
3. On changing the segment, retrieve the data specific to that segment from the API
4. Clicking on the title is to render the `Petition.tsx` component, which will display the data from the home page and the others
   - If the `Petition.tsx` component is rendered after clicking on the title in `HomePage.tsx` then there is no API re-query -> state transfer
5. The `Petition.tsx` component must display the data regardless of whether it was rendered after `HomePage.tsx` or the URL was entered directly `e.g. (http://localhost:5173/13055)`

### :computer: getting started:

1. Download the repository
2. Install dependencies in the backend: `npm install`
3. Start the backend: `npm run start`
4. Install dependencies in the frontend: `npm install`
5. Run frontend: `npm run dev`

### :page_with_curl: Description:

Nothing needs to be done in the backend file.

It is a server in Express.js that exposes sample data to the appropriate endpoint and filters the data based on parameters.


* `usePetitions.tsx` and `useId.tsx` -> custom hookups that support data retrieval
* `Pages` -> page components
* `components` -> folder for `Header.tsx` and `LanguageSelector.tsx`
* `Router` -> routing support using react-router-dom

### :bookmark: Rules:

### :no_entry: Don't use AI (chat GPT, github copilot, etc) - this task is to test knowledge and logical thinking

### :no_entry: Don't use StackOverflow - same as above

### :green_circle: We are not in the Middle Ages so we use additional libraries like axios; you can use documentation, MDN, etc.

### :rotating_light: At the end of the work, please do a commit, describe the changes in general, include your name and push out the changes

### Target preview:

:point_right: [video](https://youtu.be/219grg7nXHI)

<details>

<summary>:point_right: Auxiliary task list</summary>

- [ ] check the available parameters and use them to retrieve data from the API
- [ ] use the data in the home page component
- [ ] handle data retrieval per selector change
- [ ] render Petition.tsx component on click on petition title
- [ ] find a way to pass data to Petition.tsx
- [ ] if you copy the URL from Petition.tsx and paste it into a new tab the page will be blank - solve this
- [ ] complete the task :fist_right: :fist_left:
</details>
