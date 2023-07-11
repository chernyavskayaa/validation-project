# Project description

The project is a simple web application where you can pass some params to filter/sort countries retrieved from the public API. The user is able to see a final result on a screen.

The project aim is to understand the average development speed with and without AI tools. This repository code was submitted without help of any AI tools from a Senior level developer. The same project was developed with the help of AI tools and submitted to another repository.

## How to run the project

1. `npm i`
2. `npm start`

## How to run the tests

1. `npm test`

## Examples of using the project

1. Send the request without touching the form - you'll see the result with default values.
2. Change the country population to 1 - you will be able to see top 20 countries with the smallest population.
3. Change the country population to 1000 and paginate to 5 - you will see top 5 countries with the largest population.
4. Change the country population to 1000 and paginate to 5 and put sort by 'descend' - you will see top 5 countries with the largest population sorted by name reversed.
5. Change the sort by from 'ascend' to 'descend' - you will see the list from the end.
6. Enter some part of country name - you will see only matched countries.
7. Enter the full country name - you will see only one country.
8. Enter the paginate to 100 - you will see 100 countries or less (if the condition is not met).
9. Enter the paginate to 0 - you will see 0 countries.
10. Enter the paginate to negative value - you will see browser validation.
