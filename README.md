# Restaurant-Search

questions.md.
1.	How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
	I spend 4 hours on the coding Assignment. I would add localization and create more Beautiful UI using UI library.
2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
	In a ReactJS Most useful feature added is act().When writing UI tests, tasks like rendering, user events, or data fetching can be considered as “units” of interaction with a user interface. React provides a helper called act() that makes sure all updates related to these “units” have been processed and applied to the DOM before you make any assertions. 
	Code snippet:
	 Without act() : it(‘Should return some text’, 
() => { render(, container);           expect(container.textContent).toBe(‘some text’); }); 
	With act() : it(‘Should return some text’, 
() => { act(() => { render(, container); });

3.	How would you track down a performance issue in production? Have you ever had to do this?
	Yes, I have done this many times. I use some automated testing tools and reactJS profiler to observe render duration and committed time.

4.	 How would you improve the API that you just used?
	 I would Handle errors gracefully and return standard error code for API users, when an error occurs, we should handle errors gracefully and return HTTP response codes that indicate what kind of error occurred. This gives maintainers of the API enough information to understand the problem that is occurred. We don’t want errors to bring down our system, so we can leave them unhandled, which means that the API consumer has to handle them.

5.	Please describe yourself using JSON.
6.	{
7.	        "name": "Priyanka",
8.	        "lastName": "Patel",
9.	        "mobile":"416-474-8234",
10.	        "email":"priyanka.p9@yahoo.com",
11.	        "address": 
12.	        {
13.	           "line1":"18",
14.	           "zip":"M1G2N7"
15.	        },
16.	        "age": 2,
17.	        "nationality": "Indian",
18.	        "language": [
19.	            "Hindi",
20.	            "English",
21.	            "Gujarati"
22.	        ],
23.	        "skills": [
24.	            "HTML/CSS",
25.	            "JavaScript",
26.	            "ReactJS",
27.	            "SQL",
28.	            "ReactJS",
29.	            "Angular"
30.	        ],
31.	        "interests": [
32.	        "Reading",
33.	        "Travelling"
34.	        ],
35.	        "believes":  "Never Negative Ever Positive!"
36.	}
