# spirtoou
Task-1 Spirto OU


## PYTHON SCRIPTS

### query app.ipynb

On running the query app, it takes in two inputs from the user
1. number of queries
2. the query user wants to search for

the script runs a set of functions and outputs statistics and visuals(timeline graphs) about the queries

### denormalise.ipynb

denormalise is a script intended to run basic GDELT APIs, to search for a query, simple update the 3rd cell in the notebook under -> 

f = Filters(
    keyword = "climate change", # filter comes with the keyword that is the search query for news
    start_date = "2020-05-10", #start date 
    end_date = "2020-05-11" #end date
)

Then simply, run the script.

### article_similarity.ipynb 

this script intends to find the similarities between articles. The output which looks like this ->

in_col1_not_in_col2: 
202
in_col2_not_in_col1: 
201

indicates that 202 articles in query 1 which are not in query 2 and vice versa.

### NOTE: All the notebooks generate .csv files

## BigQuery

The BigQuery and the scripts are in the pdf file along with objectives
