# Front-end challenge
Implement an expenses list fetching all expenses from the provided API. Allow the user to add notes and upload receipt pictures to each expense.

See the [API details](https://github.com/pleo-io/frontend-challenge/blob/master/api/README.md) for implementation.

## Description of the project
I've tried to recreate the same visual appearance as seen on this screenshot:

![Pleo screenshot](https://www.pleo.io/cbbc592f6101b0f5cd3275098b986e94.png)

The project is totally functional. You can:
- Expense listing (limit queries to 25 items per page).
- Load more pages.
- Filter through all fields (Currency, for example)
- Open a expense detail.
- Post a comment.
- Upload as much receipts as desired
- Show receipts in a modal
- People avatar on every expense :)

I've used:
- Vue
- Vuex
- i18n
- TailwindCSS (which internally uses PostCSS)
- FontAwesome SVG icons
- Axios
- Moment (for dates)
- ESLint
- Prettier

There is an App Component, there, it's called Sidebar component and a view called Expenses. Then inside the view we call different components:
- ActionBar
- Search
- ExpensesList
- ExpensesDetail
- ExpensesDetailElements
- ExpensesDetailElementsElement

You can check all the state management in store folder.

I've tried to be as modular as needed and follow naming conventions to easily detect components and their aim.

## Things that are not OK
Due to the dimension of the project, I rather prefered to use Vue and my expertise and be as detailed as possible in order to have everything working properly. That means:
- There is no typescript.
- There is no React at all.

I think it shows you more globally where I am. React is an issue, but nothing I can't solve studying and practicing. Same with Typescript.

Also, i'm not a designer, i've tried to do my best. The visual approach is  more or less ok (by my point of view at least! xD) but that also means
- There is no mobile view
- SaaS presence is almost a joke

I've prefered to use Tailwind because it has a fast approach for developers.

It took me Friday afternoon, Saturday more or less all the day, 8h of the sunday and some hours more today (monday).
So. Here you have. It was fun!!

## Functional requirements
- DONE. User can list expenses. Expenses are listed.
- DONE. User can add a comment on an expense
- DONE. User can filter on expenses (client side filters).
- DONE. User can add a receipt image on an expense

## General requirements
A single page application using a modern JS library/framework including:
- DONE. A visually pleasing experience, you don’t have to be a designer but you must have put an effort into making this look good
- DONE. A "componentized" approach, split your code into small building blocks, showcase your clean architecture skills.
- DONE. Tailwind + some SASS lines. CSS can be written using PostCSS, SASS, LESS or similar higher-level language
- YEAH. The use of any libraries or frameworks as long as you can explain to us why you chose them.
- A brief description of your project. How long did it take? Which part was the hardest to implement? What functionalities are you most proud of?

## Nice to have
Want to go the extra mile? Here's few suggestion of things we'd like to see (or go crazy and implement what you think will impress us).
- Responsive design
- DONE. Implement with a state management library (Redux, Mobx, VueX, ...)
- Implement solution in TypeScript
- DONE. Localization: support for multiple languages (English, French, ...)

## What we're looking for
- Using high-quality existing libraries or small amounts of custom code
- Production grade code (clean, maintainable, reusable code)
- Showing your work through your commit history
- Polish and visual creativity
- Pride in craftsmanship
