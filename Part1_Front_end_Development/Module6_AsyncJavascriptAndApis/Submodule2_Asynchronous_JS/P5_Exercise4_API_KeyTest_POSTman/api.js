/* Exercise: API key test with POSTman

Part 1:
Information about cats: Cat API Make a GET request 
on https://api.thecatapi.com/v1/breedshttps://api.thecatapi.com/v1/breeds
    What is the response?
     for each cat breed, there's an object (i only added one as example, because of the massive amount)
        [
             {
                "weight": {
                    "imperial": "7  -  10",
                    "metric": "3 - 5"
                },
                "id": "abys",
                "name": "Abyssinian",
                "cfa_url": "http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx",
                "vetstreet_url": "http://www.vetstreet.com/cats/abyssinian",
                "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian",
                "temperament": "Active, Energetic, Independent, Intelligent, Gentle",
                "origin": "Egypt",
                "country_codes": "EG",
                "country_code": "EG",
                "description": "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
                "life_span": "14 - 15",
                "indoor": 0,
                "lap": 1,
                "alt_names": "",
                "adaptability": 5,
                "affection_level": 5,
                "child_friendly": 3,
                "dog_friendly": 4,
                "energy_level": 5,
                "grooming": 1,
                "health_issues": 2,
                "intelligence": 5,
                "shedding_level": 2,
                "social_needs": 5,
                "stranger_friendly": 5,
                "vocalisation": 1,
                "experimental": 0,
                "hairless": 0,
                "natural": 1,
                "rare": 0,
                "rex": 0,
                "suppressed_tail": 0,
                "short_legs": 0,
                "wikipedia_url": "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
                "hypoallergenic": 0,
                "reference_image_id": "0XYvRd7oD",
                "image": {
                    "id": "0XYvRd7oD",
                    "width": 1204,
                    "height": 1445,
                    "url": "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
                 }
            },
        ]
-------------------------------
    Which status code do you get back?
    200OK
-----------------------------------
Part 2:
Movie information: Open Movie Database API
Make a GET request on http://www.omdbapi.com/?i=tt3896198
    What is the response?
    {
        "Response": "False",
        "Error": "No API key provided."
    }
---------------------------------
    Which status code do you get back?
        401 Unauthorized
----------------------------------------

Part 3:
Now add the following to the parameters. 
When you add them to the parameters you will see them 
appear in your request URL.

Do the GET request again for endpoint: http://www.omdbapi.com/?i=tt3896198
key: apikey value: 896f18d6
    
    Status code: 200OK
    What response do you get now?
        {
            "Title": "Guardians of the Galaxy Vol. 2",
            "Year": "2017",
            "Rated": "PG-13",
            "Released": "05 May 2017",
            "Runtime": "136 min",
            "Genre": "Action, Adventure, Comedy",
            "Director": "James Gunn",
            "Writer": "James Gunn, Dan Abnett, Andy Lanning",
            "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista",
            "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
            "Language": "English",
            "Country": "United States",
            "Awards": "Nominated for 1 Oscar. 15 wins & 59 nominations total",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "7.6/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "85%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "67/100"
                }
            ],
            "Metascore": "67",
            "imdbRating": "7.6",
            "imdbVotes": "660,387",
            "imdbID": "tt3896198",
            "Type": "movie",
            "DVD": "22 Aug 2017",
            "BoxOffice": "$389,813,101",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
        }
--------------------------------------
Can you recognize some data from the movie finder?
*/
