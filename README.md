# Readme

## Getting Started

To launch this project:

```
npm i
npm run dev
```

## Purpose

This project pulls from two open-source, government APIs, the [National Parks Service](https://www.nps.gov/subjects/developer/index.htm) and the [U.S. Department of Education College Scorecard](https://collegescorecard.ed.gov/data/).

This app allows the user to search for colleges and universities near a given zipcode, and also lists the national parks in the same state. If the search radius is wide, or the given zipcode is near a state boundary, a button will appear on out-of-state colleges and unverisities that allows the user to find national parks in the state of the college/university, even if it is a different state than the zipcode that was initially searched.


# Original Readme

**Preamble**

The following instruction set is vague by design.

There are many ways to perform _The Exercise_. Limit your time to four hours. Commit your code often. When you're complete, or when you've reached the time limit, push your final commit. The final commit message must contain the following string "FINAL-COMMIT," to mark the end of _The Exercise_. Submit a link to the repo when you're complete.

Preferred languages
- Node/JavaScript
- Go
- Python

**The Exercise**

Write a program which
- [ ] Creates a http web server
- [ ] Consumes a API from two different _Open Data Sources_
- [ ] Renders the respective payloads in a view

Bonus
- [ ] Containerize the program
- [ ] Clean commit history
- [ ] Testing coverage
- [ ] Using the features of the chosen language in place of relying on third party dependencies
- [ ] Interactive UI features such as pagination or sorting



**Open Data Sources**

- [data.gov](https://catalog.data.gov/dataset)
- [defense.gov](https://www.defense.gov/data.json)
